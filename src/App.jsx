import './App.css'
import Portfolio from "./components/Portfolio"
import Contact from './components/Contact'
import { Routes, Route } from 'react-router-dom'
import Experience from './components/Experience'
import Allimages from './components/Allimages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/allimages" element={<Allimages />} /> {/* ✅ Added */}
    </Routes>
  )
}

export default App