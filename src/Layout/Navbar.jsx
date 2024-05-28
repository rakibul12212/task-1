import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex-shrink-0">
        <span className="text-white">Logo</span>
      </div>
      <div className="flex items-center">
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
          <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
          <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer"></label>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2">
          Sign Up
        </button>
      </div>
    </nav>
    );
};

export default Navbar;