import React from 'react';
import { motion } from 'framer-motion';

import Footer from '../components/Footer';


const Aboutus: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Your gateway to unforgettable travel experiences</p>
        </motion.div>
      </div>

      {/* Our Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          At our travel company, we are dedicated to making travel easy, enjoyable, and hassle-free. 
          We believe in creating unforgettable experiences that allow travelers to explore the world 
          with confidence and excitement.
        </p>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">Authenticity</h3>
              <p className="text-gray-700 mt-2">We ensure genuine experiences that connect travelers with cultures and destinations.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">Excellence</h3>
              <p className="text-gray-700 mt-2">From planning to execution, we prioritize quality and customer satisfaction.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-600">Sustainability</h3>
              <p className="text-gray-700 mt-2">We promote eco-friendly travel and respect for local communities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our passionate team consists of experienced travel enthusiasts who are committed to 
          helping you discover the best destinations and unique experiences.
        </p>
      </div>

      {/* Reviews Section */}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Aboutus;
