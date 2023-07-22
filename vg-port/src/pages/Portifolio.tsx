
// import { Link } from 'react-router-dom';
import CardW from '../components/MywCard';
import image1 from '../assets/ proj1.png';
import quiz from "../assets/quizapp.png";
import portifolio from "../assets/ portifolio.png";
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
    text: "Ecommerce Backend",
    link: "https://github.com/atlp-rwanda/e-comm-team-techtitans-bn",
  },
  {
    imgSrc: quiz,
    text: "QuizApp",
    link: "https://github.com/Virgile1k/quiz-app-vg",
  },
  {
    imgSrc: portifolio,
    text: "My Portifolio",
    link: "shorturl.at/mnrN0",
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
