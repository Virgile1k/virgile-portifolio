/* eslint-disable */
import { useState } from "react";
import {  useEffect } from "react";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { CirclesWithBar } from "react-loader-spinner";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { postMessage } from "../Redux/Messages/Messagepost";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isLoadingg, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      dispatch(
        postMessage({ fullName: name, email: email, content: content }) as any
      );
      setName("");
      setEmail("");
      setContent("");
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };
  if (isLoadingg) {
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
      <Navbar title="Contact Me"></Navbar>
      <h2 className="text-2xl font-bold text-blue-500 mt-6 flex flex-col items-center">
        Contact Me
      </h2>

      <div className="flex flex-col items-center mt-12">
        <div className="flex  text-blue-500  ">
          <form
            onSubmit={handleSubmit}
            className="w-96 px-10 py-5 border shadow-2xl rounded-md  border-2 border-blue-500  "
          >
            <div className="mb-5">
              <label className="block text-blue font-bold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-400 p-2 rounded-md"
              />
            </div>

            <div className="mb-5">
              <label className="block text-blue font-bold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-400 p-2 rounded-md"
              />
            </div>

            <div className="mb-5">
              <label className="block text-blue font-bold mb-2">Message</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border border-gray-400 p-2 rounded-md h-48"
              />
            </div>
            <div className="flex ">
              <a
                href="https://github.com/Virgile1k"
                target="_blank"
                className="block mb-5 text-blue-500 hover:white mr-2"
              >
                <GitHubIcon />
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/ndayambaje-virgile-9b15a0229"
                target="_blank"
                className="block mb-5 text-blue-500 hover:white mr-2"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="block mb-5 text-blue-500 hover:underline"
              >
                <YouTubeIcon />
                YouTube
              </a>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              disabled={isLoading}
            >
              {isLoading ? <Loader /> : "Send Message"}
            </button>
            <ToastContainer />
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
