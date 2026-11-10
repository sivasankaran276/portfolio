import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="layout-root">
      {/* Responsive Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Projects Showcase Section */}
        <Projects />

        {/* Internship & Experience Section */}
        <Experience />

        {/* Technical Skills Section */}
        <Skills />

        {/* Certifications & Workshops Section */}
        <Certifications />

        {/* Recognition & Achievements Section */}
        <Achievements />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Refined Minimal Editorial Footer */}
      <Footer />
    </div>
  )
}

export default App
