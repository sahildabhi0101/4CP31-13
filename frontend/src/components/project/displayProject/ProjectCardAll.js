import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

export const ProjectCardAll = (props) => {
    console.log(props);
    return (
        <>
        <div class="ad-listing-list mt-20">
        <div class="row p-lg-3 p-sm-5 p-4">
          <div class="col-lg-3 align-self-center">
                  <img src={props.img} alt="Project" style={{maxWidth:"100%",maxWidth:"100%",alignItems:"center"}} class="img-fluid img-thumbnail mx-auto d-block"/>
          </div>
          <div class="col-lg-8">
              <div class="row">
                  <div class="col-lg-10 col-md-10">
                      <div class="ad-listing-content">
                          <div class="mt-2">
                              <pre><h4 class="font-weight-bold"><strong>Title : </strong>{props.project_title}</h4></pre>
                              <h6 class="mt-1"><strong>Status : </strong>{props.status}</h6>
                          </div>
                          <ul class="list-inline">
                            <h6 class="mt-1"><strong>Tags :</strong> 
                            {
                                props.tags && props.tags.map((tag, index) => (
                                    <li class="list-inline-item"><Badge bg="secondary" className="mx-2" key={index}>{tag}</Badge></li>))
                            }
                            </h6>
                          </ul>
                          <h6 class="inline-block"><strong>Description :</strong><p class="pr-15" style={{lineHeight:"1.2em",height:"3.6em",overflowX:"hidden",overflowY:"hidden"}}>{props.project_desc}</p></h6>
                      </div>
                  </div>
                  <div class="col-lg-1 align-self-center">
                    <div class="product-ratings">
                        <ul class="list-inline ">
                            <li class="btn btn-primary list-inline-item selected"><Link to={`/project/${props.project_id}`}><button class="btn btn-primary">View</button></Link></li>
                        </ul>
                    </div>
                </div>
              </div>
          </div>
    </div>
</div>
        </>
    )
}

