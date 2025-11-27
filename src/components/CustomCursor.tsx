import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setCursorVariant("hover");
      } else {
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 2,
    }
  };

  // Correct spring transition
  const springTransition = {
    type: "spring" as const,
    stiffness: 500,
    damping: 28
  };

  const trailTransition = {
    type: "spring" as const,
    stiffness: 300,
    damping: 20
  };

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={springTransition}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '32px',
          height: '32px',
          background: 'radial-gradient(circle, #00ffff 0%, #ff00ff 100%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          filter: 'blur(0.5px)',
          mixBlendMode: 'difference' as const,
        }}
      />
      
      {/* Cursor Trail Effect */}
      <motion.div
        className="cursor-trail"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={trailTransition}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '8px',
          height: '8px',
          backgroundColor: '#ff00ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0.7,
          mixBlendMode: 'difference' as const,
        }}
      />
      
      {/* Cursor Particles */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="cursor-particle"
          animate={{
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeOut"
          }}
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '4px',
            height: '4px',
            backgroundColor: ['#00ffff', '#ff00ff', '#ffff00'][index],
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9997,
            mixBlendMode: 'difference' as const,
          }}
        />
      ))}
    </>
  );
}