import React, { useEffect, useState } from "react";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { Link, useParams } from "react-router-dom";
import { getCookie } from 'react-use-cookie'
import { GetProblemAPI } from "../../../API/ProblemAPI";

export default function SingleProblem() {
    const { problem_id } = useParams();
    const [data, setData] = useState("");
    const [category,setCategory] = useState('product_details');
	useEffect(()=>{},[category])

    async function fetchMyAPI() {
      const res = await GetProblemAPI({ problem_id });
      setData(res);
      console.log("problem_id", problem_id);
      console.log(res);
    }
  
    useEffect(() => {
      fetchMyAPI();
    }, []);
  
    return (
    <>
     <Navbar/>
	 <section className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h3>Problems Details</h3>
            </div>
          </div>
        </div>
      </section>
	 	<section className="section bg-gray">
			<div className="container">
				<div className="row">

					<article class="single-post">
					<div className="col-lg-12">
						<div className="product-details">
						<div class="widget price text-left">
								<h4>{data ? data.problem.problem_title : ""}</h4>
							</div>
							<div className="product-slider">
								<div className="product-slider-item my-1" data-image="images/products/products-1.jpg">
								{data && data.problem.image.length > 0 ? (
								<img className="img-fluid w-100"  style={{ width: '100%', height: 300 }} src={data.problem.image[0].url} alt="single problem img" />
							) :
								<img
								className="img-fluid w-100"
								src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
								alt=""
								/>}
								</div>						
							</div>

							<div className="content mt-2 pt-2">
								<ul className="nav nav-pills  justify-content-left " role="tablist">
									<li className="nav-item" onClick={()=>setCategory('product_details')}>
										<a className="nav-link active">Project Details</a>
									</li>
									<li className="nav-item" onClick={()=>setCategory('specifications')}>
										<a className="nav-link active" >Tags</a>
									</li>
									<li className="nav-item" onClick={()=>setCategory('reviews')}>
										<a className="nav-link active">Reviews</a>
									</li>
								</ul>
								
								<div className="tab-content" >
								{
										category==='product_details' && 
										(<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
										<h3 className="tab-title">Problem Description</h3>
										<p>{data ? data.problem.problem_desc : ""}?</p>
										</div>)
									}
									{
										category==='specifications' && 
										(<div className="tab-pane fade active show" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
										<h3 className="tab-title">Problem Tags</h3>
										<table className="table table-bordered product-table">
											<tbody>
												
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
									<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
										<h3 class="tab-title">Product Review</h3>
										<div class="product-review">
											<div class="media">
												<img src="images/user/user-thumb.jpg" alt="avater"/>
												<div class="media-body">
													<div class="ratings">
														<ul class="list-inline">
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
															<li class="list-inline-item">
																<i class="fa fa-star"></i>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div class="review-submission">
												<h3 class="tab-title">Submit your review</h3>
												<div class="rate">
													<div class="starrr"></div>
												</div>
												<div class="review-submit">
													<form action="#" method="POST" class="row">
														<div class="col-lg-6 mb-3">
															<input type="text" name="name" id="name" class="form-control" placeholder="Name" required/>
														</div>
														<div class="col-lg-6 mb-3">
															<input type="email" name="email" id="email" class="form-control" placeholder="Email" required/>
														</div>
														<div class="col-12 mb-3">
															<textarea name="review" id="review" rows="6" class="form-control" placeholder="Message" required></textarea>
														</div>
														<div class="col-12">
															<button type="submit" class="btn btn-main">Sumbit</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					</article>
				</div>
			</div>
		</section>
      <Footer/>
      </>
    );
}
