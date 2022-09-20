import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCookie } from 'react-use-cookie'
import { GetProjectAPI } from "../../../API/ProjectAPI";
import "./singlePost.css";
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'

export default function SingleProject() {
    const { project_id } = useParams();
    const [data, setData] = useState("");
    const [category,setCategory] = useState('product_details');
	useEffect(()=>{},[category])

    async function fetchMyAPI() {
      const res = await GetProjectAPI({ project_id });
      setData(res);
      console.log("project_id", project_id);
      console.log(res);
    }
  
    useEffect(() => {
      fetchMyAPI();
    }, []);
  
    return (
    <>
     <Navbar/>
      {/* <div className="singlePost">
        <div className="singlePostWrapper">
          {data && data.project.image.length > 0 ? (
            <img className="singlePostImg"  style={{ width: '100%', height: 300 }} src={data.project.image[0].url} alt="single project img" />
          ) :
            <img
              className="singlePostImg"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />}
          <h1 className="singlePostTitle">
            {data ? data.project.project_title : ""}
          </h1>
          <div className="singlePostInfo">
            <span>
              Author:
              <b className="singlePostAuthor">
                <Link className="link" to="/posts?username=Safak">
                  Safak
                </Link>
              </b>
            </span>
            <span>1 day ago</span>
          </div>
          <p className="singlePostDesc">
            {data ? data.project.project_desc : ""}
          </p>
          {getCookie("user") === "investor" ?
            <>
              email id of student is :: <p className="singlePostDesc">
                {data ? data.students[0].student_id.email : ""}
              </p>
              mobile no of student is :: <p className="singlePostDesc">
                {data ? data.students[0].student_id.mobile_no : ""}
              </p>
            </>
            : ""
          }
        </div>
  
  
      </div> */}
      {data && data.project.image.length > 0 ? (
            <img className="singlePostImg"  style={{ width: '100%', height: 300 }} src={data.project.image[0].url} alt="single project img" />
          ) :
            <img
              className="singlePostImg"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />}

      <div className="container">
		<div className="row">
			{/* <!-- Left sidebar --> */}
			<div className="col-lg-12">
				<div className="product-details">
					<h1 className="product-title"> {data ? data.project.project_title : ""}</h1>
					<div className="product-meta">
						<ul className="list-inline">
							<li className="list-inline-item"><i className="fa fa-user-o"></i> By <a href="user-profile.html">Andrew</a></li>
							<li className="list-inline-item"><i className="fa fa-folder-open-o"></i> Category<a href="category.html">Electronics</a></li>
							<li className="list-inline-item"><i className="fa fa-location-arrow"></i> Location<a href="category.html">Dhaka Bangladesh</a></li>
						</ul>
					</div>

					

					<div className="content mt-5 pt-5">
						<ul className="nav nav-pills  justify-content-center" id="pills-tab" role="tablist">
							<li className="nav-item" onClick={()=>setCategory('product_details')}>
								<a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home"
								 aria-selected="true">Product Details</a>
							</li>
							<li className="nav-item" onClick={()=>setCategory('specifications')}>
								<a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile"
								 aria-selected="false">Specifications</a>
							</li>
							<li className="nav-item" onClick={()=>setCategory('reviews')}>
								<a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact"
								 aria-selected="false">Reviews</a>
							</li>
						</ul>
						<div className="tab-content" id="pills-tabContent">
							{
								category==='product_details' && 
								(<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
								<h3 className="tab-title">Product Description</h3>
								<p>{data ? data.project.project_desc : ""}?</p>
								</div>)
							}
							{
								category==='specifications' && 
								(<div className="tab-pane fade active show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
								<h3 className="tab-title">Product Specifications</h3>
								<table className="table table-bordered product-table">
									<tbody>
										<tr>
											<td>Seller Price</td>
											<td>$450</td>
										</tr>
										<tr>
											<td>Added</td>
											<td>26th December</td>
										</tr>
										<tr>
											<td>State</td>
											<td>Dhaka</td>
										</tr>
										<tr>
											<td>Brand</td>
											<td>Apple</td>
										</tr>
										<tr>
											<td>Condition</td>
											<td>Used</td>
										</tr>
										<tr>
											<td>Model</td>
											<td>2017</td>
										</tr>
										<tr>
											<td>State</td>
											<td>Dhaka</td>
										</tr>
										<tr>
											<td>Battery Life</td>
											<td>23</td>
										</tr>
									</tbody>
								</table>
							</div>)
							}
							{
								category==='reviews' && (<div className="tab-pane fade active show" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
								<h3 className="tab-title">Product Review</h3>
								<div className="product-review">
									<div className="media">
										{/* <!-- Avater --> */}
										{/* <img src={require("../images/user/user-thumb.jpg")} alt="avater"/> */}
										<div className="media-body">
											{/* <!-- Ratings --> */}
											<div className="ratings">
												<ul className="list-inline">
													<li className="list-inline-item">
														<i className="fa fa-star"></i>
													</li>
													<li className="list-inline-item">
														<i className="fa fa-star"></i>
													</li>
													<li className="list-inline-item">
														<i className="fa fa-star"></i>
													</li>
													<li className="list-inline-item">
														<i className="fa fa-star"></i>
													</li>
													<li className="list-inline-item">
														<i className="fa fa-star"></i>
													</li>
												</ul>
											</div>
											<div className="name">
												<h5>Jessica Brown</h5>
											</div>
											<div className="date">
												<p>Mar 20, 2018</p>
											</div>
											<div className="review-comment">
												<p>
													Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqe laudant tota rem ape
													riamipsa eaque.
												</p>
											</div>
										</div>
									</div>
									<div className="review-submission">
										<h3 className="tab-title">Submit your review</h3>
										{/* <!-- Rate --> */}
										<div className="rate">
											<div className="starrr"></div>
										</div>
										<div className="review-submit">
											<form action="#" method="POST" className="row">
												<div className="col-lg-6 mb-3">
													<input type="text" name="name" id="name" className="form-control" placeholder="Name" required/>
												</div>
												<div className="col-lg-6 mb-3">
													<input type="email" name="email" id="email" className="form-control" placeholder="Email" required/>
												</div>
												<div className="col-12 mb-3">
													<textarea name="review" id="review" rows="6" className="form-control" placeholder="Message" required></textarea>
												</div>
												<div className="col-12">
													<button type="submit" className="btn btn-main">Sumbit</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>)
							}
							
							
							
						</div>
					</div>
				</div>
			</div>
			

		</div>
	</div>

      <Footer/>
      </>
    );
}
