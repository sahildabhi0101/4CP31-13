import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TagInput } from 'evergreen-ui'
import {AddProjectAPI, AddStudentProjectAPI } from "../../../API/ProjectAPI";
import "./addProject.css";
import axios from 'axios';

export default function AddProject() {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [initialValues,setInitialValues] = useState({
    project_title: '',
    project_desc: '',})
  const [tag, setTags] = React.useState([]);
  const [photo, setPhoto] = React.useState("");

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem("Token")))
    console.log("token-", token);
  }, []);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInitialValues((preval) => {
        return {
            ...preval,
            [name]: value
        }
    })
}

  const onSubmit = async () => {
    console.log(initialValues);
    console.log(tag);
    console.log(photo)

    const data = new FormData();

    data.append('file', photo);
    console.log(data);
    data.append('upload_preset', "4cp31_79")
    await axios.post(`https://api.cloudinary.com/v1_1/dsrxkouht/image/upload`,data)
    .then((res) =>
    {
      console.log(res);
    })
    /*const res = await fetch(`https://api.cloudinary.com/v1_1/dsrxkouht/image/upload`, {
      method: 'POST',
      body: data
    })
    const file = await res.json();
    */
   //console.log("file is ",file);
    const body = {
      project_title: initialValues.project_title,
      project_desc: initialValues.project_desc,
      // image: {
      //   url: file.url,
      //   public_id: file.public_id
      // },
      tags: tag,
    };
    console.log('body ', body);
    // const projectAdded = await AddProjectAPI(body, values.select);
    // const projectAdded = await axios.post(`/api/project/add`, body)


    // console.log(projectAdded)
    // const project_id = projectAdded.data.savedProject._id;

    // console.log("token:---", token);
    // console.log("project_id:---", project_id);
    // const studentProjectAdded = await AddStudentProjectAPI({
    //   project_id,
    //   token,
    // });

    // console.log(projectAdded);
    // console.log(studentProjectAdded);

    // if (!projectAdded || !studentProjectAdded) {
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
                  name="project_title"
                  className="writeInput"
                  placeholder="Title"
                  type="text"
                  autoFocus={true}
                  onChange={handleInput}
                  value= {initialValues.project_title}
                />
              </div>
              <div className="">
                <textarea
                  name="project_desc"
                  className="writeInput writeText"
                  placeholder="Tell your story..."
                  type="text"
                  onChange={handleInput}
                  value= {initialValues.project_desc}
                />
              </div>
              <div style={{
                display: 'block', width: "700", paddingLeft: "30"
              }}>
                <h4>Enter Tags of your project</h4>
                <TagInput
                  inputProps={{ placeholder: 'Add Names..' }}
                  onChange={data => { setTags(data) }}
                  values={tag}
                />
              </div>
              <button type="submit" onClick={onSubmit} className="btn btn-primary font-weight-bold mt-3">Add Project</button>
              
            </div>
          </form>
    </div>
  );
}
