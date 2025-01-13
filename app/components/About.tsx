'use client'
import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 60 },
  { name: 'TypeScript', level: 65 },
  { name: 'Python', level: 85 },
  { name: 'SQL', level: 85 },
  { name: 'PHP', level: 70 },
]

const About = () => {
  return (
    <section id="about" className="section bg-[rgb(var(--color-background))] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">About Me</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Text Section */}
          <div>
            <p className="text-base sm:text-lg leading-relaxed mb-6">
            As a passionate tech enthusiast, I thrive on solving complex problems through innovative solutions. Currently pursuing a Bachelor of Technology in Computer Science and Engineering, I have a strong academic foundation with a CPI of 8.38/10 and a track record of excellence in projects and internships.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-6">
            My expertise spans machine learning, web development, and software engineering, with hands-on experience in tools like Python, React, and JavaScript. As a team lead during my internship, I successfully developed a task management system, demonstrating my leadership and collaborative skills.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
            I am driven by a commitment to learning and growth, with a keen interest in exploring cutting-edge technologies and their real-world applications. Through impactful projects, I aim to contribute to the tech industry and make a difference in society.
            </p>
          </div>
          {/* Skills Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">My Skills</h3>
            {skills.map(skill => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between text-sm sm:text-base mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-[rgb(var(--color-secondary))] bg-opacity-30 rounded-full h-2">
                  <motion.div
                    className="bg-[rgb(var(--color-accent))] h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
