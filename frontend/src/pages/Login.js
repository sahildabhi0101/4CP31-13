import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../API/LoginAPI";

const Login = () => {
    const navigate = useNavigate();
    const [select, setselect] = useState('student');
    const handleInput1 = (e) => {
        setselect(e.target.value)
    }
    const [input, setInput] = useState({
        email: '',
        password: '',
    })
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(select)
        console.log(input.email);
        console.log(input.password);

        // send data to API key
        const body = {
            email: input.email,
            password: input.password,
        };
        // console.log(body)
        const response = await LoginAPI(body,select);

        console.log(response);
        localStorage.setItem("NameOfUser", JSON.stringify(response.detail.name));

        // check response status and show message accoringly
        // TODO

        navigate("/");
    };
    return (
        <>
            <Navbar />

            <section className="login py-5 border-top-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8 align-item-center">
                            <div className="border">
                                <h3 className="bg-gray p-4">Login Now</h3>
                                <form action="#">
                                    <fieldset className="p-4">
                                        {/* <label htmlFor="category">Login As</label> */}
                                        <select name="category"
                                            onChange={handleInput1} value={select}
                                            className='form-control mb-3'>
                                            <option value="student">Student</option>
                                            <option value="investor">Investor</option>
                                            <option value="institute">Institute</option>
                                            <option value="agency">Agency</option>
                                        </select>
                                        <input className="form-control mb-3" type="email" placeholder="Email_id" onChange={handleInput} value={input.email} name="email" required />
                                        <input className="form-control mb-3" type="password" placeholder="Password" onChange={handleInput} value={input.password} name="password" required />
                                        <div className="loggedin-forgot">
                                            <input type="checkbox" id="keep-me-logged-in" />
                                            <label htmlFor="keep-me-logged-in" className="pt-3 pb-2">Keep me logged in</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary font-weight-bold mt-3" onClick={onSubmit}>Log in</button>
                                        <a className="mt-3 d-block text-primary" href="#!">Forget Password?</a>
                                        <a className="mt-3 d-inline-block text-primary" href="register">Register Now</a>
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
