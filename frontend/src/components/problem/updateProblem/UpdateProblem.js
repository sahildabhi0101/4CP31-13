import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getCookie} from "react-use-cookie";
import { useState, useEffect } from "react";
import { TagInput } from 'evergreen-ui'
import {UpdateAgencyProblem} from "../../../API/ProblemAPI";
import "./updateProblem.css"
import axios from "axios"

const initialValues = {
    problem_title:"",
    problem_desc:"",
}
const UpdateProblem = () => {
    const { problem_id } = useParams();
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [initialValues, setInitialValues] = useState({
    problem_title: '',
    problem_desc: '',
  })
  const [tag, setTags] = useState([]);
  const [photo,setPhoto] = React.useState("");
  useEffect(() => {
    fetchProblem();
    console.log("token-", token);
    if (token === "") {
      setToken(getCookie("st"));
    }
  }, []);

  const fetchProblem= async () => {
    const problem = await axios.get(`/api/problem/oneproblemagency/${problem_id}`)
    console.log("problem",problem);
    initialValues.problem_title = problem.data.userData.problem_id.problem_title;
    initialValues.problem_desc = problem.data.userData.problem_id.problem_desc;
    // initialValues.tags = problem.data.userdata.problem_id.tags;

    // console.log('project', initialValues.project_title, initialValues.project_desc, initialValues.tags)
    setTags(problem.data.userData.problem_id.tags)
    setPhoto(problem.data.userData.problem_id.image[0].url)
  }
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInitialValues((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  const data = new FormData();
  useEffect(() => { console.log(photo)  })


  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log("You are in submit field")
    // send data to API key
    // console.log(photo)
    setToken(token);
    
    data.append('file', photo);
    console.log(data)
    data.append('upload_preset', "4cp31_79")
    const res = await fetch(`https://api.cloudinary.com/v1_1/dsrxkouht/image/upload`, {
      method: 'POST',
      body: data
    })
    const file = await res.json();

    const updateData = {
      project_title: initialValues.problem_title,
      project_desc: initialValues.problem_desc,
      tags: tag,
      image: {
        url: file.url,
        public_id: file.public_id
      },
    };
    console.log("update",updateData)
    const isUpdate = await UpdateAgencyProblem(problem_id, updateData)
    console.log(isUpdate)
    if (isUpdate.statusCode === 200) alert('Updated successfully')
    else alert('Not updated')
  };
  return (
    <div className="write">
      <img
        className="writeImg"
        src={photo}
        alt=""
      />
     
          <form onSubmit={onSubmit}>
            <div className="writeForm">
              <div className="writeFormGroup">
              <input type="file" class="form-control-file mt-0 ml-3" id="input-file" onChange={(e) => { setPhoto(e.target.files[0]);  }} />
                {/* <input type="file" multiple onChange={ (e) => {setPhoto( oldarray => [...oldarray, e.target.files[0] ] ) } }  /> */}
                <input
                  name="project_title"
                  className="writeInput"
                  placeholder="Title"
                  type="text"
                  autoFocus={true}
                  onChange={handleInput}
                  value={initialValues.problem_title}
                />
              </div>
              <div className="writeFormGroup">
                <textarea
                  name="project_desc"
                  className="writeInput writeText"
                  placeholder="Tell your story..."
                  type="text"
                  onChange={handleInput} value={initialValues.problem_desc}
                />
              </div>
              <div style={{
                display: 'block', width: 700, paddingLeft: 30
              }}>
                <h4>Enter Tags of your problem</h4>
                <TagInput
                  defaultValue={tag}
                  inputProps={{ placeholder: 'Add Names..' }}
                  onChange={data => { setTags(data) }}
                  values={tag}
                />
              </div>
              <div className="btn-grounp">
                  <button type="submit" onClick={onSubmit} className="btn btn-primary mt-2 float-right">UPDATE PROBLEM</button>
                </div>
            </div>
          </form>
    </div>
  )
}

export default UpdateProblem
