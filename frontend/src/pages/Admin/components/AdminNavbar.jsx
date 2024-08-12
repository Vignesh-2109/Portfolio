import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../../redux/slices/navSlice";
import { setPage } from "../../../redux/slices/pageSlice";
import { logout } from "../../../redux/slices/authSlice";
import axios from "axios";
axios.defaults.withCredentials=true;
const AdminNavbar = () => {
    const toggleNav = useSelector((state) => state.nav.toggleNav);
    const dispatch = useDispatch();
    console.log(toggleNav);
    const logoutUser = async()=>{
        const res= await axios.get("http://localhost:5000/api/logout",{
            withCredentials:true,
        });
        if(res.data.success)
            dispatch(logout());

    };

    return (
        <nav
            className={`bg-white bg-opacity-5 backdrop-blur-xl text-white w-screen z-10 rounded-xl lg:rounded-none fixed lg:static h-screen lg:h-fit flex flex-col lg:flex-row justify-evenly
                       items-center lg:justify-between border border-none lg:border-gray-500 py-10 lg:py-3 lg:px-2 lg:translate-x-0 transition-all delay-100 ease-in-out ${toggleNav ? "translate-x-0" : "translate-x-full"}`}
        >

            <AiOutlineClose className="absolute top-5 right-5 text-lg hover:scale-125 cursor-pointer hover:text-red-400 transition-all lg:hidden"
                onClick={() => dispatch(toggle())} />
            <ul className="text-2xl flex justify-center flex-col lg:flex-row gap-3 lg:gap-2">
                <li className="text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg
                 px-2 py-1 transition-all outline-none rounded-md" onClick={() => {
                        dispatch(setPage("CreateProject"))
                        dispatch(toggle())
                    }} >
                    Add Project
                </li>
                <li className="text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg
px-2 py-1 transition-all outline-none rounded-md" onClick={
                        () => {
                            dispatch(setPage("CreateSkill"))
                            dispatch(toggle())
                        }
                    } >
                    Add Skill
                </li>
                <li className="text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md" onClick={
                    () => {
                        dispatch(setPage("AllProjects"))
                        dispatch(toggle())
                    }
                } >
                    List Of Projects
                </li>
                <li className="text-start cursor-pointer hover:bg-purple-500 hover:bg-opacity-60 hover:shadow-lg px-2 py-1 transition-all outline-none rounded-md" onClick={
                    () => {
                        dispatch(setPage("AllSkills"))
                        dispatch(toggle())
                    }
                } >
                    List Of Skills
                </li>
            </ul>
            <button
            onClick={logoutUser}
            className="text-2xl px-2 py-1 text-center hover:bg-red-400 hover:bg-opacity-60 hover:shadow-lg rounded-lg transition-all outline-none ">
                Logout
            </button>
        </nav>
    );
};
export default AdminNavbar;