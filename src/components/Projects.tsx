import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const myProjects = [
    {
      title: "MONTHLY EXPENSE MANAGEMENT SYSTEM",
      desc: "Full-featured expense tracker for Jadeed Hatchery Karachi",
      tech: "Python • Streamlit • Pandas • Excel Export",
      live: "https://advanced-hatch-solutions.streamlit.app",
      github: "https://github.com/Rukhsanaashhad/ADVANCED-HATCH-SOLUTIONS",
      image: "/images/advanced.png" 
    },
    {
      title: "AI HEALTH ASSISTANT",
      desc: "Doctor-suggestion Assessment",
      tech: "Python • Open-AI • API-Key • Nearby Doctors",
      live: "https://ai-health-assistant-max.streamlit.app/",
      github: "https://github.com/Rukhsanaashhad/ai-health-assistant",
      image: "/images/health.png" 
    },
    {
      title: "HISTORY & EVOLUTION OF AI",
      desc: "History of AI for Information Purpose",
      tech: "Python • Streamlit • PPTX",
      live: "https://max-history-of-ai.streamlit.app",
      github: "https://github.com/Rukhsanaashhad/History-of-AI",
      image: "/images/history.png" 
    },
    {
      title: "SIMPLE PORTFOLIO WEBSITE",
      desc: "Legacy portfolio - First iteration",
      tech: "React • TypeScript • Tailwind",
      live: "https://muhammadashhad-giaic-598115.netlify.app/",
      github: "https://github.com/Rukhsanaashhad/Portfolio-GIAIC",
      image: "/images/portfolio.png" 
    },
    {
      title: "GROWTH MINDSET",
      desc: "Self-improvement & resilience builder",
      tech: "Python • Streamlit • Mindset-Journey",
      live: "https://ashhad-giaic.streamlit.app",
      github: "https://github.com/Rukhsanaashhad/Growth-Mindset-Challenge-Web-App-with-Streamlit",
      image: "/images/growth.png" 
    },
    {
      title: "PASSWORD GENERATOR",
      desc: "Random secure password generator",
      tech: "Python • Streamlit • uv",
      live: "https://password-generator-ashhad.streamlit.app",
      github: "https://github.com/Rukhsanaashhad/password-generator",
      image: "/images/generator.png" 
    },
    {
      title: "E-COMMERCE WEBSITE",
      desc: "Full-featured e-commerce site with product catalog and payment integration",
      tech: "React • Tailwind • Sanity",
      live: "https://max-giaic.vercel.app/",
      github: "https://github.com/Rukhsanaashhad/Template_2",
      image: "/images/download.png" 
    },
    {
      title: "ADVANCED SECURE DATA SYSTEM",
      desc: "Secure data handling platform with authentication and encryption",
      tech: "Python • Cryptography • Streamlit",
      live: "https://securedataencryption-ashhad.streamlit.app",
      github: "https://github.com/Rukhsanaashhad/secure_data_encryption",
      image: "/images/secure.png" 
    },
    {
      title: "UNIT CONVERTOR",
      desc: "Multi-purpose unit converter for length, weight and temperature",
      tech: "Python • Advanced • Streamlit",
      live: "https://ashhad-unitconvertor-advanced.streamlit.app",
      github: "https://github.com/Rukhsanaashhad/unit-convertor-advanced",
      image: "/images/unit.png" 
    },
    {
      title: "PASSWORD STRENGTH",
      desc: "Generate strong passwords with instant strength feedback",
      tech: "Python • Streamlit",
      live: "https://password-strength-ashhad.streamlit.app",
      github: "https://github.com/Rukhsanaashhad/password-strength",
      image: "/images/strength.png" 
    },
    {
      title: "FIRST BOOK",
      desc: "AI Driven Development",
      tech: "PowerShell • TypeScript • CSS",
      live: "https://rukhsanaashhad.github.io/my-ai-book",
      github: "https://github.com/Rukhsanaashhad/my-ai-book",
      image: "/images/bool.png" 
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-white"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {myProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.20,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative bg-gray-900/60 backdrop-blur border border-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:border-cyan-500 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="h-56 bg-gray-800 border-b border-gray-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-3"
                  whileHover={{ color: "#22d3ee" }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                
                <p className="text-sm text-cyan-400 mb-6 font-medium">
                  {project.tech}
                </p>

                <div className="flex gap-6">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{ 
                      scale: 1.1,
                      x: 5
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-cyan-400 flex items-center gap-2 hover:gap-4 transition-all font-medium"
                  >
                    Live Demo <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ 
                      scale: 1.2,
                      color: "#ffffff"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-500 hover:text-white transition"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}