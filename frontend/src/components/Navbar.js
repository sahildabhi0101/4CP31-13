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
								<a className="navbar-brand" href="/">
									<img src="/assets/images/logo.png" alt="" />
								</a>
								<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
									aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span className="navbar-toggler-icon"></span>
								</button>
								<div className="collapse navbar-collapse" id="navbarSupportedContent">
									<ul className="navbar-nav main-nav ms-auto order-0">
										<li className="nav-item active">
											<a className="nav-link" href="/">Home</a>
										</li>
										
										<li className="nav-item dropdown dropdown-slide @@dashboard">
											<a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#!">Dashboard<span><i className="fa fa-angle-down"></i></span>
											</a>

											{/* <!-- Dropdown list --> */}
											<ul className="dropdown-menu">
												<Link className="dropdown-item @@dashboardPage" to={"/display-projects"}>Display All project</Link>
												<Link className="dropdown-item @@dashboardMyAds" to={"/display-problems"}>Display ALl Problems</Link>
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
										<li className="nav-item">
											<a className="nav-link" href="about-us">About Us</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="contact-us">Contact Us</a>
										</li>
									</ul>


									{isLoggedin ? (
										<Dropdown >
											<Dropdown.Toggle variant="" id="dropdown-basic">
												<Avatar textSizeRatio={2} size="40" round={true} name={JSON.parse(localStorage.getItem("NameOfUser"))} />

											</Dropdown.Toggle>
											{whoisLoggedin.user === "student" ? (
												// for student
												<Dropdown.Menu className="dropdown-menu">
													<Dropdown.Item >
														<Avatar textSizeRatio={2} size="100" round={true} name={JSON.parse(localStorage.getItem("NameOfUser"))} />
													</Dropdown.Item>
													<Dropdown.Item className="dropdown-item" style={{ alignContent:'center' }} href="user-profile">
														{JSON.parse(localStorage.getItem("NameOfUser"))}
													</Dropdown.Item>
													<Dropdown.Item href="/">Home</Dropdown.Item>
													<Dropdown.Item href="/addproject">add project</Dropdown.Item>
													<Dropdown.Item href="/myprojects">my project</Dropdown.Item>
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
													<Dropdown.Item href="/addproduct">My invest</Dropdown.Item>
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
										<ul className="navbar-nav ml-3">
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
