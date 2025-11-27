import { useState } from 'react';
import { motion } from 'framer-motion'; // Motion import karo
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Chatbot from './components/Chatbot';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import { Github, Linkedin, Mail, Bot } from 'lucide-react';
import WelcomeMessage from './components/WelcomeMessage';

export default function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="dark">
      <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
        <WelcomeMessage />
        <CustomCursor />
        
        <Navbar />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Clients />

        {/* Contact Section with Smooth Animations */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-8 text-white"
            >
              Let's Connect
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-400 text-xl mb-16 max-w-2xl mx-auto"
            >
              Ready to build something amazing together?
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-12 text-5xl mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a 
                href="https://github.com/rukhsanaashhad" 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ scale: 1.3, color: "#22d3ee" }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github />
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/ashhad-khan-89484b2b5" 
                target="_blank" 
                rel="noreferrer" 
                whileHover={{ scale: 1.3, color: "#22d3ee" }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin />
              </motion.a>
              
              <motion.a 
                href="mailto:maxtraders712@gmail.com" 
                whileHover={{ scale: 1.3, color: "#22d3ee" }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail />
              </motion.a>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="mailto:maxtraders712@gmail.com"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full text-xl font-bold transition-all shadow-2xl"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </motion.a>

            {/* Footer */}
            <motion.div 
              className="mt-20 pt-10 border-t border-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-gray-500 text-sm">© 2025 Ashhad. Built with passion</p>
            </motion.div>
          </div>
        </section>

        {/* Chatbot */}
        <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />

        {/* Chatbot Button */}
        {!isChatbotOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, type: "spring" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsChatbotOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-2xl transition-all"
          >
            <Bot className="w-8 h-8 text-white" />
          </motion.button>
        )}
      </div>
    </div>
  );
}