// components/WelcomeMessage.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

export default function WelcomeMessage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const closeWelcome = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Epic Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-black/85 backdrop-blur-2xl"
            onClick={closeWelcome}
          />

          {/* Main Card — Bomb Entry */}
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 320 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6"
          >
            <div className="relative w-full max-w-lg">
              {/* Glowing Outer Ring */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-70 animate-pulse" />
              
              <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative bg-gray-950/98 backdrop-blur-3xl rounded-3xl p-10 border border-cyan-500/40 shadow-5xl"
              >
                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    initial={{ x: Math.random() * 500 - 250, y: 300 }}
                    animate={{ y: -400, opacity: [0, 1, 0] }}
                    transition={{ duration: 4 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                ))}

                {/* PERFECT CIRCLE CROSS BUTTON — TABAAHI */}
                <motion.button
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeWelcome}
                  className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/20 hover:border-cyan-400 transition-all duration-300 shadow-xl group"
                >
                  <X className="w-7 h-7 group-hover:rotate-180 transition-transform duration-500" />
                </motion.button>

                {/* Content */}
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="text-8xl mb-6"
                  >
                    <Sparkles className="inline-block text-yellow-400 drop-shadow-glow" />
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 leading-tight"
                  >
                    Welcome to My World!
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-2xl text-gray-300 mb-4"
                  >
                    Hey! I'm <span className="font-bold text-cyan-400">Ashhad</span>
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="text-gray-400 mb-10 text-lg"
                  >
                    Frontend Developer • AI Builder • Turning ideas into reality
                  </motion.p>

                  {/* Killer Button */}
                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeWelcome}
                    className="relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-bold text-xl shadow-2xl overflow-hidden group"
                  >
                    <span className="relative z-10">Let's Build the Future</span>
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.7 }}
                    />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}