import { useState, useEffect } from "react";
import profileImage from "../assets/vg.jpeg";
import Navbar from "../components/Navbar";
import { CirclesWithBar } from "react-loader-spinner";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      <Navbar title="Virgile" />

      <ActualContent profileImage={profileImage} />

      <footer className="bg-black text-blue-500 text-center py-2">
        <p>
          &copy; {new Date().getFullYear()} Virgile2023. All rights reserved.
        </p>
      </footer>
    </>
  );
};

const ActualContent = ({ profileImage }: { profileImage: string }) => {
  return (
    <section className="bg-black relative overflow-hidden">
    <div className="flex flex-col  h-full lg:flex-row items-center container mx-auto px-5 py-2 lg:py-8 border-2 border-blue-500 rounded-md">
      <div className="lg:w-1/3 mb-6 lg:mb-0 lg:mr-6">
        <div className="bg-white-500 rounded-lg overflow-hidden  border-2 border-blue-500">
            <img
              className="w-full  object-cover"
              src={profileImage}
              alt="Profile picture"
            />
          </div>
        </div>

        <div className="lg:w-2/4 ">
          <h1 className="text-4xl lg:text-4xl font-bold font-heading mt-2 text-center lg:text-left text-blue-500">
            I'm Virgile Ndayambaje{" "}
            <span className="block lg:inline-block text-zinc-300">Full stack Engineer</span>
          </h1>

          <p className="text-zinc-300 leading-relaxed p-6 lg:p-0 text-lg font-medium text-left lg:text-left">
            I am a seasoned full-stack engineer with expertise in web design and
            front-end development. My primary focus is on creating polished and
            user-friendly experiences. I am dedicated to the art of crafting
            exceptional software solutions that not only meet but exceed the
            needs of users, thereby enhancing their daily lives. My passion lies
            in the seamless integration of both front-end and back-end
            technologies to deliver comprehensive and innovative solutions
            across the entire software stack.
          </p>

          <button className="text-center lg:text-left">
            <Link
              to="/about"
              className="bg-blue-500 ml-4 mt-6 px-8 py-3 mt-2 inline-block text-white font-semibold rounded-lg"
            >
              More About Me
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
