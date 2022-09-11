import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import product1 from '../images/products/products-1.jpg'

const ProjectDetails = () => {
  return (
    <>
      <Navbar/>
	
{/* <!--===================================
=            Store Section            =
====================================--> */}
<section className="section bg-gray">
	{/* <!-- Container Start --> */}
	<div className="container">
		<div className="row">
			{/* <!-- Left sidebar --> */}
			<div className="col-lg-12">
				<div className="product-details">
					<h1 className="product-title">Hp Dual Core 2gb Ram-Slim Laptop Available In Very Low Price</h1>
					<div className="product-meta">
						<ul className="list-inline">
							<li className="list-inline-item"><i className="fa fa-user-o"></i> By <a href="user-profile.html">Andrew</a></li>
							<li className="list-inline-item"><i className="fa fa-folder-open-o"></i> Category<a href="category.html">Electronics</a></li>
							<li className="list-inline-item"><i className="fa fa-location-arrow"></i> Location<a href="category.html">Dhaka Bangladesh</a></li>
						</ul>
					</div>

					{/* <!-- product slider --> */}
					<div className="product-slider">
						<div className="product-slider-item my-4" data-image={product1}>
							<img className="img-fluid w-100" src={product1} alt="product-img"/>
						</div>
						<div className="product-slider-item my-4" data-image={require("../images/products/products-2.jpg")}>
							<img className="d-block img-fluid w-100" src={require("../images/products/products-2.jpg")} alt="Second slide"/>
						</div>
						<div className="product-slider-item my-4" data-image={require("../images/products/products-3.jpg")}>
							<img className="d-block img-fluid w-100" src={require("../images/products/products-3.jpg")} alt="Third slide"/>
						</div>
						<div className="product-slider-item my-4" data-image={product1}>
							<img className="d-block img-fluid w-100" src={product1} alt="Third slide"/>
						</div>
						<div className="product-slider-item my-4" data-image={require("../images/products/products-2.jpg")}>
							<img className="d-block img-fluid w-100" src={require("../images/products/products-2.jpg")} alt="Third slide"/>
						</div>
					</div>
					{/* <!-- product slider --> */}

					<div className="content mt-5 pt-5">
						<ul className="nav nav-pills  justify-content-center" id="pills-tab" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home"
								 aria-selected="true">Product Details</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile"
								 aria-selected="false">Specifications</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact"
								 aria-selected="false">Reviews</a>
							</li>
						</ul>
						<div className="tab-content" id="pills-tabContent">
							<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
								<h3 className="tab-title">Product Description</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia laudantium beatae quod perspiciatis, neque
									dolores eos rerum, ipsa iste cum culpa numquam amet provident eveniet pariatur, sunt repellendus quas
									voluptate dolor cumque autem molestias. Ab quod quaerat molestias culpa eius, perferendis facere vitae commodi
									maxime qui numquam ex voluptatem voluptate, fuga sequi, quasi! Accusantium eligendi vitae unde iure officia
									amet molestiae velit assumenda, quidem beatae explicabo dolore laboriosam mollitia quod eos, eaque voluptas
									enim fuga laborum, error provident labore nesciunt ad. Libero reiciendis necessitatibus voluptates ab
									excepturi rem non, nostrum aut aperiam? Itaque, aut. Quas nulla perferendis neque eveniet ullam?</p>

								<p></p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam sed, officia reiciendis necessitatibus
									obcaecati eum, quaerat unde illo suscipit placeat nihil voluptatibus ipsa omnis repudiandae, excepturi! Id
									aperiam eius perferendis cupiditate exercitationem, mollitia numquam fuga, inventore quam eaque cumque fugiat,
									neque repudiandae dolore qui itaque iste asperiores ullam ut eum illum aliquam dignissimos similique! Aperiam
									aut temporibus optio nulla numquam molestias eum officia maiores aliquid laborum et officiis pariatur,
									delectus sapiente molestiae sit accusantium a libero, eligendi vero eius laboriosam minus. Nemo quibusdam
									nesciunt doloribus repellendus expedita necessitatibus velit vero?</p>

							</div>
							<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
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
							</div>
							<div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
								<h3 className="tab-title">Product Review</h3>
								<div className="product-review">
									<div className="media">
										{/* <!-- Avater --> */}
										<img src={require("../images/user/user-thumb.jpg")} alt="avater"/>
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
							</div>
						</div>
					</div>
				</div>
			</div>
			

		</div>
	</div>
	{/* <!-- Container End --> */}
</section>

<Footer/>
    </>
  )
}

export default ProjectDetails
