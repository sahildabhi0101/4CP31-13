import React, { useState, useEffect } from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import ProblemCard from './ProblemCard';
import { useQuery } from 'react-query'
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { ProblemCardAll } from './ProblemCardAll';

var tpage = 1;
const fetchProblems = async (pageNumber, limit = 4) => {
  const get_stories = await axios.get(`/api/problem/problembypage?page=${pageNumber}&&limit=${limit}`)
  tpage = get_stories.data.totalPage;
  console.log("data ", get_stories)
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
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const filterFunction = async () => {
    const all_problem = await axios.get(`api/problem/filterdata?search=${searchValue}`)
    console.log(all_problem.data);
    setFilteredData(all_problem.data);
  }

  useEffect(() => { filterFunction() }, [searchValue])
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }


  return (
    <>
      <Navbar />
      <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h3>All Problems</h3>
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
            <input type="text" style={{ border: "2px solid black" }} onChange={(e) => { setSearchValue(e.target.value) }} placeholder="Search via TAGS" />
            </div>
            </div>
            </div>
            {
              searchValue !== ""
                ?
                filteredData.map((problem, index) => (
                  // <Link to={`/project/${project._id}`}>
                  <ProblemCardAll
                    key={index}
                    status={problem.status}
                    problem_id={problem._id}
                    problem_title={problem.problem_title}
                    problem_desc={problem.problem_desc}
                    students={problem.student}
                    tags={problem.tags}
                    img={problem.image[0].url === "" ? 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' : problem.image[0].url}
                  />
                  // </Link>
                ))
                :
                data.length > 0 ?
                  data.map((problem, index) => (
                    // <Link to={`/project/${project._id}`}>
                    <ProblemCardAll
                      key={index}
                      status={problem.status}
                      problem_id={problem._id}
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
      <Footer />
    </>
  )
}

export default DisplayAllProblems
