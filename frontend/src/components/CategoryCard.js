import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CategoryCard = (props) => {
    
    const [len,setLen] = useState(0);

    let navigate = useNavigate();
    const handleClick = (Cat) => {
        
        // setCategory(cat)
        // setCookie('category', category, { path: '/' });
        const path='/categorywiseProject'
        navigate(path,{state:{id:1,category:Cat}})
    }
    async function filterFunction() {
        const all_project = await axios.get(`/api/project/filterdata?search=${props.cat}`)
        // console.log(all_project.data.length) 
        setLen(all_project.data.length);
        return all_project.data;
      }
    filterFunction().then((res)=>{console.log(res)
        setLen(res.length)
    });
    // const len = filterFunction();
    console.log("len=",len)
      useEffect(() => {filterFunction() })
    return (
        <div className="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6" >
            {/* <a href="categorywiseProject"> */}
            <div className="category-block">
                <div className="header">
                    <i className="fa fa-laptop icon-bg-1"></i>
                    <h4>{props.cat}</h4>
                </div>
                <h4>total : {len}</h4>
                <button onClick={()=>handleClick(props.cat)}>see all</button>
            </div>
            {/* </a> */}
        </div>
    )
}

export default CategoryCard
