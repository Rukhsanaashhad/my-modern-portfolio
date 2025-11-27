import { motion } from 'framer-motion';
import { Code2, Brain, Rocket, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 px-6 bg-gray-950" id="about">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-white"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Introduction */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-xl text-gray-300 leading-relaxed">
                Hey! I'm <span className="text-cyan-400 font-bold">Muhammad Ashhad Khan</span> — a passionate Frontend + AI Developer who loves turning ideas into reality with clean, efficient, and beautiful code.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                I specialize in building modern web applications with React, TypeScript, Tailwind, and Next.js, while exploring the exciting world of AI with tools like LangChain, Gemini, and Python.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                When I'm not coding, you'll find me exploring new tech, watching cricket, or planning my next big project over a cup of chai.
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-6 mt-10"
            >
              {[
                { icon: Code2, text: "10k+ Lines of Code" },
                { icon: Rocket, text: "15+ Projects Built" },
                { icon: Brain, text: "AI & ML Enthusiast" },
                { icon: Award, text: "Clean Code Lover" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-5 hover:border-cyan-500 transition">
                  <item.icon className="w-10 h-10 text-cyan873-400" />
                  <span className="text-gray-300 font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 hover:border-cyan-500 transition-all">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-cyan-400" />
                What I Bring to the Table
              </h3>
              <div className="space-y-6">
                {[
                  "Pixel-perfect, responsive designs",
                  "Clean, maintainable & scalable code",
                  "Fast, optimized & SEO-friendly apps",
                  "Frontend + AI-powered solutions",
                  "Strong problem-solving skills",
                  "Always learning & staying updated",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <Target className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}