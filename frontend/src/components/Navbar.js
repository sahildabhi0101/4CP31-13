import React from 'react'

const Navbar = () => {
  return (
    <div>
       <header>
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<nav className="navbar navbar-expand-lg navbar-light navigation">
					<a className="navbar-brand" href="index.html">
						<img src="./assets/images/logo.png" alt=""/>
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
									<li><a className="dropdown-item @@dashboardPage" href="dashboard.html">Dashboard</a></li>
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
								<a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown"  aria-expanded="false">
									Pages <span><i className="fa fa-angle-down"></i></span>
								</a>
								{/* <!-- Dropdown list --> */}
								<ul className="dropdown-menu">
									<li><a className="dropdown-item @@about" href="about-us.html">About Us</a></li>
									<li><a className="dropdown-item @@contact" href="contact-us.html">Contact Us</a></li>
									<li><a className="dropdown-item @@profile" href="user-profile">User Profile</a></li>
									<li><a className="dropdown-item @@404" href="404.html">404 Page</a></li>
									<li><a className="dropdown-item @@package" href="package.html">Package</a></li>
									<li><a className="dropdown-item @@singlePage" href="single.html">Single Page</a></li>
									<li><a className="dropdown-item @@store" href="store.html">Store Single</a></li>
									<li><a className="dropdown-item @@blog" href="blog.html">Blog</a></li>
									<li><a className="dropdown-item @@singleBlog" href="single-blog.html">Blog Details</a></li>
									<li><a className="dropdown-item @@terms" href="terms-condition.html">Terms &amp; Conditions</a></li>
								</ul>
							</li>
							<li className="nav-item dropdown dropdown-slide @@listing">
								<a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown"  aria-expanded="false">
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
						<ul className="navbar-nav ml-auto mt-10">
							<li className="nav-item">
								<a className="nav-link login-button" href="login">Login</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white add-button" href="ad-listing.html"><i className="fa fa-plus-circle"></i> Add Listing</a>
							</li>
						</ul>
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
