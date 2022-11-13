import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const ProblemCard = (props) => {
    return (
        <>
            <tr>
                <td class="product-thumb">
                    <img width="80px" height="auto" src={props.img} alt="Project" /></td>
                <td class="product-details">
                    <h3 class="title"><strong>Title : </strong>{props.problem_title}</h3>
                    <span class="add-id">{props.problem_desc}</span>
                    <span><strong>Posted on: </strong><time>Jun 27, 2017</time> </span>
                    <span class="status active"><strong>Status</strong>{props.status}</span>

                </td>
                <td class="product-category"><span class="categories">
                    {
                        props.tags && props.tags.map((tag, index) => (
                            <Badge bg="secondary" className="mx-2" key={index}>{tag}</Badge>
                        ))
                    }
                </span></td>
                {props.user === 'agency' ?
                    <>
                        {/* <Row align={'center'} mt={6} px={3}>
                                                <Col><Link to={`/problem/${props.problem_id}`}><button>View</button> </Link></Col>
                                                <Col><Link to={`/updateproblem/${props.problem_id}`}><button>Edit</button> </Link></Col>
                                                <Col><button onClick={() => props.onDelete(props.project_id)}>Delete</button></Col>
                                            </Row> */}
                        <td class="action" data-title="Action">
                            <div class="">
                                <ul class="list-inline justify-content-center">
                                    
                                    <li class="list-inline-item selected"><Link to={`/problem/${props.problem_id}`}><i className="fa fa-eye"></i></Link></li>
                                    <li class="list-inline-item selected"><Link to={`/updateproblem/${props.problem_id}`}><i className="fa fa-pencil"></i></Link></li>
                                    <li class="list-inline-item selected"> <button style={{ border: "none", backgroundColor: "Transparent" }} onClick={() => props.onDelete(props.problem_id)}><i className="fa fa-trash"></i>
                                    </button> </li>
                                </ul>
                            </div>
                        </td>
                    </>
                    : ''
                }
                {/* <h4 className="card-title">{props.tags}</h4> */}
                {/* <h4 className="card-title">{props.students}</h4> */}
            </tr>
        </>
    )
  return (
    <>
        <div class="ad-listing-list mt-20">
            <div class="row p-lg-3 p-sm-5 p-4">
              <div class="col-lg-3 align-self-center">
                      <img width="80px" height="auto" src={props.img} alt="Project"/>
              </div>
              <div class="col-lg-9">
                  <div class="row">
                      <div class="col-lg-9 col-md-10">
                          <div class="ad-listing-content">
                              <div class="mt-2">
                                  <pre><h4 class="font-weight-bold"><strong>Title : </strong>{props.problem_title}</h4></pre>
                              </div>
                              <ul class="list-inline">
                                <h6 class="mt-1"><strong>Tags :</strong> 
                                {
                                    props.tags && props.tags.map((tag, index) => (
                                        <Badge bg="secondary" className="mx-2" key={index}>{tag}</Badge>
                                    ))
                                }
                                </h6>
                              </ul>
                              <h6 class="inline-block"><strong>Description :</strong><p class="pr-15">{props.problem_desc}</p></h6>
                          </div>
                      </div>
                          {props.user === 'agency' ?
                            <div class=" action col-lg-3 align-self-center">
                            <div class="product-ratings float-lg-right pb-3">
                            <ul class="list-inline justify-content-center">
                                                <li class="list-inline-item ml-1">
                                                    <a data-toggle="tooltip" data-placement="top" title="view" class="view" href="category.html">
                                                    <Link to={`/problem/${props.problem_id}`}><i class="fa fa-eye"></i></Link>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item ml-1">
                                                    <a class="edit" data-toggle="tooltip" data-placement="top" title="Edit" href="dashboard.html">
                                                    <Link to={`/updateproblem/${props.problem_id}`}><i class="fa fa-pencil"></i></Link>
                                                    </a>
                                                </li>
                                                <li class="list-inline-item ml-1">
                                                    <a className="delete" data-toggle="tooltip" data-placement="top" title="Delete" href="/#">
                                                    <button style={{border:"none",backgroundColor: "Transparent"}}  onClick={() => props.onDelete(props.problem_id)}><i class="fa fa-trash"></i>
                                                    </button> 
                                                    </a>
                                                </li>
                                                </ul>
                            </div>
                        </div>
                          : ''
                          }
                          </div>
              </div>        
            </div>
          </div>     
    </>
  )
}

export default ProblemCard;
