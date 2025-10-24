import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MouseTrail from './components/MouseTrail'
import SportsPage from './pages/SportsPage'

function App() {
  const [darkMode, setDarkMode] = useState(true) // Start with dark mode like the image

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    // Apply dark mode class to html element
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Mouse Trail Effect */}
      <MouseTrail enabled={true} particleCount={12} />
      
      <Navbar />
      
      <Routes>
        {/* Main Portfolio Page */}
        <Route path="/" element={
          <main>
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Education darkMode={darkMode} />
            <Publications darkMode={darkMode} />
            <Contact darkMode={darkMode} />
          </main>
        } />
        
        {/* Separate Sports Page */}
        <Route path="/sports" element={<SportsPage darkMode={darkMode} />} />
      </Routes>
      
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
