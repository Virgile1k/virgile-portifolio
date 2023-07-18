import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/Dashcards";
import MonthlyStats from "../components/Monthlystat";
import RecentBlogs from "../components/RecentBlogs";
// import UserManager from "../components/UserManager";

const DashboardPage = () => {
  return (
    <>
      <Sidebar
        routes={
          [
            { name: 'Dashboard', path: '/' },
            {name :'Add Blog post',path:'/BlogForm'},
            {name :'User Manager',path:'/UserManager'},
            {name:'Message',path:'/MessagePage'}
          ]
        }
      />
      <div className="ml-64 p-4">
      
      <DashboardCards />
      
      <div className="grid grid-cols-2 gap-4">
      
        <div>
          <MonthlyStats />
        </div>
      
        <div>
          <RecentBlogs />
        </div>
      
      </div>
      
    </div>
    </>
  );
};
export default DashboardPage;