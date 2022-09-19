import React from "react";
import { Route ,Routes} from "react-router-dom";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";
import UserProfile from "../pages/UserProfile";
import AddProject from "../components/project/addProject/AddProject";

import Home from "../pages/Home";
import ProjectDetails from "../pages/ProjectDetails";
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


                <Route path="user_profile" element={<UserProfile/>} />
                <Route path="project_details" element={<ProjectDetails/>}/>
            </Routes>
        </>
    )
}