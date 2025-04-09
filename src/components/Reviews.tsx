import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Review } from '../types';
import { Link } from "react-router-dom";

const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      rating: 5,
      tripName: 'Paris to Rome Adventure',
      comment: 'An absolutely incredible journey! The tour was perfectly organized, and the experiences were unforgettable.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '2',
      name: 'Michael Chen',
      rating: 5,
      tripName: 'Tokyo to Seoul Express',
      comment: 'Amazing cultural experience! The transition between Japan and Korea was seamless. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '3',
      name: 'Emma Wilson',
      rating: 4,
      tripName: 'London to Amsterdam Journey',
      comment: 'Beautiful cities and wonderful guides. The canal tour in Amsterdam was a highlight! Highly recommended!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300 dark:text-gray-600 '
        }`}
      />
    ));
  };

  return (
    <section className="py-16 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-2">What Our Travelers Say</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Real experiences from real adventurers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl hover:bg-blue-100 shadow-lg p-6 hover:shadow-xl transition-shadow duration-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {review.tripName}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">{renderStars(review.rating)}</div>

              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "{review.comment}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-4"
        >
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            View All Reviews
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;