import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import LatestProjects from '../components/LatestProjects'
import Loading from '../components/Loading/loading'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
        <div>
            <Navbar/>

{/* <!--===============================
=            Hero Area            =
================================--> */}

            <HeroBanner/>


{/* <!--===========================================
=            Popular deals section            =
============================================--> */}

            <LatestProjects />



{/* <!--==========================================
=            All Category Section            =
===========================================--> */}

            <Categories />


{/* <!--====================================
=            Call to Action            =
=====================================--> */}

                {/* <section className="call-to-action overly bg-3 section-sm"> */}
                {/* 	<!-- Container Start --> */}
                    {/* <div className="container">
                        <div className="row justify-content-md-center text-center">
                            <div className="col-md-8">
                                <div className="content-holder">
                                    <h2>Start today to get more exposure and
                                    grow your business</h2>
                                    <ul className="list-inline mt-30">
                                        <li className="list-inline-item"><a className="btn btn-main" href="ad-listing.html">Add Listing</a></li>
                                        <li className="list-inline-item"><a className="btn btn-secondary" href="category.html">Browser Listing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* 	<!-- Container End --> */}
                {/* </section> */}

{/* <!--============================
=            Footer            =
=============================--> */}
            <Footer/>
 </div>
  )
}

export default Home