import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer';
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { TagInput } from 'evergreen-ui'
import { AddProjectAPI, AddStudentProjectAPI } from "../../../API/ProjectAPI";
import axios from 'axios';

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
      // To redirect writtern blog
      // navigate(`/project/${project_id}`);
    }
  };

  return (
    <>
    <Navbar/>

    <section class="advt-post bg-gray py-5">
    <div class="container">
      <form action="#" method="POST">
        <fieldset class="border border-gary px-3 px-md-4 py-4 mb-5">
          <div class="row">
            <div class="col-lg-12">
              <h3>Post Your ad</h3>
            </div>
            <div class="col-lg-6">
              <h6 class="font-weight-bold pt-4 pb-1">Title : </h6>
              <input type="text" class="form-control bg-white" placeholder="Add title" name="project_title" onChange={handleInput} value={initialValues.project_title}  required/>
              <h6 class="font-weight-bold pt-4 pb-1">Description : </h6>
              <textarea name="project_desc" class="form-control bg-white" rows="7"
                placeholder="Write details about your project" onChange={handleInput} value={initialValues.project_desc} required></textarea>
            </div>
            <div class="col-lg-6">
              <h6 class="font-weight-bold pt-4 pb-1">Technology : </h6>
              <TagInput
                type="text"
                className="form-control bg-white"
                inputProps={{ placeholder: 'Add Tags..' }}
                onChange={data => { setTags(data) }}
                values={tag}
                required
                />
              <h6 class="font-weight-bold pt-4 pb-1">Images : </h6>
              <div class="choose-file text-center my-2 py-4 rounded bg-white">
                <label htmlFor="file-upload">
                <div class="form-group choose-file d-inline-flex">
									<i class="fa fa-picture-o text-center px-3 mt-3"></i>
									<input type="file" class="form-control-file mt-1 mb-2 pt-1" id="input-file" onChange={(e) => { setPhoto(e.target.files[0]) }}/>
								 </div>
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div class="checkbox d-inline-flex">
          <input type="checkbox" id="terms-&-condition" class="mt-0"/>
          <label for="terms-&-condition" class="ml-2 mt-1">By click you must agree with our
            <span> <a class="text-success" href="terms-condition.html">Terms & Condition and Posting
                Rules.</a></span>
          </label>
        </div>
        <button type="submit" onClick={onSubmit} class="btn btn-primary d-block mt-2">Post Your Project</button>
      </form>
    </div>
  </section>





        {/* <section class="page-title">
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
                            <div className="col-md-12">
                                    <form action="#">
                                        <fieldset className="p-4">
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <input type="text" placeholder="Title *" className="form-control" required 
                                                                        name="project_title"
                                                                        autoFocus={true}
                                                                        onChange={handleInput}
                                                                        value={initialValues.project_title}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group choose-file d-inline-flex ">
                                              <i className="fa fa-archive mt-1"></i>
                                              <input type="file" class="form-control-file mt-0 ml-3" id="input-file" onChange={(e) => { setPhoto(e.target.files[0]) }}/>
                                            </div>
                                            <div className="row">
                                                  <div className="col-lg-12 py-1">
                                                    <TagInput
                                                      className="form-control"
                                                      inputProps={{ placeholder: 'Add Tags..' }}
                                                      onChange={data => { setTags(data) }}
                                                      values={tag}
                                                    />
                                                  </div>
                                            </div>
                                            <textarea name="project_desc" className="border w-100 p-3 mt-3 mt-lg-4" placeholder="Description *" type="text" onChange={handleInput} value={initialValues.project_desc} />
                                            <div className="btn-grounp">
                                                <button type="submit" onClick={onSubmit} className="btn btn-primary mt-2 float-right">ADD PROJECT</button>
                                            </div>
                                        </fieldset>
                                    </form>
                            </div>
                        </div>
                    </div> */}
    <Footer/>
    </>
  );
}
