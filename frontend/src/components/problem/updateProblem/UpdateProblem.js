import React from 'react'
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { useNavigate, useParams } from 'react-router-dom';
import { getCookie} from "react-use-cookie";
import { useState, useEffect } from "react";
import { TagInput } from 'evergreen-ui'
import {UpdateAgencyProblem} from "../../../API/ProblemAPI";
import axios from "axios"
import Switch from "react-switch";

const initialValues = {
    problem_title:"",
    problem_desc:"",
}
const UpdateProblem = () => {

  const handleChange = () => {
    setva(!va)

  }

    const { problem_id } = useParams();
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [initialValues, setInitialValues] = useState({
    problem_title: '',
    problem_desc: '',
  })
  const [va,setva] = useState(true);
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
    setva(problem.data.userdata.problem_id.status)
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
    let status
    if(va === true){
      status = 'active'
    }
    else{
      status = 'inactive'
    }
    const updateData = {
      project_title: initialValues.problem_title,
      project_desc: initialValues.problem_desc,
      tags: tag,
      image: {
        url: file.url,
        public_id: file.public_id
      },
      status: status
    };
    console.log("update",updateData)
    const isUpdate = await UpdateAgencyProblem(problem_id, updateData)
    console.log(isUpdate)
    if (isUpdate.statusCode === 200) alert('Updated successfully')
    else alert('Not updated')
  };
  return (
    <>
    <Navbar/>
    <section class="page-title">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2 text-center">
              <h3>Update Project</h3>
            </div>
          </div>
        </div>
      </section>
    {/* <div className="write">
      <img
        className="writeImg"
        src={photo}
        alt=""
      /> */}<div className="container">
        <div className="row">
          <div className="col-md-12"></div>
          <form onSubmit={onSubmit}>
          <fieldset className="p-4">
          <div class="col-lg-12 col-md-12">
						<div class="widget personal-info">
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-12">
                    <div class="form-group">
                      <label for="first-name">Title:</label>
                      <input
                        name="project_title"
                        className="form-control"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                        onChange={handleInput}
                        value={initialValues.problem_title}
                      />
                    </div>
                      </div>
                  </div>
                </div>
                <div class="form-group choose-file d-inline-flex ">
                  <i className="fa fa-archive text-center px-2 mt-0"></i>
                    <input type="file" className="form-control-file mt-2 ml-2" id="input-file" onChange={(e) => { setPhoto(e.target.files[0]);  }} />
                {/* <input type="file" multiple onChange={ (e) => {setPhoto( oldarray => [...oldarray, e.target.files[0] ] ) } }  /> */}
              </div>
              <div className="row">
                  <div className="col-lg-12 py-1">
                    <div class="form-group">
                    <label for="comunity-name">Tags</label>
                    <TagInput
                      className="form-control"
                      defaultValue={tag}
                      inputProps={{ placeholder: 'Add Names..' }}
                      onChange={data => { setTags(data) }}
                      values={tag}
                    />
								    </div>
                  </div>
              </div>
              <div class="form-group">
									<label for="comunity-name">Description</label>
									<textarea name="project_desc" className="border w-100 p-3 mt-2 mt-lg-2" placeholder="Description *" type="text" onChange={handleInput} value={initialValues.problem_desc} />
								</div>
                <div class="form-group choose-file d-inline-flex "><label for="first-name">Status :&nbsp;&nbsp;&nbsp;&nbsp;</label><Switch onChange={handleChange} checked={va} /></div>
              <div className="btn-grounp">
                  <button type="submit" onClick={onSubmit} className="btn btn-primary mt-2">UPDATE PROBLEM</button>
              </div>
              </div>
              </div>
            </fieldset>
          </form>
          </div>
    </div>
    <Footer/>
    </>
  )
}

export default UpdateProblem
