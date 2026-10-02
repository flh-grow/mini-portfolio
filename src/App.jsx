import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import Footer from './pages/Footer'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App