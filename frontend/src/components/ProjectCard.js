import React from 'react'

const ProjectCard = ({img}) => {
  return (
    <>
      <div className="container-fluid">
    <div className="row">
        <div className="col-12 mt-3">
            <div className="card">
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img className="" src={img} alt="Card cap"/>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">Card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

export default ProjectCard
