import React, { useState, useEffect } from 'react';
import { Message } from '../components/types/Messageinterface'; 

interface Props {
  messages: Message[];
}

 const MessagePage = ({ messages }: Props) => {

  return (
    <div className="flex flex-col h-full p-4">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>

      <div className="flex-1 overflow-y-auto">
        {messages.map(message => (
          <div key={message.id} className="bg-gray-100 p-4 mb-2 rounded">
            <h3 className="font-bold">{message.subject}</h3>
            <p>{message.body}</p>
            <p className="text-sm text-gray-600">
              Sent by {message.sender} on {message.date}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};
export default MessagePage;