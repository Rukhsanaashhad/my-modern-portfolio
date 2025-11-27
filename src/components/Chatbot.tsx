import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, Sparkles, X, Zap } from 'lucide-react';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Chatbot({ isOpen, onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [usedSuggestions, setUsedSuggestions] = useState<Set<string>>(new Set());
  const [showNextQuestions, setShowNextQuestions] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // All possible questions
  const allSuggestions = [
    "What tech stack do you use?",
    "Do you work with AI?",
    "What's your availability?",
    "Tell me about your projects!",
    "What's your experience level?",
    "Do you do freelance work?",
    "What's your hourly rate?",
    "Can you show me your GitHub?",
    "What projects have you built?",
    "Do you work with startups?",
    "What's your preferred tech?",
    "Are you open to collaboration?"
  ];

  // Responses for questions
  const responses: Record<string, string> = {
    "what tech stack do you use": "Next.js • React • TypeScript • Tailwind • Node.js • Python • AI/ML • FastAPI • PostgreSQL",
    "do you work with ai": "Absolutely! I build AI agents, RAG systems, custom chatbots, and automation tools with full AI stack expertise",
    "what's your availability": "Currently open for freelance projects & full-time opportunities — ready to start immediately!",
    "tell me about your projects": "I've built expense trackers, AI chatbots, cricket apps, and modern portfolios. Check my projects section! 🚀",
    "what's your experience level": "2+ years of professional experience building forntend applications with modern technologies",
    "do you do freelance work": "Yes! I take on freelance projects and love working with clients to bring their ideas to life",
    "what's your hourly rate": "Let's discuss based on project requirements — I offer competitive rates for quality work",
    "can you show me your github": "Sure! Check out my GitHub: github.com/rukhsanaashhad for all my projects and code",
    "what projects have you built": "Expense management systems, AI chat agents, live cricket apps, and this portfolio — all with modern tech!",
    "do you work with startups": "I love working with startups! I understand the fast-paced environment and can deliver quickly",
    "what's your preferred tech": "React/Next.js for frontend, Node.js/Python for backend, and Tailwind for styling — but I'm flexible!",
    "are you open to collaboration": "Absolutely! I enjoy collaborating with other developers and designers on interesting projects"
  };

  // Question groups - when user asks one, show related ones
  const questionGroups: Record<string, string[]> = {
    "tech": ["What tech stack do you use?", "What's your preferred tech?", "Do you work with AI?"],
    "projects": ["Tell me about your projects!", "What projects have you built?", "Can you show me your GitHub?"],
    "work": ["What's your availability?", "Do you do freelance work?", "Do you work with startups?"],
    "collaboration": ["Are you open to collaboration?", "What's your experience level?", "What's your hourly rate?"]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showNextQuestions]);

  // Get next set of questions based on user's query
  const getNextQuestions = (userMessage: string): string[] => {
    const messageLower = userMessage.toLowerCase();
    
    if (messageLower.includes('tech') || messageLower.includes('stack') || messageLower.includes('technology')) {
      return questionGroups.tech;
    } else if (messageLower.includes('project') || messageLower.includes('build') || messageLower.includes('github')) {
      return questionGroups.projects;
    } else if (messageLower.includes('work') || messageLower.includes('freelance') || messageLower.includes('availability')) {
      return questionGroups.work;
    } else if (messageLower.includes('collaborat') || messageLower.includes('team') || messageLower.includes('experience')) {
      return questionGroups.collaboration;
    } else {
      // Default: return random 3 questions that haven't been used
      const unused = allSuggestions.filter(q => !usedSuggestions.has(q));
      return unused.slice(0, 3);
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setInput('');
    setIsTyping(true);
    setShowNextQuestions(false);

    setTimeout(() => {
      setIsTyping(false);
      const userMessageLower = userMsg.toLowerCase();
      
      // Find matching response
      let response = "Thanks for your message! Ashhad will get back to you soon. ✨";
      for (const [key, value] of Object.entries(responses)) {
        if (userMessageLower.includes(key)) {
          response = value;
          break;
        }
      }
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      
      // Show next questions after response
      setTimeout(() => {
        setShowNextQuestions(true);
      }, 500);
      
    }, 1500);
  };

  const handleSuggestion = (question: string) => {
    setUsedSuggestions(prev => new Set(prev).add(question));
    setMessages(prev => [...prev, { text: question, isUser: true }]);
    setIsTyping(true);
    setShowNextQuestions(false);

    setTimeout(() => {
      setIsTyping(false);
      const questionLower = question.toLowerCase();
      let response = "Great question! Ashhad would love to discuss this with you.";
      
      for (const [key, value] of Object.entries(responses)) {
        if (questionLower.includes(key)) {
          response = value;
          break;
        }
      }
      
      setMessages(prev => [...prev, { text: response, isUser: false }]);
      
      // Show next questions after response
      setTimeout(() => {
        setShowNextQuestions(true);
      }, 500);
      
    }, 1200);
  };

  // Get initial suggestions (unused ones)
  const remainingSuggestions = allSuggestions.filter(q => !usedSuggestions.has(q));
  const initialSuggestions = remainingSuggestions.slice(0, 3);
  const showInitialSuggestions = messages.length === 0 && initialSuggestions.length > 0;

  // Get next questions based on last user message
  const lastUserMessage = messages.filter(m => m.isUser).pop()?.text || '';
  const nextQuestions = getNextQuestions(lastUserMessage).filter(q => !usedSuggestions.has(q));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 md:bottom-8 md:w-96 h-[600px] max-h-[85vh] bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-cyan-500/30 overflow-hidden z-50 flex flex-col"
          style={{ 
            boxShadow: "0 25px 80px rgba(6, 182, 212, 0.35)",
            background: "linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)"
          }}
        >
          {/* Header */}
          <motion.div 
            className="p-6 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 relative overflow-hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  className="p-3 bg-white/20 rounded-2xl backdrop-blur border border-white/30"
                >
                  <Bot className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    AI Assistant
                    <motion.div
                      animate={{ rotate: [0, 15, 0, -15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-5 h-5 text-yellow-300" />
                    </motion.div>
                  </h3>
                  <p className="text-white/80 text-sm">Ask me about Ashhad</p>
                </div>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-white p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {/* Initial Suggestions */}
            <AnimatePresence>
              {showInitialSuggestions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-3 mb-4"
                >
                  <p className="text-center text-cyan-400 text-sm font-medium flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    Quick questions you can ask:
                  </p>
                  {initialSuggestions.map((question, index) => (
                    <motion.button
                      key={question}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02, 
                        backgroundColor: "rgba(6, 182, 212, 0.15)",
                        borderColor: "rgb(6, 182, 212)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSuggestion(question)}
                      className="w-full text-left p-3 bg-gray-800/50 border border-cyan-500/30 rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
                    >
                      <p className="text-gray-200 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                        {question}
                      </p>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Messages */}
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                    message.isUser
                      ? "bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25"
                      : "bg-gray-800/70 text-gray-100 border border-cyan-500/20 shadow-lg"
                  }`}
                >
                  {message.text}
                </motion.div>
              </motion.div>
            ))}

            {/* Next Questions after response */}
            <AnimatePresence>
              {showNextQuestions && nextQuestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3 mt-4"
                >
                  <p className="text-center text-purple-400 text-sm font-medium flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    You might also want to know:
                  </p>
                  {nextQuestions.map((question, index) => (
                    <motion.button
                      key={question}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.02, 
                        backgroundColor: "rgba(168, 85, 247, 0.15)",
                        borderColor: "rgb(168, 85, 247)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSuggestion(question)}
                      className="w-full text-left p-3 bg-gray-800/50 border border-purple-500/30 rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
                    >
                      <p className="text-gray-200 text-sm font-medium group-hover:text-purple-300 transition-colors">
                        {question}
                      </p>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-gray-800/70 px-4 py-3 rounded-2xl border border-cyan-500/20 flex gap-1.5">
                  {[0, 1, 2].map((dot) => (
                    <motion.div
                      key={dot}
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 1, 
                        repeat: Infinity, 
                        delay: dot * 0.2 
                      }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                  ))}
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-gray-800/50 border-t border-cyan-500/20 backdrop-blur">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700/50 border border-cyan-500/30 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={sendMessage}
                disabled={!input.trim()}
                className="bg-gradient-to-r from-cyan-600 to-purple-600 p-3 rounded-full shadow-lg shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                <Send className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}