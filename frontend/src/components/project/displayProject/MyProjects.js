import React, { useEffect, useState } from 'react'
import { ProjectCard } from './ProjectCard';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from '../../Navbar'
import Footer from '../../Footer'
export const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    const fetchProjects = async () => {
        const url = `/api/project/allstudentprojects`;
        const response = await axios.get(url);
        // console.log(response.data.userdata)
        setProjects(response.data.userdata)
    }
    const onDelete = async (id) => {
        console.log('ondelete', id)
        const isDelete = await axios.delete(`/api/project/deletestudentproject/${id}`);
        if (isDelete.status === 200) {
            alert('Project deleted successfully.')
            fetchProjects();
        }
    }
    useEffect(() => {  fetchProjects(); }, [])

    return (
        <>
        <Navbar/>
        <section class="dashboard section">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="sidebar">
          <div class="widget user-dashboard-profile">
            <div class="profile-thumb">
              <img src="images/user/user-thumb.jpg" alt="" class="rounded-circle"/>
            </div>
            <h5 class="text-center">Samanta Doe</h5>
            <p>Joined February 06, 2017</p>
            <a href="user-profile.html" class="btn btn-main-sm">Edit Profile</a>
          </div>
          <div class="widget user-dashboard-menu">
            <ul>
              <li class="active"><a href="dashboard-my-ads.html"><i class="fa fa-user"></i> My Ads</a></li>
              <li><a href="dashboard-favourite-ads.html"><i class="fa fa-bookmark-o"></i> Favourite Ads
                  <span>5</span></a></li>
              <li><a href="dashboard-archived-ads.html"><i class="fa fa-file-archive-o"></i>Archived Ads
                  <span>12</span></a></li>
              <li><a href="dashboard-pending-ads.html"><i class="fa fa-bolt"></i> Pending Approval<span>23</span></a>
              </li>
              <li><a href="index.html"><i class="fa fa-cog"></i> Logout</a></li>
              <li><a href="#!" data-toggle="modal" data-target="#deleteaccount"><i class="fa fa-power-off"></i>Delete Account</a></li>
            </ul>
          </div>

<div class="modal fade" id="deleteaccount" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header border-bottom-0">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-center">
        <img src="images/account/Account1.png" class="img-fluid mb-2" alt=""/>
        <h6 class="py-2">Are you sure you want to delete your account?</h6>
        <p>Do you really want to delete these records? This process cannot be undone.</p>
        <textarea class="form-control" name="message" id="" cols="40" rows="4" className="w-100 rounded"></textarea>
      </div>
      <div class="modal-footer border-top-0 mb-3 mx-5 justify-content-center">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
      <div class="col-lg-8">
        <div class="widget dashboard-container my-adslist">
          <h3 class="widget-header">My Projects</h3>
          <table class="table table-responsive product-dashboard-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Project Details</th>
                <th class="text-center">Tags</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
            {
                    projects ?
                        projects.map((project, index) => (
                            project.project_id != null ?
                                <ProjectCard
                                    key={index}
                                    project_id={project.project_id._id}
                                    project_title={project.project_id.project_title}
                                    project_desc={project.project_id.project_desc}
                                    // students={project.student_id}    //remaining to make api
                                    tags={project.project_id.tags}
                                    img={project.project_id.image[0].url === "" ? 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' : project.project_id.image[0].url}
                                    user={'student'}
                                    onDelete={onDelete}
                                /> : ''
                        )) : ""
                }
            </tbody>
          </table>

        </div>
        <div class="pagination justify-content-center">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="dashboard.html" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="dashboard.html">1</a></li>
              <li class="page-item active"><a class="page-link" href="dashboard.html">2</a></li>
              <li class="page-item"><a class="page-link" href="dashboard.html">3</a></li>
              <li class="page-item">
                <a class="page-link" href="dashboard.html" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</section>
        <Footer/>
        </>
    );
}