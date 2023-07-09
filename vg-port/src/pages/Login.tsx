// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import Navbar from "../components/Navbar";
// import logo from "../assets/ logo.svg";

// interface LoginProps {
//   onLogin: (email: string, password: string) => void;
// }

// const Login: React.FC<LoginProps> = ({ onLogin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onLogin(email, password);
//     // Handle login logic here
//     console.log("Login:", email, password);
//   };

//   return (
//     <>
//       <Navbar title="Virgile" />

//       <div className="bg-white-200 h-screen flex items-center bg-black">
//         <div className="max-w-md mx-auto bg-blue-500 p-8 shadow-lg h-50 l-60">
//           <div className="mr-4">
//             <img src={logo} alt="" />
//           </div>

//           <h1 className="text-3xl font-bold text-pink-50 text-center mb-6">
//             Login
//           </h1>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4 w-80">
//               <label className="block text-pink-50 font-bold mb-2">Email</label>
//               <input
//                 placeholder="Email"
//                 type="email"
//                 className="border rounded w-full py-2 px-3"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="relative mb-10">
//               <label className="block text-pink-50 font-bold mb-2">Password</label>

//               <input
//                 type={showPassword ? "text" : "password"}
//                 className="border rounded w-full py-2 px-3"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <span>
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-1 top-11 text-blue-500"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//               </span>
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg w-80"
//               >
//                 Login
//               </button>
//             </div>
//           </form>

//           <a href="/Signup" className="text-pink-50 ml-2">
//             Register
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
