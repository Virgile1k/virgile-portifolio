// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Redux/Features/User/Allusers";

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Failed to fetch users.</div>;
  }

  return (
    <div>
      <h1 className="bg-blue-500 p-4 text-white font-bold">User List</h1>
      <table className="border-collapse w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Full Name</th>
            <th className="p-2 border">Email</th>
           
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="bg-gray-100">
              <td className="p-2 border">{user.fullName}</td>
              <td className="p-2 border">{user.email}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
