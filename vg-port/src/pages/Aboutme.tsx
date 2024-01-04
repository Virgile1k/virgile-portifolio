import { useState } from "react";
import {  useEffect } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import css from "../assets/ css.png";
import tailwind from "../assets/tailwind.png";
import html from "../assets/ html.png";
import redux from "../assets/ redux.png";
import node from "../assets/ nodejs.png";
import mongodb from "../assets/ mongo db.png";
import react from "../assets/ react.png";
import js from "../assets/js.png";
import ts from "../assets/ ts.png";
import git from "../assets/ gitico.jpeg";
import psql from "../assets/ psql.jpeg"; // Corrected import statement
import java from "../assets/ java.png";
import cpp from "../assets/ c++.png";
import sql from "../assets/ sql.webp";
import DownloadCVButton from "../components/downloadcv";
import myCV from "../assets/docs/_CV-VIRGILE.pdf";
import fig from "../assets/ figma.jpeg";
import Page from "../pages/Portifolio";
import Navbar from "../components/Navbar";

interface AboutProps { 
  title: string;
}

const About = ({ title }: AboutProps) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <CirclesWithBar
          height="100"
          width="100"
          color="#1b5a8b"
          outerCircleColor="#1b5a8b"
          barColor="#1b5a8b"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  return (
    <>
    
      <Navbar title="About" />
      <div className="bg-black text-white py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-blue-500 animate-pulse ">
             <span className="text-blue-500">{title}</span>
          </h1>

          <div className="md:flex">
            {/* Left side */}
            <div className="md:w-1/2 pr-8 mt-8">
              <h3 className="text-2xl mb-4 text-blue-500">Personal Infos</h3>
              <div>
                <p>
                  <strong>First Name:</strong> NDAYAMBAJE
                </p>
                <p>
                  <strong>Last Name:</strong> VIRGILE
                </p>
                <p>
                  <strong>Age:</strong> 21
                </p>
                <p>
                  <strong>Nationality:</strong> Rwandan
                </p>
                <p>
                  <strong>Freelance:</strong> Available
                </p>
                <p>
                  <strong>Address:</strong>Huye
                </p>
                <p>
                  <strong>Phone:</strong> +250782689127
                </p>
                <p>
                  <strong>Email:</strong> ndayambajevg16@gmail.com
                </p>
                <p>
                  <strong>Skype:</strong> Vg1k
                </p>
                <p>
                  <strong>Languages:</strong> English, Kinyarwanda,french,swahili
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 ">
                  <DownloadCVButton cvFile={myCV} />
                </button>
              </div>
            </div>

            {/* Right side */}
            <div className="md:w-1/2 mr-20   ">
              {/* Experience cards */}
              <HackathonsCard />
              <SuccessfulProjectsCard />
              <ProjectCard />
              <ExperienceCard />
            </div>
          </div>

          {/* Skills */}
          <center>
            <h2 className="text-blue-500 font-bold text-4xl animate-pulse ">My Skills</h2>
          </center>
          <div className="mt-10 ml-10 flex flex-wrap justify-center md:justify-start">
            <SkillIcon image={css} />
            <SkillIcon image={js} />
            <SkillIcon image={ts} />
            <SkillIcon image={html} />
            <SkillIcon image={tailwind} />
            <SkillIcon image={redux} />
            <SkillIcon image={node} />
            <SkillIcon image={mongodb} />
            <SkillIcon image={react} />
            <SkillIcon image={psql} />
            <SkillIcon image={git} />
            <SkillIcon image={java} />
            <SkillIcon image={cpp} />
            <SkillIcon image={sql} />
            <SkillIcon image={fig} />
          </div>

          {/* Experience */}
        </div>
        <Page/>
        <footer className="bg-black text-blue-500 text-center py-4">
        <p>&copy; {new Date().getFullYear()} Virgile2023. All rights reserved.</p>
      </footer>
      </div>
    </>
  );
};
const SkillIcon = ({ image }: { image: string }) => {
  return (
    <div className="bg-blue-500 p-4 rounded-full mx-4 my-2  ">
      <img
        src={image}
        alt="Skill"
        className="w-12 h-12 object-contain  "
      />
    </div>
  );
};

const ExperienceCard = () => {
  return (
    <div className="bg-blue-500 p-4 rounded-lg m-4 ">
      <h3 className="text-lg font-semibold mb-2 animate-pulse ">2+ years of experience</h3>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className="bg-yellow-500 p-4 rounded-lg m-4 ">
      <h3 className="text-lg font-semibold mb-2 animate-pulse ">12+ projects completed projects</h3>
    </div>
  );
};

const SuccessfulProjectsCard = () => {
  return (
    <div className="bg-green-500 p-4 rounded-lg m-4 animate-pulse  ">
      <h3 className="text-lg font-semibold mb-2">12+ successful projects</h3>
    </div>
  );
};

const HackathonsCard = () => {
  return (
    <div className="bg-red-500 p-4 rounded-l  g m-4 animate-pulse  ">
      <h3 className="text-lg font-semibold mb-2">12+ hackathons</h3>
    </div>
  );
};

export default About;
