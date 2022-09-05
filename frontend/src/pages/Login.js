import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Login = () => {
    return (
        <>
            <Navbar />

            <section class="login py-5 border-top-1">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-8 align-item-center">
                            <div class="border">
                                <h3 class="bg-gray p-4">Login Now</h3>
                                <form action="#">
                                    <fieldset class="p-4">
                                    <label for="category">Login As</label>
                                        <select name="category" placeholder='select option' className='form-control mb-3'>
                                            <option value="" disabled selected>Select One</option>
                                            <option value="student">Student</option>
                                            <option value="investor">Investor</option>
                                            <option value="institute">Institute</option>
                                            <option value="agency">Agency</option> 
                                        </select>
                                        <input class="form-control mb-3" type="text" placeholder="Username" required />
                                        <input class="form-control mb-3" type="password" placeholder="Password" required />
                                        <div class="loggedin-forgot">
                                            <input type="checkbox" id="keep-me-logged-in" />
                                            <label for="keep-me-logged-in" class="pt-3 pb-2">Keep me logged in</label>
                                        </div>
                                        <button type="submit" class="btn btn-primary font-weight-bold mt-3">Log in</button>
                                        <a class="mt-3 d-block text-primary" href="#!">Forget Password?</a>
                                        <a class="mt-3 d-inline-block text-primary" href="register">Register Now</a>
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

export default Login
