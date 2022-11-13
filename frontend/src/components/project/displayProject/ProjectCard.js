import React, { useState } from 'react'
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

export const ProjectCard = (props) => {
    console.log(props);

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
                                  <pre><h4 class="font-weight-bold"><strong>Title : </strong>{props.project_title}</h4></pre>
                                  <h6 class="mt-1"><strong>Status : </strong>{props.status}</h6>
                                  
                                  {/*   <Switch onChange={handleChange} checked={va} /> */}
                              </div>
                              <ul class="list-inline">
                                <h6 class="mt-1"><strong>Tags :</strong> 
                                { 
                                    props.tags && props.tags.map((tag, index) => (
                                        <Badge bg="secondary" className="mx-2" key={index}>{tag}</Badge>))
                                }
                                </h6>
                              </ul>
                              <h6 class="inline-block"><strong>Description :</strong><p class="pr-15">{props.project_desc}</p></h6>
                          </div>
                      </div>
                          {props.user === 'student' ?
                            <div class="col-lg-3 align-self-center">
                            <div class="product-ratings float-lg-right pb-3">
                                <ul class="list-inline">
                                    <li class="list-inline-item selected"><Link to={`/project/${props.project_id}`}><i className="fa fa-eye"></i></Link></li>
                                    <li class="list-inline-item selected"><Link to={`/updateproject/${props.project_id}`}><i className="fa fa-pencil"></i></Link></li>
                                    <li class="list-inline-item selected"> <button style={{border:"none",backgroundColor: "Transparent"}}  onClick={() => props.onDelete(props.project_id)}><i className="fa fa-trash"></i>
                                  </button> </li>
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

