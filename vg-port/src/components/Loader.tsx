// Loader.jsx

const Loader = () => {
    return (
      <div className="fixed inset-0 z-10 flex items-center justify-center  ">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-700 ">
        </div>
      </div>
    );
  }
  
  export default Loader;