'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { frontendSkills } from '../data/data';
import { getRepositories } from '@/lib/github'
import Hero from './components/Hero'
import About from '@/pages/About'
import Skills from '@/pages/Skills'
import Projects from '@/pages/Projects'
import Contact from '@/pages/Contact'

export default function WelcomePage() {
  const router = useRouter();
  const [icons, setIcons] = useState([]);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Create random positions for icons with improved initial positioning
    const newIcons = frontendSkills.map(skill => ({
      ...skill,
      x: Math.random() * (windowSize.width - 100) + 50,
      y: Math.random() * (windowSize.height - 100) + 50,
      scale: 0.5 + Math.random() * 0.5,
      rotation: Math.random() * 360,
      speed: 0.3 + Math.random() * 0.7, // Reduced speed range
      direction: {
        x: (Math.random() - 0.5) * 1, // Reduced direction magnitude
        y: (Math.random() - 0.5) * 1
      },
      angle: Math.random() * Math.PI * 2
    }));
    setIcons(newIcons);
  }, [windowSize]);

  useEffect(() => {
    const moveIcons = () => {
      setIcons(prevIcons => 
        prevIcons.map(icon => {
          // Calculate new position with circular motion
          const newAngle = icon.angle + 0.01; // Reduced angular velocity
          const radius = 30; // Reduced radius for smaller circles
          
          // Base position with circular motion
          let newX = icon.x + Math.cos(newAngle) * radius * 0.005; // Reduced movement multiplier
          let newY = icon.y + Math.sin(newAngle) * radius * 0.005;
          
          // Add some random drift
          newX += icon.direction.x * icon.speed;
          newY += icon.direction.y * icon.speed;

          // Boundary handling with smooth redirection
          if (newX < 50) {
            newX = 50;
            icon.direction.x = Math.abs(icon.direction.x);
          } else if (newX > windowSize.width - 50) {
            newX = windowSize.width - 50;
            icon.direction.x = -Math.abs(icon.direction.x);
          }

          if (newY < 50) {
            newY = 50;
            icon.direction.y = Math.abs(icon.direction.y);
          } else if (newY > windowSize.height - 50) {
            newY = windowSize.height - 50;
            icon.direction.y = -Math.abs(icon.direction.y);
          }

          // Gradually change direction to prevent straight-line movement
          const directionChange = 0.005; // Reduced direction change rate
          icon.direction.x += (Math.random() - 0.5) * directionChange;
          icon.direction.y += (Math.random() - 0.5) * directionChange;

          // Normalize direction vector to maintain consistent speed
          const magnitude = Math.sqrt(icon.direction.x ** 2 + icon.direction.y ** 2);
          icon.direction.x /= magnitude;
          icon.direction.y /= magnitude;

          return {
            ...icon,
            x: newX,
            y: newY,
            rotation: icon.rotation + 0.5, // Reduced rotation speed
            angle: newAngle,
            direction: icon.direction
          };
        })
      );
    };

    const interval = setInterval(moveIcons, 32); // Increased interval for slower updates
    return () => clearInterval(interval);
  }, [windowSize]);

  const neonColors = [
    '#ff00ff', // Pink
    '#00ffff', // Cyan
    '#ff0000', // Red
    '#00ff00', // Green
    '#0000ff', // Blue
    '#ffff00', // Yellow
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background icons */}
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            x: icon.x,
            y: icon.y,
            scale: icon.scale,
            rotate: icon.rotation,
          }}
        >
          <div
            className="w-16 h-16 relative"
            style={{
              filter: `drop-shadow(0 0 10px ${neonColors[index % neonColors.length]})`,
            }}
          >
            <img
              src={icon.image}
              alt={icon.name}
              className="w-full h-full object-contain opacity-50"
            />
          </div>
        </motion.div>
      ))}

      {/* Welcome content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-6xl font-bold text-white mb-8 text-center"
          style={{
            textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
          }}
        >
          Welcome to HsN Portfolio
        </motion.h1>

        <motion.button
          onClick={() => router.push('/main')}
          className="px-8 py-4 text-xl font-bold text-white rounded-full"
          style={{
            background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
            boxShadow: '0 0 20px #ff00ff, 0 0 40px #00ffff',
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 30px #ff00ff, 0 0 60px #00ffff',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Enter Portfolio
        </motion.button>
      </div>
    </div>
  );
}

export async function Home() {
  const projects = await getRepositories()

  return (
    <div className="min-h-screen dark:bg-gray-900   dark:text-gray-300 space-y-10 ">
      <div className='backdrop-blur-3xl'>
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Contact />
      </div>
    </div>
  )
}