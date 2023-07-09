// // import React from 'react';

// // Removed unused imports
// // import css from "../assets/css.png";
// // import tailwind from "../assets/tailwind.png";
// // import html from "../assets/html.png";
// // import redux from "../assets/redux.png";
// // import node from "../assets/nodejs.png";
// // import mongodb from "../assets/mongodb.png";
// // import react from "../assets/react.png";
// // import psql from "../assets/html.png";

// interface AboutProps {
//   title: string;
// }

// const About = ({ title }: AboutProps) => {
//   return (
//     <div className="bg-black text-white py-10">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold mb-10">
//           About <span className="text-yellow-500">{title}</span>
//         </h1>
//         <div className="md:flex">
//           {/* Left side */}
//           <div className="md:w-1/2 pr-8">
//             <h3 className="text-2xl mb-4">Personal Infos</h3>
//             <div>
//               <p>
//                 <strong>First Name:</strong> NDAYAMBAJE
//               </p>
//               <p>
//                 <strong>Last Name:</strong> VIRGILE
//               </p>
//               <p>
//                 <strong>Age:</strong> 21
//               </p>
//               <p>
//                 <strong>Nationality:</strong> Rwandan
//               </p>
//               <p>
//                 <strong>Freelance:</strong> Available
//               </p>
//               <p>
//                 <strong>Address:</strong>Huye
//               </p>
//               <p>
//                 <strong>Phone:</strong> +250782689127
//               </p>
//               <p>
//                 <strong>Email:</strong>ndayambajevg16@gmail.com
//               </p>
//               <p>
//                 <strong>Skype:</strong> @johndoe
//               </p>
//               <p>
//                 <strong>Languages:</strong> English, Spanish
//               </p>
//             </div>
//           </div>

//           {/* Right side */}
//           <div className="md:w-1/2">
//             {/* Experience cards */}
//             <ExperienceCard />
//             <ExperienceCard />
//             <ExperienceCard />
//             <ExperienceCard />
//           </div>
//         </div>

//         {/* Skills */}
//         <div className="mt-10 flex flex-wrap justify-center md:justify-start">
//           <SkillIcon image="typescript.png" />
//           <SkillIcon image="html.png" />
//           <SkillIcon image="css.png" />
//           <SkillIcon image="sass.png" />
//           <SkillIcon image="mongodb.png" />
//           <SkillIcon image="nodejs.png" />
//           <SkillIcon image="figma.png" />
//         </div>

//         {/* Experience */}
//         <div className="mt-20">
//           <h2 className="text-3xl mb-10">Experience</h2>
//           {/* Experience content */}
//         </div>
//       </div>
//     </div>
//   );
// };

// const SkillIcon = ({ image }: { image: string }) => {
//   return (
//     <div className="bg-gray-800 p-4 rounded-full mx-4 my-2">
//       <img src={`/${image}`} alt="Skill" className="w-12 h-12 object-contain" />
//     </div>
//   );
// };

// const ExperienceCard = () => {
//   return (
//     <div className="bg-yellow-500 p-4 rounded-lg m-4">
//       {/* Card content */}
//     </div>
//   );
// };

// export default About;
