interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({title}) => {
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-12 bg-black">
        <div className="relative flex items-center justify-between h-16">

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-20"> {/* Updated spacing here */}

                {/* Nav links */}
                <span className="font-bold text-xl text-blue-600">{title}</span>
                <a href="/" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                
                <a href="/blogsPage" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</a>
                
                <a href="/login" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a>
                
                <a href="/about" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                
                <a href="/DashboardPage" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
                <a href="/ContactUs" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact us</a>

              </div>
            </div>
          </div>

          
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
