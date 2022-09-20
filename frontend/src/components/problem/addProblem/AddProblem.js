import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { TagInput } from 'evergreen-ui'
import "./addProblem.css";
import axios from 'axios';
import { AddAgencyProblemAPI, AddProblemAPI } from '../../../API/ProblemAPI';

export default function AddProblem() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [initialValues, setInitialValues] = useState({
    problem_title: '',
    problem_desc: '',
  })
  const [tag, setTags] = React.useState([]);
  const [photo, setPhoto] = React.useState("");
  
  const data = new FormData();
  
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("Token")))
    console.log("token-", token);
  }, []);
  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(initialValues)
    setInitialValues((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(initialValues);
    console.log(tag);
    console.log(photo)
    data.append('file', photo);
    // console.log(data);
    data.append('upload_preset', "4cp31_79")
    // await axios.post(`https://api.cloudinary.com/v1_1/dsrxkouht/image/upload`, data)
    //   .then((res) => {
    //     console.log(res);
    //   })
    const res = await fetch(`https://api.cloudinary.com/v1_1/dsrxkouht/image/upload`, {
      method: 'POST',
      body: data
    })
    const file = await res.json();
    
    console.log("file is ",file);
    const body = {
      problem_title: initialValues.problem_title,
      problem_desc: initialValues.problem_desc,
      image: {
        url: file.url,
        public_id: file.public_id
      },
      tags: tag,
      solution_id: null
    };
    console.log('body ', body);
    const problemAdded = await AddProblemAPI(body);
   
    console.log(problemAdded)
    // const problem_id = problemAdded.savedProblem._id;

    // console.log("token:---", token);
    // console.log("problem_id:---", problem_id);
    // const agencyProblemAdded = await AddAgencyProblemAPI({
    //   problem_id,
    //   token,
    // });

    // console.log(agencyProblemAdded);

    // if (!problemAdded || !agencyProblemAdded) {
    //   alert("Something went wrong!");
    // } else {
    //   // To redirect writtern blog
    //   // navigate(`/project/${project_id}`);
    // }
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form>
        <div className="">
          <div className="">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input type="file" onChange={(e) => { setPhoto(e.target.files[0]) }} />
            <input
              name="problem_title"
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              onChange={handleInput}
              value={initialValues.problem_title}
            />
          </div>
          <div className="">
            <textarea
              name="problem_desc"
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              onChange={handleInput}
              value={initialValues.problem_desc}
            />
          </div>
          <div style={{
            display: 'block', width: "700", paddingLeft: "30"
          }}>
            <h4>Enter Tags of your problem</h4>
            <TagInput
              inputProps={{ placeholder: 'Add Names..' }}
              onChange={data => { setTags(data) }}
              values={tag}
            />
          </div>
          <button type="submit" onClick={onSubmit} className="btn btn-primary font-weight-bold mt-3">Add problem</button>

        </div>
      </form>
    </div>
  );
}
