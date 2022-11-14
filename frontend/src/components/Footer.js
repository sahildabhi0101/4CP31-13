import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="footer section section-sm">
                {/*   <!-- Container Start --> */}
                <div className="container">
                    <div className="row">
                    <div className="col-lg-3 col-md-7 offset-md-1 offset-lg-0 mb-4 mb-lg-0">
                        {/* <!-- About --> */}
                        <div className="block about">
                        {/* <!-- footer logo --> */}
                        <img src="/assets/images/up_the_startups_logo_1.png" alt="logo"/>
                        {/*  <!-- description --> */}
                        </div>
                    </div>
                    {/* <!-- Link list --> */}
                    <div className="col-lg-0 offset-lg-1 col-md-3 col-6 mb-4 mb-lg-0">
                        <div className="block">
                        
                        </div>
                    </div>
                    {/*  <!-- Link list --> */}
                    
                    
                    {/* <!-- Promotion --> */}
                    <div class="col-lg-4 col-md-7">
                        <div class="block-2 app-promotion">
                        <div class="mobile d-flex  align-items-center">

                            <p class="mb-0"><Link className="nav-link" to={"/display-projects"}>Projects</Link></p>
                            <p class="mb-0"><Link className="nav-link" to={"/display-problems"}>Problems</Link></p>
                            <p class="mb-0"><a className="nav-link" href="about-us">About Us</a></p>
                            <p class="mb-0"><a className="nav-link" href="contact-us">Contact Us</a></p>
                        </div>

                        </div>
                    </div>
                    </div>
                </div>
                {/* <!-- Container End --> */}
                </footer>
{/* <!-- Footer Bottom --> */}
                <footer className="footer-bottom">
                <div class="container">
    <div class="row">
      <div class="col-lg-6 text-center text-lg-left mb-3 mb-lg-0">
        <div class="copyright">
          <p>Developed@  <script>
              var CurrentYear = new Date().getFullYear()
              document.write(CurrentYear)
            </script>Thanks to ThemeFisher Community <a class="text-white" href=""></a></p>
        </div>
      </div>
      <div class="col-lg-6">
        <ul class="social-media-icons text-center text-lg-right">

        </ul>
      </div>
    </div>
  </div>
                {/* <!-- Container Start --> */}
                
                {/*   <!-- Container End -->
                <!-- To Top --> */}
                <div className="scroll-top-to">
                    <i className="fa fa-angle-up"></i>
                </div>
                </footer>
                </>
  )
}

export default Footer
