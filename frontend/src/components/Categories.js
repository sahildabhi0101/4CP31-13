import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import CategoryCard from './CategoryCard';

const Categories = () => {
    let navigate = useNavigate();
    const handleClick = (Cat) => {

        // setCategory(cat)
        // setCookie('category', category, { path: '/' });
        const path = '/categorywiseProject'
        navigate(path, { state: { id: 1, category: Cat } })
    }
    const handleClick1 = () => {
        navigate("/display-projects")
    }
  return (
    <section className=" section">
                    {/* <!-- Container Start --> */}
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* <!-- Section title --> */}
                                <div className="section-title">
                                    <h2>Categories</h2>
                                </div>
                                <div className="row">
                                    {/* <!-- Category list --> */}

                                    <CategoryCard onClick={() => handleClick('html')} cat='MERN Stack'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='Blockchain'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='AR/VR'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='Machine Learning'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='DotNet'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='Cloud'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='Python'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='React'/>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Container End --> */}
        </section>
    )
}

export default Categories
