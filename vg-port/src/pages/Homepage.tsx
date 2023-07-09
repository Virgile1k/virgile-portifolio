import profileImage from "../assets/ EW2.jpeg";
import Navbar from "../components/Navbar";
// import {  TailSpin} from 'react-loading-icons';
// import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaRss } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <Navbar title="Virgile" />
      <section className="bg-black relative">
        {/* <div className="absolute right-0 top-0 mr-38 mt-40 flex flex-col items-center space-y-5 my-12 lg:w-80">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white text-2xl mt-5 hover:bg-blue-60 ">
            <FaHome />
          </div>

          <div className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-blue-600 flex items-center justify-center text-white text-2xl">
            <FaUser />
          </div>

          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white text-2xl">
            <FaBriefcase />
          </div>

          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white text-2xl">
            <FaEnvelope />
          </div>

          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white text-2xl">
            <FaRss />
          </div>
        </div> */}
        <div className="relative flex lg:flex-row items-center container mx-auto px-5 py-24 lg:py-32 border-2 border-blue-500 ">
          <div className="lg:w-140">
            <div className="bg-white-500 rounded-lg overflow-hidden w-64 h-96 border-2 border-blue-500">
              <img
                className="w-full h-full object-cover"
                src={profileImage}
                alt="Profile picture"
              />
            </div>
          </div>

          <div className="lg:w-1/2 lg:pl-16 lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold font-heading mt-6 lg:mt-0 text-blue-500">
              I'm Virgile Ndayambaje{" "}
              <span className="text-zinc-300">Full stack Engineer</span>
            </h1>

            <p className="text-zinc-300 leading-relaxed mt-4 text-lg">
              I'm a web designer & front‐end developer focused on crafting clean
              & user‐friendly experiences, I am passionate about building
              excellent software that improves the lives of those around me.
            </p>

           <button>
           <a
              href="about"
              className="bg-blue-500 px-8 py-3 mt-8 inline-block text-white font-semibold rounded-lg"
            >
              More About Me
            </a>
           </button>
           
          </div>
        </div>
      </section>
      <footer className="bg-black text-blue-500 text-center py-4">
        <p>&copy; {new Date().getFullYear()} Virgile2023. All rights reserved.</p>
      </footer>
    </>
    
  );
};

export default HomePage;
