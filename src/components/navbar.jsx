import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold text-white cursor-pointer">
            Voice-To-Code
          </span>
        </Link>
        <div className="space-x-4">
          <Link href="/">
            <span className="hover:text-gray-300 cursor-pointer">Home</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-gray-300 cursor-pointer">About</span>
          </Link>
          <Link href="/docs">
            <span className="hover:text-gray-300 cursor-pointer">Docs</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
