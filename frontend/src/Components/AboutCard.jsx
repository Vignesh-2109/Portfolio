import React from "react";

const AboutCard = () => {
  return (
    <div
      data-aos="zoom-in-left"
      className="flex flex-col lg:flex-row justify-between lg:items-center mb-20 lg:mb-36"
    >
      <span className="uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        Who am I
      </span>
      <p className="text-3xl lg:text-xl text-green-200 lg:w-[85%]">
      With a robust foundation in the MERN stack and a passion for competitive programming, I thrive on building dynamic and interactive web applications. My journey through university has been marked by continuous learning, hands-on projects, and a relentless pursuit of excellence in both coding and problem-solving.
In addition to my development skills, my experience in competitive programming has honed my ability to tackle complex algorithmic challenges and improve my problem-solving efficiency. I am committed to personal and professional growth, always eager to take on new challenges and achieve new milestones.
Let's connect and explore opportunities to create something amazing together!
      </p>
    </div>
  );
};

export default AboutCard;