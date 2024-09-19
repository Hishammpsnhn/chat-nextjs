'use client';
import React, { useEffect, useState } from "react";
import { io,Socket } from "socket.io-client";

interface Message {
  text: string;
  sender: string;
}

function Group() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Establish the socket connection
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    // Listen for messages from the server
    newSocket.on('receiveMessage', (message) => {
      console.log(message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the connection when the component unmounts
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSend = () => {
    if (input.trim() && socket) {
      socket.emit('sendMessage', { text: input, sender: 'me' });
      setInput('');
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 p-2 rounded-lg ${msg.sender === 'me' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 bg-gray-100">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-l-lg"
            placeholder="Type a message..."
          />
          <button
             onClick={handleSend}
            className="p-2 bg-blue-500 text-white rounded-r-lg"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Group;
