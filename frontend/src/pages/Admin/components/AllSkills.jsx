import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSkills } from "../../../redux/slices/userSlice"; 
import { MdDelete } from "react-icons/md";
const AllSkills = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.user.skills);
  const getSkills = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/getSkills");
      const data = res.data.skills;
      dispatch(setSkills(data));
    } catch (error) {
      console.error("Error fetching skills:", error);
    }
  };

  const deleteSkill = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/removeSkill/${id}`);
      const data = res.data;
      alert(data.message);
      getSkills(); // Refresh the skills list after deletion
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);
  if (!skills) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap=3 ">
      {skills.map((skill) => {
        return (
          <div 
          key={skills._id}
          className="flex justify-between items-center lg:text-2xl bg-black text-orange-300 font-bold px-3 py-2 border w-[80vw] lg:w-[30vw] rounded-full">
            <span>{skill.skill}</span>
            <MdDelete className="hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500 text-red-500" onClick={() => deleteSkill(skill._id)} />
          </div>
        );
      })}
    </div>
  );
};
export default AllSkills;
