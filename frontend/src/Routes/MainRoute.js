import React from "react";
import { Route ,Routes} from "react-router-dom";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Register from "../pages/Register";
import UserProfile from "../pages/UserProfile";



import AddProject from "../components/project/addProject/AddProject";
import { DisplayAllProjects } from "../components/project/displayProject/DisplayAllProjects"
import { MyProjects } from "../components/project/displayProject/MyProjects";
import SingleProject from "../components/project/singleProject/SingleProject";
import UpdateProject from "../components/project/updateProject/UpdateProject";
import { CategoryProjects } from "../components/project/categoryProjects/CategoryProjects";
import { CategoryProblems } from "../components/problem/categoryProblem/CategoryProblems";

import Home from "../pages/Home";

import Aboutus from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

import { QueryClientProvider, QueryClient } from 'react-query'
import DisplayAllProblems from "../components/problem/displayProblem/DisplayAllProblems";
import AddProblem from "../components/problem/addProblem/AddProblem";
import MyProblems from "../components/problem/displayProblem/MyProblems";
import SingleProblem from "../components/problem/singleProblem/singleProblem";
import UpdateProblem from "../components/problem/updateProblem/UpdateProblem";



const queryClient = new QueryClient()

export const MainRoute = () => {
    return(
        <>
            <QueryClientProvider client={queryClient}>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route exact path='/logout' element={<Logout />}></Route>

                {/* projects */}
                <Route path="/addproject" element={<AddProject />} />
                <Route path="/display-projects" element={<DisplayAllProjects/>}/>
                <Route exact path="/project/:project_id" element={<SingleProject />}></Route>
                <Route exact path="/myprojects" element={<MyProjects/>} />
                <Route exact path="/updateproject/:project_id" element={<UpdateProject />} />
                <Route exact path="/categorywiseProject" element={<CategoryProjects />} />



                <Route path="/addproblem" element={<AddProblem/>} />
                <Route path="/display-problems" element={<DisplayAllProblems/>}/>
                <Route exact path="/agencyproblems" element={<MyProblems/>}></Route>
                <Route exact path="/problem/:problem_id" element={<SingleProblem/>}></Route>
                <Route exact path="updateproblem/:problem_id" element={<UpdateProblem/>}/>
                <Route exact path="/categorywiseProblem" element={<CategoryProblems />} />
                


                <Route path="user-profile" element={<UserProfile/>} />
                <Route path="about-us" element={<Aboutus/>}/>
                <Route path="contact-us" element={<ContactUs/>}/>
            </Routes>
            </QueryClientProvider>
        </>
    )
}