import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Register = () => {
    return (
    <>
            <Navbar />
            <section class="login py-5 border-top-1">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-8 align-item-center">
                            <div class="border border">
                                <h3 class="bg-gray p-4">Register Now</h3>
                                <form action="#">
                                    <fieldset class="p-4">
                                    <label for="category">Register As</label>
                                                <select name="category" placeholder='select option' className='form-control mb-3'>
                                                    <option value="" disabled selected>Select One</option>
                                                    <option value="student">Student</option>
                                                    <option value="investor">Investor</option>
                                                    <option value="institute">Institute</option>
                                                    <option value="agency">Agency</option>
                                                </select>
                                                <input class="form-control mb-3" type="text" placeholder="Name" required />
                                                <input class="form-control mb-3" type="email" placeholder="Email" required />
                                                <input class="form-control mb-3" type="number" placeholder="Mobile Number" maxLength={10} required />
                                                <input class="form-control mb-3" type="password" placeholder="Password" required />
                                                <input class="form-control mb-3" type="password" placeholder="Confirm Password" required />
                                                    <div class="loggedin-forgot d-inline-flex my-3">
                                                        <input type="checkbox" id="registering" class="mt-1"/>
                                                            <label for="registering" class="px-2">By registering, you accept our <a class="text-primary font-weight-bold" href="terms-condition.html">Terms & Conditions</a></label>
                                                    </div>
                                                    <button type="submit" class="btn btn-primary font-weight-bold mt-3">Register Now</button>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </section>

                    <Footer />
                </>
                )
}

                export default Register
