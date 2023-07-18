import React, { useState } from "react";

interface CardProps {
  imgSrc: string;
  text: string;
  link: string;
}

const CardW: React.FC<CardProps> = ({ imgSrc, text, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`p-2 rounded shadow border-blue-500 border ${
        isHovered ? "transform scale-105" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imgSrc}
        alt="Work thumbnail"
        className={`w-full rounded transition-transform ${
          isHovered ? "scale-150" : ""
        }`}
      />
      <p className="mt-2 font-medium text-blue-500">{text}</p>
      <a href={link} className="inline-block mt-2 text-blue-600">
        View Project
      </a>
    </div>
  );
};

export default CardW;
