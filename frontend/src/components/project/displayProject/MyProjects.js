import React, { useEffect, useState } from 'react'
import { ProjectCard } from './ProjectCard';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
export const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    const fetchProjects = async () => {
        const url = `/api/project/allstudentprojects`;
        const response = await axios.get(url);
        // console.log(response.data.userdata)
        setProjects(response.data.userdata)
    }
    const onDelete = async (id) => {
        console.log('ondelete', id)
        const isDelete = await axios.delete(`/api/project/deletestudentproject/${id}`);
        if (isDelete.status === 200) {
            alert('Project deleted successfully.')
            fetchProjects();
        }
    }
    useEffect(() => {  fetchProjects(); }, [])

    return (
        <>
            <Container my={5} p={3} px={5} >
                <center>
                    <h3 size={'xl'}>
                        My Projects
                    </h3>
                </center>
                {/* <input type="text" style={{ border: "2px solid black" }} onChange={(e) => { setsearchValue(e.target.value) }} placeholder="Search via TAGS" /> */}




                {
                    projects ?
                        projects.map((project, index) => (
                            project.project_id != null ?
                                <ProjectCard
                                    key={index}
                                    project_id={project.project_id._id}
                                    project_title={project.project_id.project_title}
                                    project_desc={project.project_id.project_desc}
                                    // students={project.student_id}    //remaining to make api
                                    tags={project.project_id.tags}
                                    image={project.project_id.image[0].url === "" ? 'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' : project.project_id.image[0].url}
                                    user={'student'}
                                    onDelete={onDelete}
                                /> : ''

                        )) : ""
                }
                {/* <ProjectCard /> */}
            </Container>
        </>
    );
}