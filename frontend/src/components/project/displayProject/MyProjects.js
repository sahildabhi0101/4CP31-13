import React, { useEffect, useState } from 'react'
import { ProjectCard } from './ProjectCard';
import axios from 'axios';
import Switch from "react-switch";
import Navbar from '../../Navbar'
import Footer from '../../Footer'

export const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const fetchProjects = async () => {
    const url = `/api/project/allstudentprojects`;
    const response = await axios.get(url);
    console.log(response.data.userdata)
    setProjects(response.data.userdata)
  }
  const onDelete = async (id) => {
    console.log('ondelete', id)
    const isDelete = await axios.delete(`/api/project/deletestudentproject/${id}`);
    if (isDelete.status === 200) {
      alert('Project deleted successfully.')
      fetchProjects();
    }
  }
  useEffect(() => { fetchProjects(); }, [])

  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const filterFunction = async () => {
    // console.log(searchValue);
    const all_project = await axios.get(`/api/project/filterprojectsingleuser?search=${searchValue}`)
    // console.log(all_project.data.userdata)
    setFilteredData(all_project.data.userdata);
  }
  useEffect(() => { filterFunction() }, [searchValue])

  return (
    <>
      <Navbar />
      <section className="page-title">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <h3>My Projects</h3>
          </div>
        </div>
      </div>
    </section>
    <div class="container mt-3">
          <div class="row">
            <div class="col-lg-3 col-md-4 ">
              <div class="category-sidebar ">
                <div class="widget category-list border border-dark">
                  <h4 class="widget-header">All Category</h4>
                    <ul class="category-list">
                      <li><a href="category.html">Laptops <span>93</span></a></li>
                      <li><a href="category.html">Iphone <span>233</span></a></li>
                      <li><a href="category.html">Microsoft  <span>183</span></a></li>
                      <li><a href="category.html">Monitors <span>343</span></a></li>
                    </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-md-8 border border-light">
            <div class="category-search-filter">
					<div class="row">
						<div class="col-md-6 text-center text-md-left">
							<strong>Search By Tags: </strong>
              <input type="text" style={{ border: "2px solid black" }} onChange={(e) => { setsearchValue(e.target.value) }} placeholder="Tags" />
						</div>
					</div>
				</div>
                    {
                      searchValue !== ""
                        ?
                        filteredData.map((project, index) => (
                          project.project_id != null ?
                            <ProjectCard
                              key={index}
                              status={project.project_id.status}
                              project_id={project.project_id._id}
                              project_title={project.project_id.project_title}
                              project_desc={project.project_id.project_desc}
                              // students={project.student}
                              tags={project.project_id.tags}
                              img={project.project_id.image[0].url === "" ? 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' : project.project_id.image[0].url}
                              user={'student'}
                              onDelete={onDelete}
                              
                            /> : ''
                        ))
                        :

                        projects ?
                          projects.map((project, index) => (
                            project.project_id != null ?
                              <ProjectCard
                                key={index}
                                status={project.project_id.status}
                                project_id={project.project_id._id}
                                project_title={project.project_id.project_title}
                                project_desc={project.project_id.project_desc}
                                // students={project.student_id}    //remaining to make api
                                tags={project.project_id.tags}
                                img={project.project_id.image[0].url === "" ? 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' : project.project_id.image[0].url}
                                user={'student'}
                                onDelete={onDelete}
                              /> : ''
                          )) : ""
                    }


              </div>
              {/* <div class="pagination justify-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="dashboard.html" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="dashboard.html">1</a></li>
              <li class="page-item active"><a class="page-link" href="dashboard.html">2</a></li>
              <li class="page-item"><a class="page-link" href="dashboard.html">3</a></li>
              <li class="page-item">
                <a class="page-link" href="dashboard.html" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div> */}
          </div>
        </div>
      <Footer />
    </>
  );
}