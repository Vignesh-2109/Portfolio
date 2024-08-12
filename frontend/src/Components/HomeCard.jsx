import React from "react";
import myImg from "../assets/1.jpg";

const HomeCard = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
      <div data-aos="fade-up-right" className="flex flex-col gap-5 lg:w-[50%]">
        <h1 className="text-5xl lg:text-7xl mb-10 gradient-text">Hey!</h1>
        <p className="text-gray-300 text-xl lg:text-2xl ">
        I'm Vignesh Maram, a final-year Computer Science student at ABV-IIITM, where I am deeply immersed in the fascinating world of technology and innovation. 
        </p>
        <p className="text-gray-300 text-xl lg:text-2xl ">
          I'm committed to furthering my skills and waiting to achieve new milestones in
          my career.
        </p>
      </div>
      <div data-aos="fade-up-left">
        <img
          src={myImg}
          alt="profile"
          className="rounded-full w-[100px] h-[100px] lg:w-[400px] lg:h-[400px] mx-auto"
        />
      </div>
    </div>
  );
};

export default HomeCard;