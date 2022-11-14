import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import axios from 'axios';

import { useLocation } from 'react-router-dom';
import { ProjectCardAll } from '../displayProject/ProjectCardAll';
import { useNavigate } from "react-router-dom";

export const CategoryProjects = () => {

  let navigate = useNavigate();
  const handleClick = (Cat) => {
    const path = '/categorywiseProject'
    navigate(path, { state: { id: 1, category: Cat } })
  }
  const arr = ['mern', 'blockchain', 'ar/vr', 'machine learning', 'dotNet', 'cloud', 'python', 'react']
  const location = useLocation();
  const [filteredData, setFilteredData] = useState([]);
  const searchValue = location.state.category;
  console.log(searchValue);
  const filterFunction = async () => {
    const all_project = await axios.get(`/api/project/filterdata?search=${searchValue}`)
    // console.log(all_project.data)
    setFilteredData(all_project.data);
  }

  useEffect(() => { filterFunction() }, [searchValue])

  return (
    <>
      <Navbar />
      <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h3>Projects for "{searchValue}"</h3>
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
                <ul class="category-list" css={{cursor: "pointer"}}>
                  {
                    arr.map((item) => (
                      item !== searchValue &&
                      <li><a onClick={() => handleClick(item)}>{item}</a></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-md-8 border border-light">
            {
              filteredData.map((project, index) => (
                // <Link to={`/project/${project._id}`}>
                <ProjectCardAll
                  project_id={project._id}
                  status={project.status}
                  key={index}
                  project_title={project.project_title}
                  project_desc={project.project_desc}
                  students={project.student}
                  tags={project.tags}
                  img={project.image[0].url === "" ? 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' : project.image[0].url}
                />
                // </Link>
              ))
            }
          </div>
        </div>
      </div>
      <br>
      </br>
      <br></br>
      <Footer />
    </>
  );
}