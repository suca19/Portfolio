import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

const redirectedPath = sessionStorage.getItem('gh-pages-redirect')

if (redirectedPath) {
  sessionStorage.removeItem('gh-pages-redirect')
  window.history.replaceState(null, '', redirectedPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio/">
      <App />
    </BrowserRouter>
  </StrictMode>,
)
