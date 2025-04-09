import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Star } from 'lucide-react';
import type { Trip } from '../types';

const FeaturedTrips: React.FC = () => {
  const trips: Trip[] = [
    {
      id: '1',
      name: 'Paris to Rome Adventure',
      from: 'France',
      to: 'Italy',
      price: 1299,
      duration: '7 days',
      image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviews: 128
    },
    {
      id: '2',
      name: 'Tokyo to Seoul Express',
      from: 'Japan',
      to: 'South Korea',
      price: 1499,
      duration: '8 days',
      image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: 156
    },
    {
      id: '3',
      name: 'London to Amsterdam Journey',
      from: 'UK',
      to: 'Netherlands',
      price: 899,
      duration: '5 days',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.7,
      reviews: 94
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl  font-bold mb-2">Featured Trips This Month</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Explore our most popular adventures</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <img
                  src={trip.image}
                  alt={trip.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                  ${trip.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-base font-semibold mb-2">{trip.name}</h3>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-5 h-5 fill-current" />
                    <span className="ml-1 font-medium">{trip.rating}</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sx ml-2">
                    ({trip.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{trip.duration}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Available Now</span>
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <span className="font-medium">{trip.from}</span>
                  <span className="mx-2">→</span>
                  <span className="font-medium">{trip.to}</span>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTrips;