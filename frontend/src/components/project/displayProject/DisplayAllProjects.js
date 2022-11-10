import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProjectCard } from './ProjectCard';
import { useQuery } from 'react-query'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

var tpage = 1;
const fetchProjects = async (pageNumber, limit = 4) => {
  const get_stories = await axios.get(`/api/project/projectbypage?page=${pageNumber}&&limit=${limit}`)
  // console.log(get_stories.data.projectWithStudent)
  tpage = get_stories.data.totalPage
  return get_stories.data.projectWithStudent;
}

export const DisplayAllProjects = () => {

  const [pageNumber, setPageNumber] = useState(1)
  const { isLoading, isError, error, data, isFetching } = useQuery(
    ['colors', pageNumber],
    () => fetchProjects(pageNumber),
    {
      keepPreviousData: true
    }
  )

  const [filteredData,setFilteredData] = useState([]);
  const [searchValue,setsearchValue] = useState("");
  const filterFunction = async () => {
    const all_project = await axios.get(`/api/project/filterdata?search=${searchValue}`)
    console.log(all_project.data) 
    setFilteredData(all_project.data);
  }

  useEffect(() => {filterFunction() } ,[searchValue])
  
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }
  return (
    <>
    <Navbar/>
      <Container 
      my={5} p={3} px={5} 
      >
        <center>
          <h1 size={'xl'}>
            All Projects
          </h1>
        </center>
        
        {
          data.length > 0 ?
            data.map((project, index) => (
              // <Link to={`/project/${project._id}`}>
                <ProjectCard
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
       
      </Container>
      <div>
        <Row>
          <Col><button  variant='outline'
            onClick={() => setPageNumber(page => page - 1)}
            disabled={pageNumber === 1}>
            Prev Page
          </button></Col>
          <Col><button variant='outline'
            onClick={() => setPageNumber(page => page + 1)}
            disabled={pageNumber === tpage}>
            Next Page
          </button></Col>
        </Row>
      </div>
      <Footer/>
    </>
  );
}