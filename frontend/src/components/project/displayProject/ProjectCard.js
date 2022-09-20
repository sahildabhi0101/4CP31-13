import React from 'react'
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export const ProjectCard = (props) => {
    // console.log(props);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-horizontal">
                                <div className="img-square-wrapper">
                                    <img className="" src={props.img} alt="Card cap" />
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">{props.project_title}</h4>
                                    <p className="card-text">{props.project_desc}</p>
                                    {
                                        props.tags && props.tags.map((tag, index) => (
                                            <Badge bg="secondary" className="mx-2" key={index}>{tag}</Badge>
                                        ))
                                    }
                                    {props.user === 'student' ?
                                        <>
                                            <Row align={'center'} mt={6} px={3}>
                                                <Col><Link to={`/project/${props.project_id}`}><button>View</button> </Link></Col>
                                                <Col><Link to={`/updateproject/${props.project_id}`}><button>Edit</button> </Link></Col>
                                                <Col><button onClick={() => props.onDelete(props.project_id)}>Delete</button></Col>
                                            </Row>
                                        </>
                                        : ''
                                    }
                                    {/* <h4 className="card-title">{props.tags}</h4> */}
                                    {/* <h4 className="card-title">{props.students}</h4> */}
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

