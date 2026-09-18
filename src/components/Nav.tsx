import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <nav className="flex gap-6 sticky top-0 bg-white px-6 py-4 shadow-md z-50 justify-center space-x-20">
            <div>
               
            </div>
            <Link to="/" className="text-gray-700 hover:text-accent">Home</Link>
            <Link to="/projects" className="text-gray-700 hover:text-accent">Projects</Link>
            <Link to="/contact" className="text-gray-700 hover:text-accent">Contact</Link>
            <a href="https://docs.google.com/document/d/10RhoQSKMYG6Hf0uWi1uH3_M93fsqgb3ZFcmcHhaOnlg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-accent">Resume</a>
        </nav>
    );
}