// import React from "react";
// import ProjectCard from "./ProjectCard";
// import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
// import { useRef } from "react";

// const ProjectSection = () => {
//   const scrollRef = useRef(null);

//   const hScrollRight = () => {
//     scrollRef.current.scrollLeft += 500;
//   };

//   const hScrollLeft = () => {
//     scrollRef.current.scrollLeft -= 500;
//   };
//   return (
//     <div data-aos="fade-down" className="mb-20 lg:mb-36">
//       <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Projects</h1>
//       <div
//         ref={scrollRef}
//         className="flex overflow-x-scroll gap-8 lg:p-3 scroll-hide"
//       >
//         <ProjectCard />
//         <ProjectCard />
//         <ProjectCard />
//         <ProjectCard />
//         <ProjectCard />
//       </div>
//       <div className="flex justify-center items-center gap-3 mt-2 select-none">
//         <HiArrowSmLeft
//           onClick={hScrollLeft}
//           className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block"
//         />
//         <h2 className="gradient-text font-mono text-lg uppercase">
//           Slide for more
//         </h2>
//         <HiArrowSmRight
//           onClick={hScrollRight}
//           className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block"
//         />
//       </div>
//     </div>
//   );
// };

// export default ProjectSection;

import React from "react";
import ProjectCard from "./ProjectCard";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { useRef } from "react";


const projects = [
  {
    imgSrc: "/vcw.jpg",
    title: "Video Chatting Website",
    description: "Built a real-time video chat application,implemented a Node.js and Socket.io versatile signalling server and improved ICE traversal and dynamic bandwidth allocation. ",
    githubLink: "https://github.com/Vignesh-2109/Video_Chatting_Website",
    liveLink: "https://project-one.com"
  },
  {
    imgSrc: "/cb.png",
    title: "Cyberbullying Detection",
    description: "Developed a robust Cyberbullying Detection model using NLP,Glove Embeddings and Deep Learning and also deployed best performing model into a website built using React and Flask.",
    githubLink: "https://github.com/Vignesh-2109/Cyberbullying-detection",
    liveLink: "https://project-one.com"
  },
  {
    imgSrc: "/ls.png",
    title: "Live Streaming Website",
    description: "Developed LiveCast Pro, a live streaming app enabling user registration, login, and live stream creation,engineered video feed merging with overlays, streaming directly to YouTube using FFmpeg.",
    githubLink: "https://github.com/Vignesh-2109/Live-Streaming-Website",
    liveLink: "https://project-two.com"
  },
  {
    imgSrc: "/vcs.jpeg",
    title: "Visitor Checking System",
    description: "Devised model by employing advanced one-shot learning techniques,converted faces into embeddings and crafted a web application that supports real-time face authentication.",
    githubLink: "https://github.com/Vignesh-2109/Visitor-Checking-System",
    liveLink: "https://project-three.com"
  },
  {
    imgSrc: "/bs.png",
    title: "Booklist",
    description: "A full-stack web application built using the MERN stack. Allows users to manage a collection of books with functionalities to add, delete, edit, and update book details.Two views as Table View and Card View.",
    githubLink: "https://github.com/Vignesh-2109/BookList",
    liveLink: "https://project-four.com"
  },
  {
    imgSrc: "/si.png",
    title: "Smart Irrigation System",
    description: "A Smart Irrigation System has been developed utilizing NodeMCU,leveraged Edge Computing concepts and used various ML algorithms to predict the time of irrigation.",
    githubLink: "https://github.com/Vignesh-2109/Smart-Irrigation-system",
    liveLink: "https://project-five.com"
  },
  {
    imgSrc: "/army.jpeg",
    title: "Army Database",
    description: "Engineered a comprehensive database management system,adept at handling diverse information related to personnel, equipment etc. and dealt with SQL and Relational Algebra Expressions. ",
    githubLink: "https://github.com/Vignesh-2109/Army-Database-Management-System",
    liveLink: "https://project-five.com"
  },
  {
    imgSrc: "/td.jpg",
    title: "Telephone Directory",
    description: "Developed a telephone directory management system using C++ and OOPs concepts,designed classes to store and manage contact information, name, number, and address. ",
    githubLink: "https://github.com/Vignesh-2109/Telephone_directory",
    liveLink: "https://project-five.com"
  }
];

const ProjectSection = () => {
  const scrollRef = useRef(null);

  const hScrollRight = () => {
    scrollRef.current.scrollLeft += 500;
  };

  const hScrollLeft = () => {
    scrollRef.current.scrollLeft -= 500;
  };

  return (
    <div data-aos="fade-down" className="mb-20 lg:mb-36">
      <h1 className="text-5xl lg:text-7xl gradient-text mb-10">My Projects</h1>
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll gap-8 lg:p-3 scroll-hide"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 mt-2 select-none">
        <HiArrowSmLeft
          onClick={hScrollLeft}
          className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block"
        />
        <h2 className="gradient-text font-mono text-lg uppercase">
          Slide for more
        </h2>
        <HiArrowSmRight
          onClick={hScrollRight}
          className="text-xl lg:text-2xl cursor-pointer text-yellow-500 hidden lg:block"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
