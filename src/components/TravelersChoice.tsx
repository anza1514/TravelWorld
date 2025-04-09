import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Star } from 'lucide-react';


const TravelersChoice: React.FC = () => {
  const awards = [
    {
      id: '1',
      title: 'Best Cultural Experience',
      location: 'Kyoto, Japan',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: '1.2k'
    },
    {
      id: '2',
      title: 'Most Scenic Route',
      location: 'Swiss Alps',
      image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.8,
      reviews: '956'
    },
    {
      id: '3',
      title: 'Best Adventure Tour',
      location: 'New Zealand',
      image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      rating: 4.9,
      reviews: '1.5k'
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
          <div className="flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-yellow-400 mr-2" />
            <h2 className="text-2xl font-bold">Travelers' Choice Awards</h2>
            
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Best of the Best: Top-rated experiences chosen by our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-48">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Winner 2025
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{award.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-medium">{award.rating}</span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">
                      ({award.reviews} reviews)
                    </span>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 hover:underline">
                    Learn More
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

export default TravelersChoice;