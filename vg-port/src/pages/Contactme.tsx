import { FaEnvelope, FaPhoneAlt,FaPaperPlane } from "react-icons/fa";
import { BsFacebook, BsLinkedin,BsGithub} from "react-icons/bs";
import Navbar from "../components/Navbar";

export default function ContactUs() {
  return (
    <>
      <Navbar title="Virgile" />
     <center>  <h2 className="text-2xl font-bold mb-4  text-blue-500 mt-6">
            Contact Me
          </h2></center>
      <div className="flex flex-col md:flex-row mt-20 rounded-gl border-2 border-blue-500">
        <div className="basis-1/3 p-8 rounded-gl border-r-2 border-blue-500">
          <h2 className="text-2xl font-bold mb-4  text-white">
            Get in Touch
          </h2>

          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2 text-white" />
            <div>
              <h3 className="font-medium  text-white">Mail Me</h3>
              <p className="text-blue-600">hello@example.com</p>
            </div>
          </div>

          <div className="flex items-center mb-4">
            <FaPhoneAlt className="mr-2 text-blue-500" />
            <div>
              <h3 className="font-medium  text-white">Call Me</h3>
              <p className="text-blue-600 text-blue-500">+1 234 567 8910</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4  text-white mr-80">
            <BsFacebook size={32} />
            <BsGithub size={32} />
            <BsLinkedin size={32} />
          </div>
        </div>

        <div className="basis-2/3 p-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-500">
            Send a Message
          </h2>

          <form>
            <div className="mb-4 flex">
              <div className="mr-2 w-1/3">
                <label className="block font-medium text-sm text-blue-500">
                  Subject
                </label>
                <input type="text" className="border p-2 w-full rounded-gl border-2 border-blue-500 text-white bg-black" />
              </div>
              <div className="mr-2 w-1/3">
                <label className="block font-medium text-sm text-blue-500 ">
                  Email
                </label>
                <input type="email" className="border p-2 w-full rounded-gl border-2 border-blue-500 bg-black text-white" />
              </div>
              <div className="w-1/3">
                <label className="block font-medium text-sm text-blue-500">
                  Name
                </label>
                <input type="text" className="border p-2 w-full rounded-gl border-2 border-blue-500 bg-black text-white" />
              </div>
            </div>

            <div className="mb-4">
              <label className="block font-medium text-blue ">Message</label>
              <textarea rows={4} className="border p-2 w-full rounded-gl border-2 border-blue-500 bg-black text-white" />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
            >
              <FaPaperPlane className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
