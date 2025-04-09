import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DestinationPage from './pages/DestinationPage';
import Reviews from './pages/Reviews';
import LoginModal from './components/LoginModal';
import About from "./pages/About";
import ReactGA from 'react-ga';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Initialize Google Analytics
  useEffect(() => {
    ReactGA.initialize('G-4LDY95G1BR'); // Replace with your Google Analytics tracking ID
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  // Track page views on route change
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : ''}>
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
          <Navbar 
            isDarkMode={isDarkMode} 
            toggleDarkMode={toggleDarkMode} 
            onLoginClick={() => setIsLoginOpen(true)}
          />
          <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination/:country" element={<DestinationPage />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
