import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Homepage from './screens/Home'
import Projects from './screens/Projects'
import Contact from './screens/Contact'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
