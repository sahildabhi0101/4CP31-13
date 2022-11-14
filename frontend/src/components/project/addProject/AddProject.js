import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TagInput } from 'evergreen-ui'
import { AddProjectAPI, AddStudentProjectAPI } from "../../../API/ProjectAPI";
import axios from 'axios';

// toast.configure()
export default function AddProject() {

  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [initialValues, setInitialValues] = useState({
    project_title: '',
    project_desc: '',
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

    //console.log("file is ",file);
    const body = {
      project_title: initialValues.project_title,
      project_desc: initialValues.project_desc,
      image: {
        url: file.url,
        public_id: file.public_id
      },
      tags: tag,
    };
    console.log('body ', body);
    const projectAdded = await AddProjectAPI(body);

    console.log(projectAdded)
    const project_id = projectAdded.savedProject._id;

    console.log("token:---", token);
    console.log("project_id:---", project_id);
    const studentProjectAdded = await AddStudentProjectAPI({
      project_id,
      token,
    });

    console.log(studentProjectAdded);

    if (!projectAdded || !studentProjectAdded) {
      alert("Something went wrong!");
    } else {
      alert("project added successfully!");
      navigate(`/project/${project_id}`);
    }
  };

  return (
    <>
      <Navbar />
      <section class="page-title">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2 text-center">
              <h3>Add Project</h3>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-12"></div>
            <form action="#">
              <fieldset className="p-4">
              <div class="col-lg-12 col-md-12">
						<div class="widget personal-info">
                <div className="form-group">
                  <div className="row">
                    <div className="col-lg-12">
                    <div class="form-group">
									<label for="comunity-name">Title</label>
                      <input type="text" placeholder="Title *" className="form-control" required
                        name="project_title"
                        autoFocus={true}
                        onChange={handleInput}
                        value={initialValues.project_title} />
                    </div>
                    </div>
                  </div>
                </div>
                <div class="form-group choose-file d-inline-flex ">
                  <i className="fa fa-archive text-center px-2 mt-0"></i>
                  <input type="file" class="form-control-file mt-2 ml-3" id="input-file" onChange={(e) => { setPhoto(e.target.files[0]) }} />
                </div>
                <div className="row">
                  <div className="col-lg-12 py-1">
                  <div class="form-group">
                    <label for="comunity-name">Tags</label>
                    <TagInput
                      className="form-control"
                      inputProps={{ placeholder: 'Add Tags..' }}
                      onChange={data => { setTags(data) }}
                      values={tag}
                    />
                    </div>
                  </div>
                </div>
                <div class="form-group">
									<label for="comunity-name">Description</label>
                <textarea name="project_desc" className="border w-100 p-3 mt-3 mt-lg-4" placeholder="Description *" type="text" onChange={handleInput} value={initialValues.project_desc} />
                </div>
                <div className="btn-grounp">
                  <button type="submit" onClick={onSubmit} className="btn btn-primary mt-2">ADD PROJECT</button>
                </div>
                </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      <Footer />
    </>
  );
}
