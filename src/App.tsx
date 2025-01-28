import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Globe, ChevronDown, Moon, Sun, Send, Phone, Mail, MapPin } from 'lucide-react';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollingBall } from './components/ScrollingBall';
import { Hero3D } from './components/Hero3D';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light-mode');
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} cursor-none transition-colors duration-300`}>
          <CustomCursor isDarkMode={isDarkMode} />
          <ScrollingBall isDarkMode={isDarkMode} />

          {/* Dark Mode Toggle */}
          <motion.button
            className="fixed top-8 right-8 z-50 p-3 rounded-full bg-opacity-20 backdrop-blur-md"
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
            }}
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </motion.button>

          {/* Hero Section */}
          <motion.section
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Hero3D />
            <div className="container mx-auto px-4 text-center relative z-10">
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6 text-white"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                We Create Digital Magic
              </motion.h1>
              <motion.p
                className={`text-xl md:text-2xl mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Transforming ideas into exceptional digital experiences
              </motion.p>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <ChevronDown className="w-12 h-12 mx-auto animate-bounce" />
              </motion.div>
            </div>
          </motion.section>

          {/* Services Section */}
          <section className={`py-32 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="container mx-auto px-4">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={`p-8 rounded-2xl transition-colors ${isDarkMode ? 'bg-black hover:bg-gray-800' : 'bg-white hover:bg-gray-50 shadow-lg'
                  }`}>
                  <Code className="w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Custom websites and web applications built with cutting-edge technologies.
                  </p>
                </div>
                <div className={`p-8 rounded-2xl transition-colors ${isDarkMode ? 'bg-black hover:bg-gray-800' : 'bg-white hover:bg-gray-50 shadow-lg'
                  }`}>
                  <Smartphone className="w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Mobile Apps</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Native and cross-platform mobile applications for iOS and Android.
                  </p>
                </div>
                <div className={`p-8 rounded-2xl transition-colors ${isDarkMode ? 'bg-black hover:bg-gray-800' : 'bg-white hover:bg-gray-50 shadow-lg'
                  }`}>
                  <Globe className="w-12 h-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Digital Solutions</h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                    End-to-end digital solutions tailored to your business needs.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects Preview */}
          <section className="py-32">
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-16 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Our Latest Work
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
                  "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative overflow-hidden rounded-2xl"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img src={image} alt={`Project ${index + 1}`} className="w-full h-[400px] object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">View Project</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className={`py-32 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-16 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-2xl ${isDarkMode ? 'bg-black' : 'bg-white shadow-lg'
                    }`}
                >
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className={`w-full px-4 py-3 rounded-lg ${isDarkMode
                          ? 'bg-gray-800 border-gray-700 focus:border-purple-500'
                          : 'bg-gray-50 border-gray-200 focus:border-purple-500'
                          } border focus:ring-2 focus:ring-purple-500 outline-none transition-colors`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className={`w-full px-4 py-3 rounded-lg ${isDarkMode
                          ? 'bg-gray-800 border-gray-700 focus:border-purple-500'
                          : 'bg-gray-50 border-gray-200 focus:border-purple-500'
                          } border focus:ring-2 focus:ring-purple-500 outline-none transition-colors`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg ${isDarkMode
                          ? 'bg-gray-800 border-gray-700 focus:border-purple-500'
                          : 'bg-gray-50 border-gray-200 focus:border-purple-500'
                          } border focus:ring-2 focus:ring-purple-500 outline-none transition-colors`}
                      ></textarea>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-purple-500 bg-opacity-10">
                      <Phone className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Phone</h3>
                      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-indigo-500 bg-opacity-10">
                      <Mail className="w-6 h-6 text-indigo-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Email</h3>
                      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>hello@company.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-pink-500 bg-opacity-10">
                      <MapPin className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Location</h3>
                      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                        123 Innovation Street<br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default App;