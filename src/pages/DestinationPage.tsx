import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Calender from '../styling/Calender';

interface DestinationInfo {
  [key: string]: {
    name: string;
    description: string;
    image: string;
    highlights: string[];
    activities: string[];
  };
}

const destinations: DestinationInfo = {
  japan: {
    name: 'Japan',
    description: 'Experience the perfect blend of ancient traditions and modern technology in Japan. From serene temples to bustling city streets, Japan offers a unique cultural journey.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    highlights: [
      'Visit the historic temples of Kyoto',
      'Experience Tokyo\'s vibrant city life',
      'Climb Mount Fuji',
      'Relax in traditional hot springs'
    ],
    activities: [
      'Tea ceremony experience',
      'Sushi making class',
      'Samurai sword lesson',
      'Zen meditation session'
    ]
  },
  italy: {
    name: 'Italy',
    description: 'Discover the heart of Roman history, Renaissance art, and world-renowned cuisine. Italy\'s rich cultural heritage and stunning landscapes await.',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    highlights: [
      'Explore the Roman Colosseum',
      'Visit Vatican City',
      'Tour Tuscan vineyards',
      'See Venice\'s canals'
    ],
    activities: [
      'Pasta making workshop',
      'Wine tasting tour',
      'Gondola ride',
      'Art gallery visits'
    ]
  },
  france: {
    name: 'France',
    description: 'From the iconic Eiffel Tower to the charming countryside, France offers a perfect blend of culture, history, and gastronomy.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    highlights: [
      'Visit the Louvre Museum',
      'Explore Palace of Versailles',
      'Tour Loire Valley castles',
      'Relax on French Riviera'
    ],
    activities: [
      'French cooking class',
      'Champagne tasting',
      'River Seine cruise',
      'Perfume making workshop'
    ]
  },
  switzerland: {
    name: 'Switzerland',
    description: 'Experience breathtaking Alpine scenery, pristine lakes, and charming villages in the heart of Europe.',
    image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    highlights: [
      'Visit Matterhorn',
      'Explore Lake Geneva',
      'Tour Lucerne',
      'See Interlaken'
    ],
    activities: [
      'Ski adventures',
      'Chocolate making',
      'Mountain hiking',
      'Swiss watch tour'
    ]
  },
  greece: {
    name: 'Greece',
    description: 'Discover ancient ruins, beautiful islands, and Mediterranean charm in the cradle of Western civilization.',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    highlights: [
      'Visit Acropolis',
      'Explore Santorini',
      'Tour Delphi',
      'Relax in Mykonos'
    ],
    activities: [
      'Greek cooking class',
      'Island hopping',
      'Ancient ruins tour',
      'Mediterranean cruise'
    ]
  }
};

const Card: React.FC<{ title: string; items: string[]; color: string }> = ({ title, items, color }) => {
  return (
    <motion.div
      className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={`text-2xl font-bold mb-4 text-${color}-600`}>{title}</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center"
          >
            <span className={`w-2 h-2 bg-${color}-500 rounded-full mr-2`} />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const DestinationPage: React.FC = () => {
  const { country } = useParams<{ country: string }>();
  const destination = destinations[country as keyof typeof destinations];

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div className="pt-16">
      <div className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${destination.image})`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white"
          >
            {destination.name}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose dark:prose-invert max-w-none"
        >
          <p className="text-xl mb-8">{destination.description}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card title="Highlights" items={destination.highlights} color="blue" />
            <Card title="Activities" items={destination.activities} color="green" />
        
          </div>

          <div className="mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Book Your Trip
            </button>
          </div>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
      < Calender />
      </div>
    </div>
  );
};

export default DestinationPage;