import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

let counter = 0;
const ProblemCategoryCard = (props) => {
    const str = `fa fa-shopping-basket icon-bg-${counter}`
    counter+=1
    if(counter>8){
        counter=0
    }

    console.log("props",props);
    const [len, setLen] = useState(0);

    let navigate = useNavigate();
    const handleClick = (Cat) => {

        // setCategory(cat)
        // setCookie('category', category, { path: '/' });
        const path = '/categorywiseProblem'
        navigate(path, { state: { id: 1, category: Cat } })
    }
    async function filterFunction() {
        const all_problem = await axios.get(`/api/problem/filterdata?search=${props.cat}`)
        // console.log(all_problem.data.length) 
        setLen(all_problem.data.length);
        return all_problem.data;
    }
    filterFunction().then((res) => {
        console.log(res)
        setLen(res.length)
    });
    // const len = filterFunction();
    console.log("len=", len)
    useEffect(() => { filterFunction() })
    return (
        <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6" onClick={() => handleClick(props.cat)}>
            <div className="category-block">
                <div className="header">
                    <i className={str}></i>
                    <h4>{props.cat}</h4>
                </div>
                <ul className="category-list">
                    <li>Total Problems: <span>{len}</span></li>
                </ul>
            </div>
        </div>

    )
}

export default ProblemCategoryCard
