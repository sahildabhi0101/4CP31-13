import React from 'react'

export const ProjectCard = ({props}) => {
  return (
    <>
      <div className="container-fluid">
    <div className="row">
        <div className="col-12 mt-3">
            <div className="card">
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img className="" src={props.image} alt="Card cap"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{props.project_title}</h4>
                        <p className="card-text">{props.project_desc}</p>
                        <h4 className="card-title">{props.tags}</h4>
                        <h4 className="card-title">{props.students}</h4>
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

