import React,{useState, useEffect} from "react";
import ProblemCard from './ProblemCard';
import axios from 'axios';
import Container from 'react-bootstrap/Container';

const MyProblems = () => {
    const [problems,setProblems] = useState([]);
    const fetchProblems = async () => {
        const url = `/api/problem/getallproblems`;
        const response = await axios.get(url);
        setProblems(response.data.userdata)
    }
    const onDelete = async (id) => {
        console.log('ondelete', id)
        const isDelete = await axios.delete(`/api/problem/deletestudentproblem/${id}`);
        if (isDelete.status === 200) {
            alert('problem deleted successfully.')
            fetchProblems();
        }
    }
    useEffect(()=>{fetchProblems();}, [])
  return (
    <>
      <Container my={5} p={3} px={5} >
                <center>
                    <h3 size={'xl'}>
                        My problems
                    </h3>
                </center>
                {/* <input type="text" style={{ border: "2px solid black" }} onChange={(e) => { setsearchValue(e.target.value) }} placeholder="Search via TAGS" /> */}




                {
                    problems ?
                        problems.map((problem, index) => (
                            problem.problem_id != null ?
                                <ProblemCard
                                    key={index}
                                    problem_id={problem.problem_id._id}
                                    problem_title={problem.problem_id.problem_title}
                                    problem_desc={problem.problem_id.problem_desc}
                                    // students={project.student_id}    //remaining to make api
                                    tags={problem.problem_id.tags}
                                    img={problem.problem_id.image[0].url === "" ? 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' : problem.problem_id.image[0].url}
                                    user={'agency'}
                                    onDelete={onDelete}
                                /> : ''

                        )) : ""
                }
                {/* <ProblemCard /> */}
            </Container>
    </>
  )
}

export default MyProblems
