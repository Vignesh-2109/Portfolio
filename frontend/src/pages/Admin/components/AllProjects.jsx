import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../../redux/slices/userSlice";
import { MdDelete, MdEdit } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { getSignature } from "../../../helpers/getSignature";
import { deleteImage } from "../../../helpers/deleteImage";
import { uploadImage } from "../../../helpers/uploadImage";

const AllProjects = () => {
  const [edit, setEdit] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newGithubUrl, setNewGithubUrl] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);

  const dispatch = useDispatch();
  const projects = useSelector((state) => state.user.projects);

  const getProjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/getProjects");
      const data = res.data.projects;
      dispatch(setProjects(data));
      console.log("Fetched Projects:", projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const deleteProject = async (id, public_id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      try {
        const signature = await getSignature(public_id);
        console.log("Signature generated while deleting", signature);
        
        await deleteImage(public_id, signature);
        const delProj = await axios.delete(`http://localhost:5000/api/removeProject/${id}`);
        const data = delProj.data;
        alert(data.message);
        getProjects();
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  const handleImg = (e) => {
    const file = e.target.files[0];
    setSelectedImg(file);
    console.log("Selected Image:", file);
  };

  const updateProject = async (id, public_id) => {
    setEdit(false);
    let uploadedImg;
    if (selectedImg) {
      uploadedImg = await uploadImage(selectedImg);
    }
    const myData = {
      name: newName,
      desc: newDesc,
      id: id,
      img: uploadedImg ? uploadedImg.secureUrl : null,
      public_id: uploadedImg ? uploadedImg.public_Id : null,
      deleteToken: uploadedImg ? uploadedImg.deleteToken : null,
      githuburl: newGithubUrl,
    };
    try {
      const res = await axios.put(`http://localhost:5000/api/updateProject/${id}`, myData);
      const data = res.data;
      alert(data.message);

      if (selectedImg) {
        const signature = await getSignature(public_id);
        await deleteImage(public_id, signature);
      }

      getProjects();
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 text-white lg:h-[80vh] mt-20">
      {projects.map((project) => (
        <div key={project._id} className="flex flex-col border-2 w-[80vw] lg:w-[40vw] rounded-lg
         px-2 py-2 gap-3 bg-black mt-20">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <img 
              src={project.img} 
              alt={project.name} 
              className={`w-fit h-[180px] lg:w-[200px] lg:h-auto ${edit && "hidden"}`}
            />
            <input
              type="file"
              name="img"
              id="img"
              accept="image/*" 
              onChange={handleImg}
              className={`${edit ? "block" : "hidden"}`}
            />
            <div className="flex flex-col gap-1">
              <h1 className={`text-xl lg:text-3xl ${edit && selectedProject === project._id && "bg-indigo-500 bg-opacity-30"}`}>
                {edit && selectedProject === project._id ? (
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={newName} 
                    className="w-full bg-transparent" 
                    onChange={(e) => setNewName(e.target.value)}
                  />
                ) : (
                  project.name
                )}
              </h1>
              <div>
                <label htmlFor="desc">Desc:</label>
                <h1 className={`text-sm lg:text-base text-gray-300 ${edit && selectedProject === project._id && "bg-indigo-500 bg-opacity-30"}`}>
                  {edit && selectedProject === project._id ? (
                    <input 
                      type="text" 
                      name="desc" 
                      id="desc" 
                      value={newDesc} 
                      className="w-full bg-transparent" 
                      onChange={(e) => setNewDesc(e.target.value)}
                    />
                  ) : (
                    project.desc
                  )}
                </h1>
              </div>
              <div>
                <label htmlFor="githubUrl">Github:</label>
                <h1 className={`text-sm lg:text-base text-gray-300 ${edit && selectedProject === project._id && "bg-indigo-500 bg-opacity-30"}`}>
                  {edit && selectedProject === project._id ? (
                    <input 
                      type="text" 
                      name="githubUrl" 
                      id="githubUrl" 
                      value={newGithubUrl} 
                      className="w-full bg-transparent" 
                      onChange={(e) => setNewGithubUrl(e.target.value)}
                    />
                  ) : (
                    project.githubUrl
                  )}
                </h1>
              </div>
              <div className="flex lg:flex-col justify-between items-center rounded-lg gap-3 px-3 lg:px-1 py-2 bg-indigo-500 bg-opacity-30">
                <MdEdit 
                  className={`text-lg hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500 ${edit && selectedProject === project._id ? "hidden" : "block"}`}
                  onClick={() => {
                    setEdit(true);
                    setSelectedProject(project._id);
                    setNewName(project.name);
                    setNewDesc(project.desc);
                    setNewGithubUrl(project.githubUrl);
                  }}
                />
                <TiTick 
                  className={`text-lg hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500 ${edit && selectedProject === project._id ? "block" : "hidden"}`}
                  onClick={() => updateProject(project._id, project.public_id)}
                />
                <MdDelete 
                  className="text-lg hover:scale-125 transition-all ease-in-out delay-100 cursor-pointer hover:text-red-500"
                  onClick={() => deleteProject(project._id, project.public_id)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
