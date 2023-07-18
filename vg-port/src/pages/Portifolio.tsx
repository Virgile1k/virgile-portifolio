
// import { Link } from 'react-router-dom';
import CardW from '../components/MywCard';
import image1 from '../assets/ proj1.png';
//  import node1 from '../assets/ nodejs.png';
// import Navbar from '../components/Navbar';

const cardsData = [
  {
    imgSrc: image1,
    text: "Ecommerce Project Fn",
    link: "https://tech-titans.techsroutine.com/",
  },
  {
    imgSrc: image1,
    text: "Project 1",
    link: "/project-1",
  },
  {
    imgSrc: image1,
    text: "Project 1",
    link: "/project-1",
  },
  {
    imgSrc: image1,
    text: "Project 1",
    link: "/project-1",
  },
 
 
 
];

const Page = () => {

  return (
  
  
    <main className="p-8 max-w-6xl mx-auto">
<center>      <h1 className="text-4xl font-bold mb-8  text-blue-500">My Work</h1></center>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData.map(data => (
          <CardW {...data} />  
        ))}
      </div>

    </main>
    
  );
}

export default Page;
