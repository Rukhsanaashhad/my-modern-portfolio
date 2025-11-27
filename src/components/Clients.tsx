import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function ClientSection() {
  // Logos Data
  const logos = [
    { name: "Jadeed Hatchery", logo: "🏢" },
    { name: "Tech Solutions", logo: "💻" },
    { name: "AI Startup", logo: "🤖" },
    { name: "Digital Agency", logo: "🎨" },
    { name: "Web Services", logo: "🌐" },
    { name: "Cloud Tech", logo: "☁️" },
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Zeeshan",
      company: "Jadeed Hatchery",
      comment: "The expense management system saved us 4+ hours weekly! Highly recommended.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Sara Khan", 
      company: "Tech Solutions",
      comment: "Amazing work on our web application. Delivered before deadline!",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Nilesh Kumar",
      company: " 𝗕𝘂𝘀𝗶𝗻𝗲𝘀𝘀 𝗢𝗽𝗲𝗿𝗮𝘁𝗶𝗼𝗻𝘀 𝗮𝗻𝗱 𝗦𝘁𝗿𝗮𝘁𝗲𝗴𝘆 𝗟𝗲𝗮𝗱𝗲𝗿",
      comment: "how insightful. Security in data management is crucial. It’s impressive to see the focus on user privacy. 🔐",
      rating: 5,
      avatar: "👩‍🎓"
    },
    {
      name: "Bilal Siddiqui",
      company: "Digital Agency", 
      comment: "Clean code, great communication, and on-time delivery.",
      rating: 5,
      avatar: "👨‍🎨"
    }
  ];

  // Duplicate logos for seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <>
      {/* Logos Section */}
      <section className="py-20 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
          >
            Trusted By Companies
          </motion.h2>
          
          {/* Scrolling Logos Container */}
          <div className="relative">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: [0, -1440] // Adjust scroll distance based on content width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 w-32 h-32 bg-gray-800/50 rounded-2xl flex flex-col items-center justify-center border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:bg-gray-800/80 shadow-lg"
                >
                  <span className="text-4xl mb-2">{client.logo}</span>
                  <span className="text-gray-300 text-sm text-center px-2 font-medium">{client.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient Overlays for smooth edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - NOW WITH HORIZONTAL SCROLL ANIMATION */}
      <section id="testimonials" className="py-24 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-center mb-4 text-white"
          >
            Client Reviews
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-center text-xl mb-16"
          >
            What my clients say about working with me
          </motion.p>

          {/* Auto-scrolling Testimonials Container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -1600] // Adjust based on testimonials width
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // Slower than logos
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-shrink-0 w-80 md:w-96 bg-gray-900/60 backdrop-blur border border-gray-800 rounded-3xl p-8 hover:border-cyan-500 transition-all duration-300 shadow-xl"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating 
                            ? "text-yellow-400 fill-yellow-400" 
                            : "text-gray-600"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    "{testimonial.comment}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div className="text-3xl bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Gradient Overlays for testimonials */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-950 to-transparent z-10"></div>
          </div>

          {/* Manual Scroll Indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 text-center mt-12 text-sm"
          >
            💡 Explore what our clients are saying
          </motion.p>
        </div>
      </section>
    </>
  );
}