import Link from "next/link";
import React from "react";

function Chat() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Chat</h1>
        <p className="text-gray-600">Select either personal or group chat to start chatting!</p>
      </div>
      <div className="flex space-x-4">
        <Link
          href="/chat/group"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Group Chat
        </Link>
        <Link
          href="/chat/personal"
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg shadow-lg hover:from-teal-500 hover:to-green-500 transform hover:scale-105 transition duration-300 ease-in-out"
        >
          Personal Chat
        </Link>
      </div>
    </div>
  );
}

export default Chat;
