import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20"> {/* pt-20 add kiya */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Photo - Centered with proper spacing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12 mt-8" 
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full p-2">
              <img 
                src="/images/ashhad.jpg"
                alt="Ashhad"
                className="w-full h-full object-cover rounded-full border-4 border-gray-900"
              />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Ashhad
            </span>
          </h1>
          <p className="text-2xl md:text-4xl mb-6 text-gray-300">
            Frontened + AI Developer
          </p>
          <p className="text-lg md:text-xl mb-10 text-gray-400 max-w-2xl mx-auto">
            Building the future with code, creativity, and artificial intelligence.
          </p>
          <a
            href="#projects"
            className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-xl font-bold hover:scale-110 transition inline-block"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}