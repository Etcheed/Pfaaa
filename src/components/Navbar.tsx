import { GraduationCap, Menu, X, Heart } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Stage PFA Maroc</span>
            <div className="hidden md:flex items-center ml-4 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>Made with love by Houji</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 transition">Process</a>
            <a href="#requirements" className="text-gray-700 hover:text-blue-600 transition">Requirements</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a>
            <a href="#companies" className="text-gray-700 hover:text-blue-600 transition">Companies</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <div className="flex items-center justify-center px-3 py-2 text-sm text-gray-600">
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>Made with love by Houji</span>
            </div>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Process</a>
            <a href="#requirements" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Requirements</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Projects</a>
            <a href="#companies" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Companies</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}