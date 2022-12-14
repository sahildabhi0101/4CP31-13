import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";
import ProblemCategoryCard from './ProblemCategoryCard';

const LatestProjects = () => {
    let navigate = useNavigate();
    const handleClick = (Cat) => {

        // setCategory(cat)
        // setCookie('category', category, { path: '/' });
        const path = '/categorywiseProblem'
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
                                    <h2>Problem Categories</h2>
                                </div>
                                <div className="row">
                                    {/* <!-- Category list --> */}

                                    <ProblemCategoryCard cat='pvt' name='Pvt_Ltd'/>
                                    <ProblemCategoryCard cat='trafficManagement' name="Traffic_Management"/>
                                    <ProblemCategoryCard cat='gov' name='Government'/>
                                    <ProblemCategoryCard cat='hiringPortal' name='Hiring_Portal'/>

                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Container End --> */}
        </section>
    )
}

export default LatestProjects
