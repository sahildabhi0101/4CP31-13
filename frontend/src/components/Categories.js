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
    <>
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

                                    <CategoryCard cat='mern' name="Mern Stack"/>
                                    <CategoryCard cat='blockchain' name="Blockchain"/>
                                    <CategoryCard cat='ar/vr' name="AR_VR"/>
                                    <CategoryCard cat='machine learning' name="Machine Learning"/>
                                    <CategoryCard cat='dotNet' name=".net"/>
                                    <CategoryCard cat='cloud' name="Cloud"/>
                                    <CategoryCard cat='python' name="Python"/>
                                    <CategoryCard cat='react' name="React"/>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Container End --> */}
            </>
    )
}

export default Categories
