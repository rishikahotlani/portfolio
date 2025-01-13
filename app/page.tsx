

import ClientHero from './components/ClientHero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

import './globals.css';  // Adjusted to point to the correct location


export default function Home() {
  return (
    <div>
      <ClientHero />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

