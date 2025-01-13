'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter } from 'lucide-react'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section bg-[rgb(var(--color-secondary))] bg-opacity-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            action="https://formspree.io/f/xkggkova"
            method="POST"
            className="w-full md:w-1/2 max-w-lg"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-[rgb(var(--color-text))] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent))]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-[rgb(var(--color-text))] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent))]"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 text-[rgb(var(--color-text))] bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent))]"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full px-4 py-2 text-white bg-[rgb(var(--color-accent))] rounded-md hover:bg-[rgb(var(--color-primary))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent))] focus:ring-offset-2 transition-colors"
            >
              Send Message
            </motion.button>
          </motion.form>
          <div className="w-full md:w-1/3 mt-8 md:mt-0">
            <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/rishika-hotlani-3399782b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-accent))] transition-colors"
              >
                <Linkedin className="w-6 h-6 mr-2" />
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/rishikahotlani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-accent))] transition-colors"
              >
                <Github className="w-6 h-6 mr-2" />
                GitHub Profile
              </a>
              <a
                href="https://x.com/rishikahotlani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[rgb(var(--color-text))] hover:text-[rgb(var(--color-accent))] transition-colors"
              >
                <Twitter className="w-6 h-6 mr-2" />
                Twitter Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
