import React,{useState,useEffect} from 'react'
import ProblemCard from './ProblemCard';
import {useQuery} from 'react-query'
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


var tpage = 1;
const fetchProblems = async (pageNumber, limit = 3) => {
    const get_stories = await axios.get(`/api/problem/problembypage?page=${pageNumber}&&limit=${limit}`)
    tpage = get_stories.data.totalPage;
    console.log("data ",get_stories)
    return get_stories.data.problemWithAgencies;
}
const DisplayAllProblems = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const { isLoading, isError, error, data, isFetching } = useQuery(
      ['colors', pageNumber],
      () => fetchProblems(pageNumber),
      {
        keepPreviousData: true
      }
    )
    console.log(data);
    if (isLoading) {
      return <h2>Loading...</h2>
    }
    if (isError) {
      return <h2>{error.message}</h2>
    }
  return (
    <>
      <Container 
      my={5} p={3} px={5} 
      >
        <center>
          <h1 size={'xl'}>
            All problems
          </h1>
        </center>
        
        {
          data.length > 0 ?
            data.map((problem, index) => (
              // <Link to={`/project/${project._id}`}>
                <ProblemCard
                  key={index}
                  problem_title={problem.problem_title}
                  problem_desc={problem.problem_desc}
                  students={problem.student}
                  tags={problem.tags}
                  // img= {'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'}
                  img={problem.image[0].url === "" ? 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' : problem.image[0].url}
                />
              // </Link>
            
            ))
             : "hey jay"
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
    </>
  )
}

export default DisplayAllProblems
