import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {

    const navigate = useNavigate();
    const logout = async (req, res) => {
        try{
            const url=`/api/logout/`;
            const response = await axios.get(url);
            // console.log(response);
            const data = response.data;
            console.log(data);
            localStorage.removeItem("NameOfUser");
            navigate('/');
            window.location.reload();
        }
        catch(err){
            console.log(err);
        }
    }
  useEffect(() => {
    logout();   
  });

  return( 
    <>
        Logout Page
    </>
  )
}

export default Logout