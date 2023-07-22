import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/Dashcards";
import MonthlyStats from "../components/Monthlystat";
import RecentBlogs from "../components/RecentBlogs";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import MarkunreadIcon from '@mui/icons-material/Markunread';
// import UserManager from "../components/UserManager";

const DashboardPage = () => {
  const sidebarRoutes = [
    {
      icon: <DashboardIcon className="text-pink-50" />,
      name: 'Dashboard',
      path: '/DashboardPage'
    },
    {
      icon: <PostAddIcon className="text-pink-50" />,
      name: 'Add Blog post',
      path: '/BlogForm'
    },
    {
      icon: <PersonAddIcon className="text-pink-50" />,
      name: 'User Manager',
      path: '/fetchUsers'
    },
    {
      icon: <PeopleAltIcon className="text-pink-50" />,
      name: 'All blogs',
      path: '/Allblogs'
    },
    {
      icon: <MarkunreadIcon className="text-pink-50" />,
      name: 'Message',
      path: '/Message'
    },
    {
      icon: <PeopleAltIcon className="text-pink-50" />,
      name: 'Logout',
      path: '/'
    }
  ];

  return (
    <>
      <Sidebar routes={sidebarRoutes} />
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