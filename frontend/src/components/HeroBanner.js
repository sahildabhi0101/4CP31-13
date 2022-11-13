import React from 'react'

const HeroBanner = () => {
  return (
    <section className="hero-area bg-1 text-center overly">
{/* 	<!-- Container Start --> */}
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				{/* <!-- Header Contetnt --> */}
				<div className="content-block">
					<h1>Up The Startups</h1>
					<p>Join the millions <br/> everyday in local communities around the world</p>
					<div className="short-popular-category-list text-center">
						<h2>Popular Category</h2>
						<ul className="list-inline">
							<li className="list-inline-item">
								<a href="category.html"><i className="fa fa-bed"></i> AR/VR</a></li>
							<li className="list-inline-item">
								<a href="category.html"><i className="fa fa-grav"></i> MERN Stack</a>
							</li>
							<li className="list-inline-item">
								<a href="category.html"><i className="fa fa-car"></i> BlockChain</a>
							</li>
							<li className="list-inline-item">
								<a href="category.html"><i className="fa fa-cutlery"></i>MetaVerse</a>
							</li>
							<li className="list-inline-item">
								<a href="category.html"><i className="fa fa-coffee"></i> Machine Learning</a>
							</li>
						</ul>
					</div>

				</div>
				{/* <!-- Advance Search --> */}
				<div className="advance-search">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-12 col-md-12 align-content-center">
								<form>
									<div className="form-row">
										<div className="form-group col-xl-4 col-lg-3 col-md-6">
											<input type="text" className="form-control my-2 my-lg-1" id="inputtext4" placeholder="What are you looking for"/>
										</div>
										<div className="form-group col-lg-3 col-md-6">
											<select className="w-100 form-control mt-lg-1 mt-md-2">
												<option>Category</option>
												<option value="1">Top rated</option>
												<option value="2">Lowest Price</option>
												<option value="4">Highest Price</option>
											</select>
										</div>
										<div className="form-group col-lg-3 col-md-6">
											<input type="text" className="form-control my-2 my-lg-1" id="inputLocation4" placeholder="Location"/>
										</div>
										<div className="form-group col-xl-2 col-lg-3 col-md-6 align-self-center">
											<button type="submit" className="btn btn-primary active w-100">Search Now</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- Container End --> */}
</section>
  )
}

export default HeroBanner
