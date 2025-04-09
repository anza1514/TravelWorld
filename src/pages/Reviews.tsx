import React from 'react';
import { motion } from 'framer-motion';
import ReviewsComponent from '../components/Reviews';
import Footer from '../components/Footer';



const Reviews: React.FC = () => {
  return (
    <div className="pt-16">
      <div className="bg-blue-600 text-white py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">What Our Travelers Say</h1>
          <p className="text-xl">Real experiences from real adventurers</p>
        </motion.div>
      </div>
      <ReviewsComponent />
      <Footer />
    </div>
  );
};

export default Reviews;