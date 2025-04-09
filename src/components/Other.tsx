import React from 'react';
import Calender from '../styling/Calender';
import { motion } from "framer-motion";

const Other: React.FC = () => {
  return (
    <motion.div  
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 1 }}
      className="flex flex-col items-center min-h-screen text-center bg-gray-100" 
    >
      <h2 className="text-2xl font-bold -mb-8 pt-8">What We Achieved</h2>
      
      <div className="flex w-full justify-center gap-4">
        <div>
          <Calender/>
        </div>

        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="ml-2 mx-auto max-w-screen-xl md:px-12 lg:px-16 lg:py-40"
        >
          <div className="grid border divide-y hover:bg-gray-100 rounded-xl lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x bg-white dark:bg-gray-800 shadow-lg">
            <div className="flex flex-col justify-between p-8">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-300">Total Destinations</p>
              <p className="text-3xl font-bold text-blue-600">120+</p>
              
              <p className="text-lg font-medium text-gray-800 dark:text-gray-300">Happy Travelers</p>
              <p className="text-3xl font-bold text-blue-600">250K+</p>

              <p className="text-lg font-medium text-gray-800 dark:text-gray-300">Tours Completed</p>
              <p className="text-3xl font-bold text-blue-600">35K+</p>
            </div>

            <div className="flex flex-col justify-between p-8">
              <p className="text-lg font-medium text-gray-800 dark:text-gray-300">Customer Reviews</p>
              <p className="text-3xl font-bold text-blue-600">98%</p>

              <p className="text-lg font-medium text-gray-800 dark:text-gray-300">Guides Available</p>
              <p className="text-3xl font-bold text-blue-600">500+</p>

              <p className="text-lg font-medium text-gray-800 dark:text-gray-300">Years of Experience</p>
              <p className="text-3xl font-bold text-blue-600">15+</p>
            </div>
          </div>
        </motion.div>
      
      {/* </div>
           <div className="bg-gray-100 py-12 -mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600">Authenticity</h3>
              <p className="text-gray-700 mt-2">We ensure genuine experiences that connect travelers with cultures and destinations.</p>
             
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600">Excellence</h3>
              <p className="text-gray-700 mt-2">From planning to execution, we prioritize quality and customer satisfaction.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-lg font-semibold text-blue-600">Sustainability</h3>
              <p className="text-gray-700 mt-2">We promote eco-friendly travel and respect for local communities.</p>
            </div>
          </div>
        </div> */}
      </div>

    </motion.div>
  );
};

export default Other;
