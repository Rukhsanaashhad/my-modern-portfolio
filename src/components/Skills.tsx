import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: "React", level: 90, color: "from-cyan-400 to-blue-600" },
    { name: "TypeScript", level: 85, color: "from-blue-400 to-indigo-600" },
    { name: "Next.js", level: 80, color: "from-gray-200 to-black" },
    { name: "Python", level: 92, color: "from-yellow-400 to-amber-600" },
    { name: "Tailwind CSS", level: 95, color: "from-cyan-500 to-teal-500" },
    { name: "Node.js", level: 80, color: "from-green-400 to-emerald-600" },
    { name: "LangChain", level: 10, color: "from-purple-500 to-pink-600" },
    { name: "Streamlit", level: 88, color: "from-red-400 to-rose-600" },
    { name: "Framer Motion", level: 80, color: "from-pink-500 to-violet-600" },
    { name: "Git & GitHub", level: 90, color: "from-orange-500 to-red-600" },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20 text-white"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {skills.map((skill, index) => (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
              <div className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-500">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-lg shadow-cyan-500/20`}
                  />
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl transition duration-700 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}