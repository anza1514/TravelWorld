import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const TopDestinations: React.FC = () => {
  const destinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Experience the stunning sunsets and white-washed architecture',
      rating: 4.9
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Discover tropical beaches and ancient temples',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Swiss Alps',
      image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Explore breathtaking mountain landscapes',
      rating: 4.9
    },
    {
      id: 4,
      name: 'Machu Picchu, Peru',
      image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Visit the ancient Incan citadel',
      rating: 4.9
    }
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Top Destinations</h2>
          <p className="text-gray-600 dark:text-gray-300">Discover your next unforgettable journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="font-medium text-sm">{destination.name}</span>
                </div>
              </div>
              
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm font-medium">{destination.rating}</span>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                    View Trips
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;