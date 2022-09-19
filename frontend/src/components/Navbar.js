import React from 'react'
import { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Avatar from 'react-avatar';

const Navbar = () => {
	const [whoisLoggedin, setwhoisLoggedin] = useCookies(["user"]);
	const [isLoggedin, setisLoggedIn] = useState(false);

	useEffect(() => {
		// console.log(whoisLoggedin);
		if (
			whoisLoggedin.user === "student" ||
			whoisLoggedin.user === "agency" ||
			whoisLoggedin.user === "institute" ||
			whoisLoggedin.user === "investor"
		) {
			setisLoggedIn(true);
		}
		//  console.log(isLoggedin)
	}, [isLoggedin, whoisLoggedin]);

	return (
		<div>
			<header>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<nav className="navbar navbar-expand-lg navbar-light navigation">
								<a className="navbar-brand" href="index.html">
									<img src="./assets/images/logo.png" alt="" />
								</a>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>
								<div className="collapse navbar-collapse" id="navbarSupportedContent">
									<ul className="navbar-nav ml-auto main-nav ">
										<li className="nav-item active">
											<a className="nav-link" href="/">Home</a>
										</li>
										<li className="nav-item dropdown dropdown-slide @@dashboard">
											<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#!">Dashboard<span><i className="fa fa-angle-down"></i></span>
											</a>

											{/* <!-- Dropdown list --> */}
											<ul className="dropdown-menu">
												<Link className="dropdown-item @@dashboardPage" to={"/display-projects"}>Display All project</Link>
												<li><a className="dropdown-item @@dashboardMyAds" href="dashboard-my-ads.html">Dashboard My Ads</a></li>
												<li><a className="dropdown-item @@dashboardFavouriteAds" href="dashboard-favourite-ads.html">Dashboard Favourite Ads</a></li>
												<li><a className="dropdown-item @@dashboardArchivedAds" href="dashboard-archived-ads.html">Dashboard Archived Ads</a></li>
												<li><a className="dropdown-item @@dashboardPendingAds" href="dashboard-pending-ads.html">Dashboard Pending Ads</a></li>

												<li className="dropdown dropdown-submenu dropright">
													<a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

													<ul className="dropdown-menu" aria-labelledby="dropdown0501">
														<li><a className="dropdown-item" href="index.html">Submenu 01</a></li>
														<li><a className="dropdown-item" href="index.html">Submenu 02</a></li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="nav-item dropdown dropdown-slide @@pages">
											<a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown" aria-expanded="false">
												Pages <span><i className="fa fa-angle-down"></i></span>
											</a>
											{/* <!-- Dropdown list --> */}
											<ul className="dropdown-menu">
												<li><a className="dropdown-item @@about" href="about-us.html">About Us</a></li>
												<li><a className="dropdown-item @@contact" href="contact-us.html">Contact Us</a></li>
												<li><a className="dropdown-item @@profile" href="user-profile">User Profile</a></li>
												<li><a className="dropdown-item @@404" href="404.html">404 Page</a></li>
												<li><a className="dropdown-item @@package" href="package.html">Package</a></li>
												<li><a className="dropdown-item @@singlePage" href="project-details">ProjectDetails</a></li>
												<li><a className="dropdown-item @@store" href="store.html">Store Single</a></li>
												<li><a className="dropdown-item @@blog" href="blog.html">Blog</a></li>
												<li><a className="dropdown-item @@singleBlog" href="single-blog.html">Blog Details</a></li>
												<li><a className="dropdown-item @@terms" href="terms-condition.html">Terms &amp; Conditions</a></li>
											</ul>
										</li>
										<li className="nav-item dropdown dropdown-slide @@listing">
											<a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown" aria-expanded="false">
												Listing <span><i className="fa fa-angle-down"></i></span>
											</a>
											{/* <!-- Dropdown list --> */}
											<ul className="dropdown-menu">
												<li><a className="dropdown-item @@category" href="category.html">Ad-Gird View</a></li>
												<li><a className="dropdown-item @@listView" href="ad-list-view.html">Ad-List View</a></li>

												<li className="dropdown dropdown-submenu dropleft">
													<a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0201" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>

													<ul className="dropdown-menu" aria-labelledby="dropdown0201">
														<li><a className="dropdown-item" href="index.html">Submenu 01</a></li>
														<li><a className="dropdown-item" href="index.html">Submenu 02</a></li>
													</ul>
												</li>
											</ul>
										</li>
									</ul>


									{isLoggedin ? (
										<Dropdown>
											<Dropdown.Toggle variant="" id="dropdown-basic">
												<Avatar textSizeRatio={2} size="40" round={true} name={JSON.parse(localStorage.getItem("NameOfUser"))} />

											</Dropdown.Toggle>
											{whoisLoggedin.user === "student" ? (
												// for student
												<Dropdown.Menu >
													<Dropdown.Item style={{ paddingLeft: "27px" }}>
														<Avatar textSizeRatio={2} size="100" round={true} name={JSON.parse(localStorage.getItem("NameOfUser"))} />
													</Dropdown.Item>
													<Dropdown.Item style={{ marginLeft: "35px" }}>
														{JSON.parse(localStorage.getItem("NameOfUser"))}
													</Dropdown.Item>
													<Dropdown.Item href="/">Home</Dropdown.Item>
													<Dropdown.Item href="/addproject">add project</Dropdown.Item>
													<Dropdown.Item href="/studentprojects">my project</Dropdown.Item>
													<Dropdown.Item href="/logout">Logout</Dropdown.Item>
												</Dropdown.Menu>
											) : whoisLoggedin.user === "investor" ? (
												// for investor
												<Dropdown.Menu>
													<Dropdown.Item style={{ paddingLeft: "27px" }}>
														<Avatar textSizeRatio={2} size="100" round={true} name={JSON.parse(localStorage.getItem("NameOfUser"))} />
													</Dropdown.Item>
													<Dropdown.Item style={{ marginLeft: "35px" }}>
														{JSON.parse(localStorage.getItem("NameOfUser"))}
													</Dropdown.Item>
													<Dropdown.Item href="/">Home</Dropdown.Item>
													<Dropdown.Item href="/addproduct">my invest</Dropdown.Item>
													<Dropdown.Item href="/logout">Logout</Dropdown.Item>
												</Dropdown.Menu>

											) : whoisLoggedin.user === "institute" ? (
												// for institute
												<Dropdown.Menu>
													<Dropdown.Item style={{ paddingLeft: "27px" }}>
														<Avatar textSizeRatio={2} size="100" round={true} name={JSON.parse(localStorage.getItem("NameOfUser"))} />
													</Dropdown.Item>
													<Dropdown.Item style={{ marginLeft: "35px" }}>
														{JSON.parse(localStorage.getItem("NameOfUser"))}
													</Dropdown.Item>
													<Dropdown.Item href="/">Home</Dropdown.Item>
													<Dropdown.Item href="/addproduct">my success story</Dropdown.Item>
													<Dropdown.Item href="/logout">Logout</Dropdown.Item>
												</Dropdown.Menu>
											) : (
												// for agency
												<Dropdown.Menu>
													<Dropdown.Item style={{ paddingLeft: "27px" }}>
														<Avatar textSizeRatio={2} size="100" round={true} name={JSON.parse(localStorage.getItem("NameOfUser"))} />
													</Dropdown.Item>
													<Dropdown.Item style={{ marginLeft: "35px" }}>
														{JSON.parse(localStorage.getItem("NameOfUser"))}
													</Dropdown.Item>
													<Dropdown.Item href="/">Home</Dropdown.Item>
													<Dropdown.Item href="/addproblem">Add Problem Statement</Dropdown.Item>
													<Dropdown.Item href="/agencyproblems">Your Problem Statement</Dropdown.Item>
													<Dropdown.Item href="/logout">Your Logout</Dropdown.Item>
												</Dropdown.Menu>
											)}
										</Dropdown>
									) : (
										<ul className="navbar-nav ml-auto mt-10">
											<li className="nav-item">
												<Link className="nav-link login-button" to="/login">Login</Link>
											</li>
											<li className="nav-item">
												<Link className="nav-link text-white add-button" to="/register"> Sign UP</Link>
											</li>
										</ul>
									)}
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Navbar
