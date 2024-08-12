import React from 'react';
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from '../../redux/slices/authSlice';
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';
axios.defaults.withCredentials = true;

const Adminlogin = () => {
   // Admin login form here
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const loginUser = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post('http://localhost:5000/api/login', {
            email,
            password,
         });
         if (response.data.success === true) {
            dispatch(login());
            navigate("/admin");
         }
      } catch (error) {
         console.error("Error logging in:", error);
      }
   };
   const checkUser = async()=>{
     try {
        const response = await axios.get('http://localhost:5000/api/checkUser');
        if (response.data.success === true) {
           dispatch(login());
           navigate("/admin");
        }
     } catch (error) {
        console.error("Error checking user:", error);
     }

   }

   useEffect(()=>{
    checkUser();
   },[])

   return (
      <div className="w-screen h-screen flex justify-center items-center">
         <form className="flex flex-col justify-center items-center gap-3 w-[80vw] lg:w-[20vw] mx-auto" onSubmit={loginUser}>
            <input 
               type="email" 
               name="email" 
               id="email" 
               placeholder="Enter email" 
               onChange={(e) => setEmail(e.target.value)}
               value={email}
               className="px-3 py-2 rounded-md bg-black lg:text-2xl border-2 text-rose-500 w-full"
            />
            <input
               type="password"
               name="password"
               id="password"
               onChange={(e) => setPassword(e.target.value)}
               value={password}
               className="px-3 py-2 rounded-md lg:text-2xl bg-black border-2 text-white w-full"
               placeholder="Enter password"
            />
            <button 
               type="submit"
               className="px-3 py-2 rounded-md bg-white border-2 text-black lg:text-2xl w-full hover:bg-green-700 hover:bg-opacity-20"
            >
               Submit
            </button>
         </form>
      </div>
   );
};

export default Adminlogin;
