import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-4 flex text-gray-300 items-center justify-center">
      <div className=" flex items-center justify-center flex-col">
        <div className="flex justify-center items-center  ">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
        <p>&copy; 2023 nareshwebdev.netlify.app</p>
      </div>
    </div>
  );
};

export default Footer;
