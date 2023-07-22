import { useState } from "react";
import { useDispatch } from "react-redux";
import { postMessage } from "../Redux/Messages/Messagepost";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await dispatch(postMessage({ fullName: name, email: email, content: content }));
      setName("");
      setEmail("");
      setContent("");

    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar title="Contact Me"></Navbar>
      <center>
        <h2 className="text-2xl font-bold text-blue-500 mt-10">Contact</h2>
      </center>
      <div className="flex">
        <div className="w-1/3 px-10 bg-black mt-20">
          <a
            href="https://github.com"
            target="_blank"
            className="block mb-5 text-blue-500 hover:underline"
          >
            <GitHubIcon />Github
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="block mb-5 text-blue-500 hover:underline"
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

        <form
          onSubmit={handleSubmit}
          className="w-2/3 px-10 py-10 border-color-blue shadow-md rounded-md"
        >
          <div className="mb-5">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-md"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border border-gray-400 p-2 rounded-md h-48"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? <Loader /> : "Send Message"}
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;