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
                                    <h2>Project Categories</h2>
                                </div>
                                <div className="row">
                                    {/* <!-- Category list --> */}

                                    <CategoryCard  cat='mern'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='blockchain'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='AR/VR'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='machine Learning'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='dotNet'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='cloud'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='python'/>
                                    <CategoryCard onClick={() => handleClick('html')} cat='react'/>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Container End --> */}
        </section>
    )
}

export default Categories
