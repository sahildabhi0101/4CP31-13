import React from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "react-use-cookie";
import { useState, useEffect } from "react";
import { TagInput } from 'evergreen-ui'

import {UpdateStudentProject } from "../../../API/ProjectAPI";
import "./updateProject.css";
import axios from 'axios';

const initialValues = {
  project_title: "",
  project_desc: "",
//   tags: [],
//   image: ""
  // tags: [],
};


export default function UpdateProject() {
  const { project_id } = useParams();
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [initialValues, setInitialValues] = useState({
    project_title: '',
    project_desc: '',
  })
  const [tag, setTags] = useState([]);
  const [photo,setPhoto] = React.useState("");
  useEffect(() => {
    fetchProject();
    console.log("token-", token);
    if (token === "") {
      setToken(getCookie("st"));
    }
  }, []);

  const fetchProject = async () => {
    const project = await axios.get(`/api/project/oneprojectstudent/${project_id}`)
    console.log(project);
    initialValues.project_title = project.data.userdata.project_id.project_title;
    initialValues.project_desc = project.data.userdata.project_id.project_desc;
    // initialValues.tags = project.data.userdata.project_id.tags;

    // console.log('project', initialValues.project_title, initialValues.project_desc, initialValues.tags)
    setTags(project.data.userdata.project_id.tags)
    setPhoto(project.data.userdata.project_id.image[0].url)
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
      project_title: initialValues.project_title,
      project_desc: initialValues.project_desc,
      tags: tag,
      image: {
        url: file.url,
        public_id: file.public_id
      },
    };
    console.log("update",updateData)
    const isUpdate = await UpdateStudentProject(project_id, updateData)
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
              <input type="file" className="form-control-file mt-0 ml-3" id="input-file" onChange={(e) => { setPhoto(e.target.files[0]);  }} />
                {/* <input type="file" multiple onChange={ (e) => {setPhoto( oldarray => [...oldarray, e.target.files[0] ] ) } }  /> */}
                <input
                  name="project_title"
                  className="writeInput"
                  placeholder="Title"
                  type="text"
                  autoFocus={true}
                  onChange={handleInput}
                  value={initialValues.project_title}
                />
              </div>
              <div className="writeFormGroup">
                <textarea
                  name="project_desc"
                  className="writeInput writeText"
                  placeholder="Tell your story..."
                  type="text"
                  onChange={handleInput} value={initialValues.project_desc}
                />
              </div>
              <div style={{
                display: 'block', width: 700, paddingLeft: 30
              }}>
                <h4>Enter Tags of your project</h4>
                <TagInput
                  defaultValue={tag}
                  inputProps={{ placeholder: 'Add Names..' }}
                  onChange={data => { setTags(data) }}
                  values={tag}
                />
              </div>
              <div className="btn-grounp">
                  <button type="submit" onClick={onSubmit} className="btn btn-primary mt-2 float-right">UPDATE PROJECT</button>
                </div>
            </div>
          </form>

        
    </div>
  );
}
