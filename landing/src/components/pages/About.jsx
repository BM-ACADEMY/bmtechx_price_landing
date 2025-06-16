import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, School, Hospital, Home, Hotel, Shirt, Plane, Dumbbell } from 'lucide-react';

const About = () => {
  const [currentIndustry, setCurrentIndustry] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const industries = [
    { name: 'E-commerce', icon: ShoppingCart, color: 'from-blue-400 to-blue-600' },
    { name: 'Education', icon: School, color: 'from-green-400 to-green-600' },
    { name: 'Healthcare', icon: Hospital, color: 'from-red-400 to-red-600' },
    { name: 'Real Estate', icon: Home, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Hospitality', icon: Hotel, color: 'from-purple-400 to-purple-600' },
    { name: 'Fashion', icon: Shirt, color: 'from-pink-400 to-pink-600' },
    { name: 'Travel & Tourism', icon: Plane, color: 'from-indigo-400 to-indigo-600' },
    { name: 'Fitness', icon: Dumbbell, color: 'from-orange-400 to-orange-600' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndustry((prev) => (prev + 1) % industries.length);
        setIsVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const Icon = industries[currentIndustry].icon;

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" id='about'>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden relative"
      >
        {/* Header Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center relative overflow-hidden">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-20 -right-20 w-40 h-40 bg-white rounded-full opacity-10"
          />
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -top-20 -left-20 w-40 h-40 bg-white rounded-full opacity-10"
          />
          <h1 className="text-4xl font-extrabold text-white mb-2 relative z-10">
            India's Most Affordable Website Design & Development Company
          </h1>
          <p className="text-xl text-indigo-100 relative z-10">
            Professional websites starting at just <span className="font-bold text-white">₹1999!</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="p-8 md:p-10">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-700 mb-6"
          >
            Perfect for startups, small businesses, and entrepreneurs who want to grow online — without spending a fortune.
          </motion.p>

          {/* Dot Navigation */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8">We design for every industry:</h2>
            
            {/* Interactive Dots */}
            <div className="flex justify-center space-x-4 mb-8">
              {industries.map((industry, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setIsVisible(false);
                    setTimeout(() => {
                      setCurrentIndustry(index);
                      setIsVisible(true);
                    }, 200);
                  }}
                  className="relative"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className={`w-4 h-4 rounded-full transition-all ${currentIndustry === index ? `bg-gradient-to-br ${industry.color}` : 'bg-gray-300'}`} />
                  {currentIndustry === index && (
                    <motion.div 
                      layoutId="activeDot"
                      className={`absolute -inset-1 rounded-full ${industry.color.replace('from', 'bg').replace('to', '')} opacity-20`}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Current Industry Display */}
            <AnimatePresence mode="wait">
              {isVisible && (
                <motion.div
                  key={currentIndustry}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`bg-gradient-to-br ${industries[currentIndustry].color} p-6 rounded-xl shadow-lg text-white text-center`}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{industries[currentIndustry].name}</h3>
                  </div>
                  <p className="mt-4 text-white text-opacity-90">
                    Custom websites tailored for {industries[currentIndustry].name.toLowerCase()} businesses with all the features you need.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(79, 70, 229, 0.2)' }}
              className="bg-indigo-50 p-6 rounded-lg border border-indigo-100"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">Modern & Mobile-Friendly</h3>
              <p className="text-gray-600">Responsive designs that look great on all devices</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.2)' }}
              className="bg-purple-50 p-6 rounded-lg border border-purple-100"
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-2">SEO-Ready</h3>
              <p className="text-gray-600">Built to help you rank higher in search results</p>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <p className="text-lg text-gray-700 mb-6">
              From clean and simple designs to advanced features — we do it all based on your needs and budget.
              <span className="block font-semibold text-indigo-600 mt-2">No hidden charges. Just quality websites!</span>
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 20px 5px rgba(79, 70, 229, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Get Your Stunning Website Today!
            </motion.button>
            <motion.p 
              animate={{
                x: [-3, 3, -3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="mt-4 text-gray-500"
            >
              📞 Contact us now — Let's build your brand together!
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;