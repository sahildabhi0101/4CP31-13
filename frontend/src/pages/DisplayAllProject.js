import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'

const DisplayAllProject = () => {
  return (
    <>
      <Navbar/>

      <ProjectCard img={require("../images/products/products-3.jpg")}/>
      <ProjectCard img={require("../images/products/products-1.jpg")}/>
      <ProjectCard img={require("../images/products/products-2.jpg")}/>
      <Footer/>
    </>
  )
}

export default DisplayAllProject
