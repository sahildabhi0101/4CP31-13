import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

export const ProjectCard = (props) => {
    // console.log(props);
    return (
        <>
            <tr>
                <td className="product-thumb">
                  <img width="80px" height="auto" src={props.img} alt="Project"/></td>
                <td className="product-details">
                  <h3 className="title"><strong>Title : </strong>{props.project_title}</h3>
                  <span className="add-id">{props.project_desc}</span>
                  <span><strong>Posted on: </strong><time>Jun 27, 2017</time> </span>
                  <span className="status active"><strong>Status</strong>Active</span>

                </td>
                <td className="product-category"><span className="categories">
                { 
                    props.tags && props.tags.map((tag, index) => (
                        <Badge bg="secondary" className="mx-2" key={index}>{tag}</Badge>))
                }
                </span></td>
                {props.user === 'student' ?
                <td className="action" data-title="Action">
                  <div className="">
                    <ul className="list-inline justify-content-center">
                      <li className="list-inline-item ml-1">
                        <a data-toggle="tooltip" data-placement="top" title="view" className="view" href="category.html">
                        <Link to={`/project/${props.project_id}`}><i className="fa fa-eye"></i></Link>
                        </a>
                      </li>
                      <li className="list-inline-item ml-1">
                        <a className="edit" data-toggle="tooltip" data-placement="top" title="Edit" href="dashboard.html">
                        <Link to={`/updateproject/${props.project_id}`}><i className="fa fa-pencil"></i></Link>
                        </a>
                      </li>
                      <li className="list-inline-item ml-1">
                        <a classNameName="delete" data-toggle="tooltip" data-placement="top" title="Delete" href="/#">
                        <button style={{border:"none",backgroundColor: "Transparent"}}  onClick={() => props.onDelete(props.project_id)}><i className="fa fa-trash"></i>
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

