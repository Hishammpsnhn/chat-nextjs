import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-indigo-500 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Page
        </h1>
        <p className="text-gray-600 mb-6">
          This is a simple page styled with Tailwind CSS. You can create
          beautiful and responsive designs easily!
        </p>
        <Link href='/chat' className="px-6 py-3 mx-1 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
          Chat
        </Link>
        <Link href='/vedio' className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
          Vedio
        </Link>
      </div>
    </div>
  );
}
