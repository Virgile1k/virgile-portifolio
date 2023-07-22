 
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../Redux/Features/signup/signup";
import Navbar from "../components/Navbar"; 
import logo from "../assets/ logo.svg";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";

function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // added loading state

  const dispatch = useDispatch();

  const handleFormReset = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
  };

  const handleSubmit = () => {
    setLoading(true); // set loading to true
    dispatch(signupUser({ fullName, email, password, repeatPassword }))
      .then(() => {
        setLoading(false); // set loading to false after dispatch
        handleFormReset(); // clear form after successful submission
      })
      .catch((error) => {
        setLoading(false); // set loading to false after dispatch
        // Handle any error, e.g., display an error message to the user
      });
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <>
      <Navbar title="virgile" />
      <ToastContainer/>

      <div className="bg-black-500 p-10 flex justify-center items-center  ">
        <div className="max-w-md mx-auto bg-blue-500 p-8 shadow-lg w-96">
          <center>
            <div className="animate-pulse">
              <img src={logo} alt="" />
            </div>
          </center>

          <center>
            <h1 className="font-medium text-pink-50 mb-6">Sign Up</h1>
          </center>

          <div className="my-5">
            <label className="block text-pink-50">Full Name</label>
            <input
              className="border p-5 w-full h-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="block text-pink-50">Email</label>
            <input
              className="border p-5 w-full h-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="my-5 relative">
            <label className="block text-pink-50">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="border p-5 w-full h-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="absolute right-5 top-10 text-xl"
              onClick={handlePasswordVisibility}
            >
              {showPassword ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>

          <div className="my-5">
            <label className="block text-pink-50">Repeat Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="border p-5 w-full h-2"
              value={repeatPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg w-80"
            onClick={handleSubmit}
          >
            {loading ? <Loader /> : "Sign Up"}
          </button>

          <a href="/Login" className="text-pink-50 text-lg ml-2">
            Have Account? Login
          </a>
        </div>
      </div>
    </>
  );
}

export default SignupPage;