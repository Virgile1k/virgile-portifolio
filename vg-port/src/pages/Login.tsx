import { useState } from "react";
import { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../components/Navbar";
import logo from "../assets/ logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/Features/User/loginSlice";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    setIsLoading(true);
  
    try {
      await dispatch(login({ email, password }) as any); // Using 'await' here
      navigate("/DashboardPage");
    } catch (err) {
      toast.error("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar title="Virgile" />

      <div className="bg-white-200 h-screen flex items-center ">
        <div className="max-w-md mx-auto bg-blue-500 p-8 shadow-lg">
          <ToastContainer />
          {isLoading && <Loader />}
          <center>
            {" "}
            <div className="mr-4 animate-pulse ">
              <img src={logo} alt="" />
            </div>
          </center>
          <h1 className="text-3xl font-bold text-pink-50 text-center mb-6">
            Login
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4 w-80">
              <label className="block text-pink-50 font-bold mb-2">Email</label>
              <input
                placeholder="Email"
                type="email"
                className="border rounded w-full py-2 px-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative mb-10 ">
              <label className="block text-pink-50 font-bold mb-2">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                className="border rounded w-full py-2 px-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-1 top-11 text-blue-500 "
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </span>
            </div>

            <div className="flex justify-center ">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg w-80"
              >
                Login
              </button>
            </div>
          </form>

          <Link to="/Signup" className="text-pink-50 ml-2">
            Have Account? Signup
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
