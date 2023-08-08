import  { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-12">
        <div className="relative flex items-center justify-between h-16">
        <div className="flex items-center sm:hidden">
            <span className="text-blue-700 font-bold text-xl">Virgile</span>
          </div>
          <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start ml-40">
            <div className="flex items-center">
              <span className="hidden sm:block font-bold text-xl text-blue-600">{title}</span>
            </div>

            {/* Menu Icon for Mobile */}
            <div className="sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <MenuIcon />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:block sm:ml-12">
              <div className="flex space-x-20">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                {/* <Link
                  to="/BlogsPage"
                  className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </Link> */}
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/ContactUs"
                  className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
             
              <Link to="/about" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link to="/ContactUs" className="text-gray-300 hover:bg-blue-700  hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact Me
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
