// import React from "react";
// import SkillsCard from "./SkillsCard";


// const SkillsSection = () => {
//   return (
//     <div data-aos="fade-right" className="mb-20 lg:mb-36">
//       <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Skills</h1>
//       <div className="h-[300px] overflow-y-scroll select-none scroll-bar">
//         <SkillsCard title={"ReactJs"}  />
//         <SkillsCard title={"NextJs"}  />
//         <SkillsCard title={"Tailwind css"}  />
//         <SkillsCard title={"NodeJs"}  />
//         <SkillsCard title={"MongoDB"} />
//       </div>
      
//     </div>
//   );
// };

// export default SkillsSection;
import React from "react";
import SkillsCard from "./SkillsCard";

const SkillsSection = () => {
  return (
    <div className="mb-20 lg:mb-36">
    <div data-aos="fade-right">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Skills</h1>
    </div>
    
    <div className="mb-10">
      <div data-aos="fade-right">
        <h2 className="text-4xl lg:text-6xl gradient-text mb-5">Technical Skills</h2>
      </div>

        <div data-aos="fade-right" className="mb-10">
          <h3 className="text-3xl lg:text-5xl mb-5 text-cyan-200">Languages</h3>
          <div className="h-[150px] overflow-y-scroll select-none scroll-bar">
            <SkillsCard title={"C/C++"} />
            <SkillsCard title={"Python"} />
            <SkillsCard title={"SQL"} />
            <SkillsCard title={"Javascript"} />
          </div>
        </div>
        
        <div data-aos="fade-left" className="mb-10">
          <h3 className="text-3xl lg:text-5xl mb-5 text-cyan-200">Development</h3>
          <div className="h-[150px] overflow-y-scroll select-none scroll-bar">
            <SkillsCard title={"HTML"} />
            <SkillsCard title={"CSS"} />
            <SkillsCard title={"React.js"} />
            <SkillsCard title={"Express.js"} />
            <SkillsCard title={"Node.js"} />
            <SkillsCard title={"NextJS"} />
            <SkillsCard title={"Tailwind CSS"} />
            <SkillsCard title={"TensorFlow"} />
            <SkillsCard title={"Bootstrap"} />
            <SkillsCard title={"Flask"} />
          </div>
        </div>

        <div data-aos="fade-right" className="mb-10">
          <h3 className="text-3xl lg:text-5xl mb-5 text-cyan-200">Soft Skills</h3>
          <div className="h-[150px] overflow-y-scroll select-none scroll-bar">
            <SkillsCard title={"Communication"} />
            <SkillsCard title={"Adaptability"} />
            <SkillsCard title={"Leadership"} />
            <SkillsCard title={"Teamwork"} />
            <SkillsCard title={"Time Management"} />
          </div>
        </div>
        
        <div data-aos="fade-left" className="mb-10">
          <h3 className="text-3xl lg:text-5xl mb-5 text-cyan-200">Developer Tools</h3>
          <div className="h-[150px] overflow-y-scroll select-none scroll-bar">
            <SkillsCard title={"Git"} />
            <SkillsCard title={"Github"} />
            <SkillsCard title={"VS Code"} />
            <SkillsCard title={"Jupyter Notebook"} />
            <SkillsCard title={"Latex"} />
          </div>
        </div>
        
        <div data-aos="fade-right" className="mb-10">
          <h3 className="text-3xl lg:text-5xl mb-5 text-cyan-200">Databases</h3>
          <div className="h-[150px] overflow-y-scroll select-none scroll-bar">
            <SkillsCard title={"MongoDB"} />
            <SkillsCard title={"Firebase"} />
          </div>
        </div>
        
        <div data-aos="fade-left" className="mb-10">
          <h3 className="text-3xl lg:text-5xl mb-5 text-cyan-200">Concepts</h3>
          <div className="h-[150px] overflow-y-scroll select-none scroll-bar">
            <SkillsCard title={"Object Oriented Programming"} />
            <SkillsCard title={"Operating Systems"} />
            <SkillsCard title={"Data Structures"} />
            <SkillsCard title={"Analysis and Design of Algorithms"} />
            <SkillsCard title={"Computer Networks"} />
            <SkillsCard title={"Database Management Systems"} />
            <SkillsCard title={"Software Engineering"} />
            <SkillsCard title={"Compiler Design"} />
            <SkillsCard title={"Image Processing"} />
            <SkillsCard title={"Machine Learning"} />
            <SkillsCard title={"Data Science"} />
            <SkillsCard title={"Artificial Intelligence"} />
          </div>
        </div>
        
        <div data-aos="fade-right" className="mb-10">
          <h3 className="text-3xl lg:text-5xl mb-5 text-cyan-200">Operating Systems</h3>
          <div className="h-[150px] overflow-y-scroll select-none scroll-bar">
            <SkillsCard title={"Windows"} />
            <SkillsCard title={"Linux"} />
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default SkillsSection;
