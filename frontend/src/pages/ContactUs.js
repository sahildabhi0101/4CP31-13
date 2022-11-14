import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";

const ContactUs = () => {
    return (
        <>        
            <Navbar/>
            <section class="page-title">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2 text-center">
                            <h3>Contact Us</h3>
                        </div>
                    </div>
                </div>
            </section>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-us-content p-4">
                                    <h5>Contact Us</h5>
                                    <h1 className="pt-3">Hello, what's on your mind?</h1>
                                    <p className="pt-3 pb-5">Feel free to contact us.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                    <form action="#">
                                        <fieldset className="p-4">
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-lg-6 py-2">
                                                        <input type="text" placeholder="Name *" className="form-control" required/>
                                                    </div>
                                                    <div className="col-lg-6 pt-1">
                                                        <input type="email" placeholder="Email *" className="form-control" required/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                    <div className="col-lg-12 py-1">
                                                        <input type="text" placeholder="Subject *" className="form-control" required/>
                                                    </div>
                                                </div>
                                            <textarea name="message" id=""  placeholder="Message *" className="border w-100 p-3 mt-3 mt-lg-4"></textarea>
                                            <div className="btn-grounp">
                                                <button type="submit" className="btn btn-primary mt-2 float-right" onClick={onsubmit}>SUBMIT</button>
                                            </div>
                                        </fieldset>
                                    </form>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
}

export default ContactUs