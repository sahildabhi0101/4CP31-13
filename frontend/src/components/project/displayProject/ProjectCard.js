import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

export const ProjectCard = (props) => {
    // console.log(props);
    return (
        <>
            <tr>
                <td class="product-thumb">
                  <img width="80px" height="auto" src={props.img} alt="Project"/></td>
                <td class="product-details">
                  <h3 class="title"><strong>Title : </strong>{props.project_title}</h3>
                  <span class="add-id">{props.project_desc}</span>
                  <span><strong>Posted on: </strong><time>Jun 27, 2017</time> </span>
                  <span class="status active"><strong>Status</strong>Active</span>

                </td>
                <td class="product-category"><span class="categories">
                {
                    props.tags && props.tags.map((tag, index) => (
                        <Badge bg="secondary" className="mx-2" key={index}>{tag}</Badge>))
                }
                </span></td>
                {props.user === 'student' ?
                <td class="action" data-title="Action">
                  <div class="">
                    <ul class="list-inline justify-content-center">
                      <li class="list-inline-item ml-1">
                        <a data-toggle="tooltip" data-placement="top" title="view" class="view" href="category.html">
                        <Link to={`/project/${props.project_id}`}><i class="fa fa-eye"></i></Link>
                        </a>
                      </li>
                      <li class="list-inline-item ml-1">
                        <a class="edit" data-toggle="tooltip" data-placement="top" title="Edit" href="dashboard.html">
                        <Link to={`/updateproject/${props.project_id}`}><i class="fa fa-pencil"></i></Link>
                        </a>
                      </li>
                      <li class="list-inline-item ml-1">
                        <a className="delete" data-toggle="tooltip" data-placement="top" title="Delete" href="/#">
                        <button style={{border:"none",backgroundColor: "Transparent"}}  onClick={() => props.onDelete(props.project_id)}><i class="fa fa-trash"></i>
                        </button> 
                        </a>
                      </li>
                    </ul>
                  </div>
                </td>
                : ''
                }        
              </tr>
        </>
    )
}

