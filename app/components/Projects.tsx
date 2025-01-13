"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github } from 'lucide-react'

const projects = [
  { id: 1, title: 'Sakhi', description:'E-commerce Platform for women appraisal', category: 'Web Development', image: '/sakhi.jpeg', video: '/sakhi-video.mp4', github: 'https://github.com/Charmii1903/sakhi' },
  { id: 2, title: 'Talk-in-Sync', description:'Sign-Language Recognition', category: 'AI/ML', image: '/sign-language.png', video: '/project2-video.mp4', github: 'https://github.com/rishikahotlani/Sign-Language-Recognition' },
  { id: 3, title: 'WiseCart', description:'AI Powered ChatBot', category: 'AI/ML, Web Development', image: '/wisecart.jpeg', video: '/wisecart-video.mp4', github: 'https://github.com/rishikahotlani/WiseCart' },
  { id: 4, title: 'Punch Coins', description:'Task Management System', category: 'Web Development', image: '/punch-coins.jpeg', video: '/punch-coins-video.mp4', github: 'https://github.com/special-char/the-brainiax-summer-internship-24.git' },
]

const categories = ['All', 'Web Development',  'AI/ML', 'Blockchain']

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [fullScreenVideo, setFullScreenVideo] = useState<string | null>(null)

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="section bg-[rgb(var(--color-secondary))] bg-opacity-10 py-12">
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${fullScreenVideo ? 'blur-md' : ''}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">My Projects</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base ${
                activeCategory === category
                  ? 'bg-[rgb(var(--color-accent))] text-white'
                  : 'bg-[rgb(var(--color-secondary))] text-[rgb(var(--color-text))]'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover"
                  />
                  <button
                    onClick={() => setFullScreenVideo(project.video)}
                    className="absolute bottom-2 right-2 bg-[rgb(var(--color-accent))] text-white px-2 py-1 rounded text-xs sm:text-sm"
                  >
                    Play Video
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-[rgb(var(--color-text))] opacity-75 text-sm sm:text-base mb-4">
                    {project.description}
                  </p>
                  <p className="text-[rgb(var(--color-text))] opacity-75 text-sm sm:text-base mb-4">
                    {project.category}
                  </p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[rgb(var(--color-accent))] hover:underline text-sm sm:text-base"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    View on GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full-Screen Video Modal */}
      {fullScreenVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <video src={fullScreenVideo} autoPlay loop controls className="w-full max-w-3xl h-auto" />
          <button
            onClick={() => setFullScreenVideo(null)}
            className="absolute top-4 right-4 bg-rgb(133, 117, 104) text-white px-4 py-2 rounded"
          >
            &#x2715;
          </button>
        </div>
      )}
    </section>
  )
}

export default Projects
