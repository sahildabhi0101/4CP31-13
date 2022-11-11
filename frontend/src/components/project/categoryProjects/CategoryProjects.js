import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import { ProjectCardAll } from '../displayProject/ProjectCardAll';
import Loading from '../../Loading/loading'

var tpage = 1;
const fetchProjects = async (pageNumber, limit = 4) => {
  const get_stories = await axios.get(`/api/project/projectbypage?page=${pageNumber}&&limit=${limit}`)
  // console.log(get_stories.data.projectWithStudent)
  tpage = get_stories.data.totalPage
  return get_stories.data.projectWithStudent;
}

export const CategoryProjects = () => {

    const location = useLocation();
  const [pageNumber, setPageNumber] = useState(1)
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ['colors', pageNumber],
    () => fetchProjects(pageNumber),
    {
      keepPreviousData: true
    }
  )
  
  const [filteredData,setFilteredData] = useState([]);
//   const [searchValue,setsearchValue] = useState("");
//   setsearchValue(location.state.category);
const searchValue = location.state.category;
  const filterFunction = async () => {
    const all_project = await axios.get(`/api/project/filterdata?search=${searchValue}`)
    console.log(all_project.data) 
    setFilteredData(all_project.data);
  }

  useEffect(() => {filterFunction() } ,[searchValue])
  
  if (isLoading) {
    return <Loading/>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
    <Navbar/>
    <section className="page-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 text-center">
                                <h3>Projects related to : {searchValue}</h3>
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
        
        {/* <input type="text" style={{border:"2px solid black"}} onChange={(e) =>{ setsearchValue(e.target.value)}}  placeholder="Search via TAGS" /> */}
        {searchValue !== ""
        ? 
          filteredData.map((project, index) => (
            // <Link to={`/project/${project._id}`}>
              <ProjectCardAll
                key={index}
                project_title={project.project_title}
                project_desc={project.project_desc}
                students={project.student}
                tags={project.tags}
                img={project.image[0].url === "" ? 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' : project.image[0].url  }
              />
            // </Link>
          )) 
         :


          data.length > 0 ?
            data.map((project, index) => (
              // <Link to={`/project/${project._id}`}>
                <ProjectCardAll
                  key={index}
                  project_title={project.project_title}
                  project_desc={project.project_desc}
                  students={project.student}
                  tags={project.tags}
                  img={project.image[0].url === "" ? 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' : project.image[0].url}
                />
              // {/* </Link> */}
            
            ))
             : "hey sahil"
        }
       
      <div class="pagination justify-content-center py-4">
					<nav aria-label="Page navigation example">
						<ul class="pagination">
							<li class="page-item">
                <button  class="btn btn-primary" onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1}>Previous</button>
							</li>
							<li class="page-item">
                <button class="btn btn-primary" onClick={() => setPageNumber(page => page + 1)}disabled={pageNumber === tpage}>Next</button>
							</li>
						</ul>
					</nav>
      </div>
      </div>
          </div>
        </div>
      <Footer/>
    </>
  );
}