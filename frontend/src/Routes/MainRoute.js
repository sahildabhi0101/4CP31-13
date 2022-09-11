import React from "react";
import { Route ,Routes} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserProfile from "../pages/UserProfile";

import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
export const MainRoute = () => {
    return(
        <>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/" element={<Home/>} />
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register/>} />
                <Route path="user-profile" element={<UserProfile/>} />
                <Route path="project-details" element={<ProjectDetails/>}/>
            </Routes>
        </>
    )
}