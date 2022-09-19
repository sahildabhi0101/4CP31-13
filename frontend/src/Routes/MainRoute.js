import React from "react";
import { Route ,Routes} from "react-router-dom";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";
import UserProfile from "../pages/UserProfile";
import AddProject from "../components/project/addProject/AddProject";

import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
import { DisplayAllProjects } from "../components/project/displayProject/DisplayAllProjects"
import Aboutus from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

export const MainRoute = () => {
    return(
        <>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route exact path='/logout' element={<Logout />}></Route>

                <Route path="/addproject" element={<AddProject />}></Route>

                <Route path="user-profile" element={<UserProfile/>} />
                <Route path="/display-projects" element={<DisplayAllProjects/>}/>
                <Route path="project-details" element={<ProjectDetails/>}/>
                <Route path="about-us" element={<Aboutus/>}/>
                <Route path="contact-us" element={<ContactUs/>}/>
            </Routes>
        </>
    )
}