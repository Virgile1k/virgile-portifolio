import { useState } from 'react';

interface User {
  name: string;
  email: string;
  Role:string;
}

function UserManager() {
  const [users, setUsers] = useState<User[]>([
    { name: 'John Doe', email: 'john@email.com',Role:"vgk" },
    { name: 'Jane Doe', email: 'jane@email.com', Role:"vgk1"},
  ]);

  function deleteUser(email: string) {
    setUsers(users.filter(user => user.email !== email));
  }

  return (
    <div className="flex flex-col">
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">User ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Last Login</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{user.name}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.Role}</td>
              <td className="py-2 px-4 border-b">{/* User Status */}</td>
              <td className="py-2 px-4 border-b">{/* Last Login Date */}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-red-500 text-white p-2 rounded"
                  onClick={() => deleteUser(user.email)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManager;
