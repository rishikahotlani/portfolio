'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative overflow-hidden bg-[rgb(var(--color-background))] lg:gap-10"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(var(--color-background),0.7)] to-[rgb(var(--color-background))] opacity-90" />
      </div>
      {/* Left Section - Image */}
      <div className="z-10 text-center lg:text-left lg:mr-5">
        <div className="relative w-56 h-56 mx-auto lg:mx-0 rounded-full border-[6px] p-2 border-[rgb(var(--color-primary))] animate-buzzing-border">
          <div className="w-full h-full rounded-full border-[4px] border-[rgb(var(--color-primary))] ">
            <Image
              src="/profile.jpeg?height=200&width=200"
              alt="Your Name"
              layout="fill"
              objectFit="cover"
              className="rounded-full p-1"
            />
          </div>
        </div>
      </div>
      {/* Right Section - Text */}
      <div className="z-10 text-center lg:text-left max-w-3xl px-4 mt-6 lg:mt-0 lg:ml-5">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4 text-[rgb(var(--color-accent))]"
        >
          Rishika Hotlani
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl text-[rgb(var(--color-text))] mb-8"
        >
          Web Developer & Tech Enthusiast

        </motion.h2>
        <motion.a
          href="/Rishika_Resume.pdf"
          download
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-flex items-center px-6 py-3 bg-[rgb(var(--color-accent))] text-white rounded-md hover:bg-[rgb(var(--color-primary))] transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
