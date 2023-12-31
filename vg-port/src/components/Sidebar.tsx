import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  routes: {
    name: string;
    path: string;
    icon?: JSX.Element; // Define the type for the icon prop (optional)
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ routes }) => {
  return (
    <div className="h-full fixed inset-y-0 left-0 w-64 bg-blue-900">
      <div className="px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {routes.map(route => (
            <li key={route.name}>
              <Link
                to={route.path}
                className="flex items-center p-2 text-base font-normal text-white rounded-lg bg-blue-500 hover:bg-blue-700"
              >
                {route.icon && <span className="mr-2">{route.icon}</span>} {/* Display the icon if available */}
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
