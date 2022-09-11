import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const Register = () => {
    const navigate = useNavigate();
    const [select, setselect] = useState('student');
    const handleSelect = (e) => {
        console.log(e);
        setselect(e)
    }
    const [input, setInput] = useState({
        name: '',
        email: '',
        mobile_no: '',
        password: '',
        cpassword: '',
        education_id: '',
        address: 'demo',
        institute_name: 'demo',
        agencies_name: 'demo',
        registration_no: '1234',
        success_story_id: [],
        linkedin_url: "https://www.pluralsight.com/guides/",
        twitter_url: "https://www.pluralsight.com/guides/",
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
        console.log(input.cpassword);
        if (input.password === input.cpassword) {
            if (select === 'student') {
                const user = await axios.post(`/api/student/register`, {
                    name: input.name,
                    email: input.email,
                    mobile_no: input.mobile_no,
                    password: input.password,
                    education_id: input.education_id,
                })
                console.log(user.data)
                if (user.status === 200) {
                    alert('Your Registration is successfull.')
                    navigate('/login')

                } else {
                    alert('Your Registration in not done.')
                }
            }
            else if (select === 'investor') {
                const user = await axios.post(`/api/investor/register`, {
                    name: input.name,
                    email: input.email,
                    mobile_no: input.mobile_no,
                    education_id: input.education_id,
                    linkedin_url: input.linkedin_url,
                    twitter_url: input.twitter_url,
                    password: input.password
                })
                console.log(user.data)
                if (user.status === 200) {
                    alert('Your Registration is successfull.')
                    navigate('/login')

                } else {
                    alert('Your Registration in not done.')
                }
            }
            else if (select === 'institute') {
                const user = await axios.post(`/api/institute/register`, {
                    institute_name: input.name,
                    email: input.email,
                    mobile_no: input.mobile_no,
                    password: input.password,
                    address: input.address,
                    registration_no: input.registration_no,
                    success_story_id: input.success_story_id,
                })
                console.log(user.data)
                if (user.status === 200) {
                    alert('Your Registration is successfull.')
                    navigate('/login')

                } else {
                    alert('Your Registration in not done.')
                }
            }
            else if (select === 'agency') {
                const user = await axios.post(`/api/agency/register`, {
                    agencies_name: input.name,
                    email: input.email,
                    mobile_no: input.mobile_no,
                    password: input.password,
                    address: input.address,
                })
                console.log(user.data)
                if (user.status === 200) {
                    alert('Your Registration is successfull.')
                    navigate('/login')

                } else {
                    alert('Your Registration in not done.')
                }
            }
        }
        else {
            alert('your password and confirm password are not same. Please Enter same password!')
        }
    }
    // console.log(input)
    return (
        <>
            <Navbar />
            <section className="login py-5 border-top-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-8 align-item-center">
                            <div className="border border">
                                <h3 className="bg-gray p-4">Register Now</h3>
                                <form action="#">
                                    <fieldset className="p-4">
                                        <DropdownButton
                                            className='form-control mb-3'
                                            title={select}
                                            onSelect={handleSelect}
                                        >
                                            <Dropdown.Item eventKey="student">Student</Dropdown.Item>
                                            <Dropdown.Item eventKey="investor">Investor</Dropdown.Item>
                                            <Dropdown.Item eventKey="institute">Institute</Dropdown.Item>
                                            <Dropdown.Item eventKey="agency">Agency</Dropdown.Item>
                                        </DropdownButton>

                                        <input className="form-control mb-3" type="text" placeholder="Name" onChange={handleInput} value={input.name} name="name" required />
                                        <input className="form-control mb-3" type="email" placeholder="Email" onChange={handleInput} value={input.email} name="email" required />
                                        <input className="form-control mb-3" type="number" placeholder="Mobile Number" onChange={handleInput} value={input.mobile_no} name="mobile_no" maxLength={10} required />
                                        <input className="form-control mb-3" type="password" placeholder="Password" onChange={handleInput} value={input.password} name="password" required />
                                        <input className="form-control mb-3" type="password" placeholder="Confirm Password" onChange={handleInput} value={input.cpassword} name="cpassword" required />
                                        <div className="loggedin-forgot d-inline-flex my-3">
                                            <input type="checkbox" id="registering" className="mt-1" />
                                            <label htmlFor="registering" className="px-2">By registering, you accept our <a className="text-primary font-weight-bold" href="terms-condition.html">Terms & Conditions</a></label>
                                        </div>
                                        <button type="submit" onClick={onSubmit} className="btn btn-primary font-weight-bold mt-3">Register Now</button>
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
