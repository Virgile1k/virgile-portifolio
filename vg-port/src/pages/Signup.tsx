import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import logo from "../assets/ logo.svg";
import Navbar from "../components/Navbar"; 

interface SignupProps {
  onSignup: (name: string, email: string, password: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === confirmPassword) {
      onSignup(name, email, password);
    }
  };

  return (
    <>
      <Navbar title="Virgile" />

      <div className="bg-white-200 h-screen flex items-center bg-black">
        <div className="max-w-md mx-auto bg-blue-500 p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-pink-50 text-center mb-6">
            <div className="mr-4">
              <img src={logo} alt="" />
            </div>
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>

            {/* Name input */}
            <div className="mb-4">
              <label className="block text-pink-50 font-bold mb-2">
                Name
              </label>
              <input 
                type="text"
                className="border rounded w-full py-2 px-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email input */}
            <div className="mb-4 text-pink-50">
              <label className="block text-pink-50 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="border rounded w-full py-2 px-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}  
              />
            </div>

            {/* Password input */}
            <div className="mb-4 text-pink-50 relative">
              <label className="block text-pink-50 font-bold mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="border rounded w-full py-2 px-3 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-8 mt-3 mr-1  text-blue-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirm password input */}
            <div className="mb-10 text-pink-50">
              <label className="block text-pink-50 font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="border rounded w-full py-2 px-3"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {/* Submit button */}
            <div className="flex justify-center">
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-80"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Login link */}
          <a href="/login" className="text-pink-50 ml-2">
            Login
          </a>
        </div>
      </div>
    </>
  );
};

export default Signup;