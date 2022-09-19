import React, { useState, useEffect } from 'react'
import { ProjectCard } from './ProjectCard';
import { useQuery } from 'react-query'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

var tpage = 1;
const fetchProjects = async (pageNumber, limit = 3) => {
  const get_stories = await axios.get(`/api/project/projectbypage?page=${pageNumber}&&limit=${limit}`)
  // console.log(get_stories.data.projectWithStudent)
  tpage = get_stories.data.totalPage
  return get_stories.data.projectWithStudent;
}

export const DisplayAllProjects = () => {

  const [pageNumber, setPageNumber] = useState(1)
  const [data, setData] = useState([])
  
  const fetchProjects = async (pageNumber, limit = 3) => {
    const get_stories = await axios.get(`/api/project/projectbypage?page=${pageNumber}&&limit=${limit}`)
    // console.log(get_stories.data.projectWithStudent)
    tpage = get_stories.data.totalPage
    setData(get_stories.data.projectWithStudent);
  }
  useEffect(() => {fetchProjects(pageNumber)},[data])
  // const data = fetchProjects(pageNumber)
  console.log(data)
  // if (isLoading) {
  //   return <h2>Loading...</h2>
  // }

  // if (isError) {
  //   return <h2>{error.message}</h2>
  // }
  return (
    <>
      <Container 
      // maxW={'1200px'} 
      my={5} p={3} px={5} 
      // borderRadius={'md'}
      >
        <center>
          <h1 size={'xl'}>
            Projects
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
                  image={project.image[0].url === "" ? require('https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ') : project.image[0].url}
                />
              // </Link>
            
            ))
             : "hey sahil"
        }
       
        {/* <ProjectCard /> */}
      </Container>
      {/* <div>
        <Row>
          <Col><button colorScheme='teal' variant='outline'
            onClick={() => setPageNumber(page => page - 1)}
            disabled={pageNumber === 1}>
            Prev Page
          </button></Col>
          <Col><button colorScheme='teal' variant='outline'
            onClick={() => setPageNumber(page => page + 1)}
            disabled={pageNumber === tpage}>
            Next Page
          </button></Col>
        </Row>
      </div> */}
    </>
  );
}