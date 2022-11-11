import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';
import './loading.css';

const Loading = () => {
  return (
    <>
      <Navbar />
      <section class="section bg-gray">
        <div class="container">
           <div class="row">
              <div class="col-md-6 text-center mx-auto">
              <div class="404-content">
              <div class="loader">
              <div class="inner one"></div>
              <div class="inner two"></div>
              <div class="inner three"></div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              
              <h1>Loading</h1>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </> 
   )
}

export default Loading