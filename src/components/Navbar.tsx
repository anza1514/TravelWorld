import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import TrueFocus from '../styling/button';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onLoginClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

  const destinations = [
    { name: 'Japan', path: '/destination/japan' },
    { name: 'Italy', path: '/destination/italy' },
    { name: 'France', path: '/destination/france' },
    { name: 'Switzerland', path: '/destination/switzerland' },
    { name: 'Greece', path: '/destination/greece' },
  ];

  return (
    <nav className={`fixed w-full z-50 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <motion.h1 
                className="text-2xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <TrueFocus />
              </motion.h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-semibold text-sx">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/reviews" className="hover:text-blue-500">Reviews</Link>
            <Link to="/about" className="hover:text-blue-500">About us</Link>
            <div className="relative">
              <button 
                className="flex items-center hover:text-blue-500"
                onMouseEnter={() => setIsDestinationsOpen(true)}
                onMouseLeave={() => setIsDestinationsOpen(false)}
              >
                Destinations
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isDestinationsOpen && (
                <div 
                  className="absolute top-full left-0 w-48 py-2 mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
                  onMouseEnter={() => setIsDestinationsOpen(true)}
                  onMouseLeave={() => setIsDestinationsOpen(false)}
                >
                  {destinations.map((destination) => (
                    <Link
                      key={destination.path}
                      to={destination.path}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600"
                    >
                      {destination.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="w-12 h-6 rounded-full bg-white-900 shadow-lg flex items-center transition duration-300 focus:outline-none shadow dark:bg-gray-800"
            >
              <div
                className={`w-6 h-6 relative rounded-full transition duration-500 transform p-1 text-white 
                  ${isDarkMode ? "bg-gray-600 translate-x-6" : "bg-yellow-400 -translate-x-1"}`}
              >
                {isDarkMode ? <Moon className="w-4 h-4 mx-auto" /> : <Sun className="w-4 h-4 mx-auto" />}
              </div>
            </button>
            
            <button 
              onClick={onLoginClick}
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
