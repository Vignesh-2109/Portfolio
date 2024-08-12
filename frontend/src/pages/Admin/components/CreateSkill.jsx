import {useState} from 'react';
import axios from "axios";

const CreateSkill = () => {
    const [skill,setSkill] = useState("");

    const addSkill=async(e)=>{
        e.preventDefault();
        if(skill === ""){
            alert("Skill Name is required");
            return;
        }
        try{
            const res=await axios.post("http://localhost:5000/api/addSkill",{
                skill,
            });
            console.log(res.data);
            alert(res.data.message);
            setSkill("");
        
        } catch(error){
            console.log(error);
        }

    };
    return (
        <div className="flex justify-center items-center min-h-screen">
        <div className="p-20 backdrop-blur-3xl rounded-md w-screen lg:w-fit mx-auto">
    < h1 className="text-3xl lg:text-5xl text-slate-400 my-5">Create Skill</h1>
    <form className="flex flex-col gap-3" onSubmit={addSkill}>
    <input
    type="text"
    name="skill"
    id="skill"
    placeholder="Enter New Skill"
    className="bg-transparent px-3 py-2 border rounded-full w-full lg:w-
    [40vw] font-bold text-xl gradient-text"
    onChange={(e)=>setSkill(e.target.value)}
    value={skill}
    />
    <button type="submit" className="gradient-text px-3 py-2 border rounded-full mx-auto w-[40vw] lg:w-[10vw] font-bold text-xl">Add Skill</button>
    </form>
    </div>
    </div>
    );
};

export default CreateSkill;