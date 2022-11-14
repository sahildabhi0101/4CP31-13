import React,{useState, useEffect} from "react";
import ProblemCard from './ProblemCard';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { ProjectCard } from "../../project/displayProject/ProjectCard";
const MyProblems = () => {
    const [problems,setProblems] = useState([]);
    const fetchProblems = async () => {
        const url = `/api/problem/getallproblems`;
        const response = await axios.get(url);
        setProblems(response.data.userdata)
    }
    const onDelete = async (id) => {
        console.log('ondelete', id)
        const isDelete = await axios.delete(`/api/problem/deleteagencyproblem/${id}`);
        if (isDelete.status === 200) {
            alert('problem deleted successfully.')
            fetchProblems();
        }
    }
    useEffect(()=>{fetchProblems();}, [])

    const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const filterFunction = async () => {
    // console.log(searchValue);
    const all_problem = await axios.get(`/api/problem/filterproblemsingleuser?search=${searchValue}`)
    // console.log(all_project.data.userdata)
    setFilteredData(all_problem.data.userdata);
  }
  useEffect(() => { filterFunction() }, [searchValue])

  return (
    <>
      <Navbar />
      <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h3>My Problems</h3>
            </div>
          </div>
        </div>
      </section>
        <div class="container mt-3">
          <div class="row">
          
            <div class="col-lg-12 col-md-8 border border-light">
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
                  filteredData.map((problem, index) => (
                    problem.problem_id != null ?
                    <ProblemCard
                      key={index}
                      status={problem.problem_id.status}
                      problem_id={problem.problem_id._id}
                      problem_title={problem.problem_id.problem_title}
                      problem_desc={problem.problem_id.problem_desc}
                      tags={problem.problem_id.tags}
                      img={problem.problem_id.image[0].url === "" ?'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' : problem.problem_id.image[0].url}
                      user={'agency'}
                      onDelete={onDelete}
                    /> : ''
                  ))
                  :
                    problems ?
                        problems.map((problem, index) => (
                            problem.problem_id != null ?
                                <ProblemCard
                                    key={index}
                                    status={problem.problem_id.status}
                                    problem_id={problem.problem_id._id}
                                    problem_title={problem.problem_id.problem_title}
                                    problem_desc={problem.problem_id.problem_desc}
                                    tags={problem.problem_id.tags}
                                    img={problem.problem_id.image[0].url === "" ? 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' : problem.problem_id.image[0].url}
                                    user={'agency'}
                                    onDelete={onDelete}
                                /> : ''

                        )) : ""
                }

              </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default MyProblems
