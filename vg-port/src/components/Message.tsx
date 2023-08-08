  // @ts-nocheck
  // MessageComponent.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMessage } from '../Redux/Messages/Messageget';

const Message = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);

  const { status, messages } = useSelector((state) => state.message);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Failed to load messages.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table-auto bg-blue-500 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2 text-white">Name</th>
            <th className="px-4 py-2 text-white">Email</th>
            <th className="px-4 py-2 text-white">Content</th>
          </tr>
        </thead>
        <tbody>
          {messages && messages.length > 0 ? (
            messages.map((msg) => (
              <tr key={msg.id}>
                <td className="px-4 py-2 font-bold">{msg.fullName}</td>
                <td className="px-4 py-2 text-gray-500">{msg.email}</td>
                <td className="px-4 py-2">{msg.content}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No messages found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Message;
