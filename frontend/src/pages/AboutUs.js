import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <>        
            <Navbar/>
                <section className="page-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 text-center">
                                <h3>About Us</h3>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="section">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="about-img">
                            <img src={require("../images/about/about.jpg")} className="img-fluid w-100 rounded" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pt-lg-0">
                            <div className="about-content">
                            <h3 className="font-weight-bold">Introduction</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est justo, aliquam nec tempor
                                fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum tincidunt magna id
                                euismod. Nam sollicitudin mi quis orci lobortis feugiat.</p>
                            <h3 className="font-weight-bold">How we can help</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est justo, aliquam nec tempor
                                fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum tincidunt magna id
                                euismod. Nam sollicitudin mi quis orci lobortis feugiat. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Nunc est justo, aliquam nec tempor fermentum, commodo et libero. Quisque et rutrum arcu. Vivamus dictum
                                tincidunt magna id euismod. Nam sollicitudin mi quis orci lobortis feugiat.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <section className="mb-5">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="heading text-center text-capitalize font-weight-bold py-5">
                        <h2>Our team</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="card my-3 my-lg-0">
                        <img className="card-img-top img-fluid w-100" src={require("../images/team/team1.jpg")} alt="Card image cap"/>
                        <div className="card-body bg-gray text-center">
                            <h5 className="card-title">Jay Laheri</h5>
                            <p className="card-text">Founder / CEO</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="card my-3 my-lg-0">
                        <img className="card-img-top img-fluid w-100" src={require("../images/team/team1.jpg")} alt="Card image cap"/>
                        <div className="card-body bg-gray text-center">
                            <h5 className="card-title">Pratik Kher</h5>
                            <p className="card-text">Founder / CEO</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="card my-3 my-lg-0">
                        <img className="card-img-top img-fluid w-100" src={require("../images/team/team1.jpg")} alt="Card image cap"/>
                        <div className="card-body bg-gray text-center">
                            <h5 className="card-title">Sahil Dabhi</h5>
                            <p className="card-text">Founder / CEO</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

            <Footer/>
        </>

    )
}

export default AboutUs