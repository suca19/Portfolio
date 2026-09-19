import { Link } from 'react-router-dom'
import logo from '../assets/logo-.svg'

export default function Nav(){
  return (
    <nav className="grid grid-cols-[1fr_auto_1fr] items-center sticky top-0 bg-white px-6 py-4 shadow-md z-50 w-full">
      {/* Logo on the left */}
      <Link to="/" className="flex items-center gap-2 justify-self-start pl-8" aria-label="Home">
        <img src={logo} alt="" className="h-8 w-auto" />
        <span className="text-xl font-semibold text-gray-900"></span>
      </Link>

      {/* Links in the center */}
      <div className="flex items-center justify-center space-x-20">
        <Link to="/" className="text-gray-700 hover:text-accent">Home</Link>
        <Link to="/projects" className="text-gray-700 hover:text-accent">Projects</Link>
        <Link to="/contact" className="text-gray-700 hover:text-accent">Contact</Link>
      </div>

      {/* Resume on the right */}
      <a href="https://docs.google.com/document/d/10RhoQSKMYG6Hf0uWi1uH3_M93fsqgb3ZFcmcHhaOnlg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-accent justify-self-end pr-8">
        Resume
      </a>
    </nav>
  )
}