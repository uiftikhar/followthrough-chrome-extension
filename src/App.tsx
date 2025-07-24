import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Theme from './components/Theme'
import './App.css'

function Navigation() {
  const location = useLocation()
  
  return (
    <nav className="mb-6">
      <div className="nav-tabs">
        <Link 
          to="/" 
          className={`nav-tab ${location.pathname === '/' ? 'active' : ''}`}
        >
          Home
        </Link>
        <Link 
          to="/theme" 
          className={`nav-tab ${location.pathname === '/theme' ? 'active' : ''}`}
        >
          Theme Showcase
        </Link>
      </div>
    </nav>
  )
}

function AppContent() {
  return (
    <div className="min-h-screen bg-light text-dark font-sans">
      <div className="max-w-extension mx-auto p-6">
        {/* Header */}
        <header className="mb-6">
          <h1 className="mb-2">FollowThrough</h1>
          <p className="text-muted">Chrome Extension for Sprint Planning Automation</p>
        </header>

        {/* Navigation */}
        <Navigation />

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theme" element={<Theme />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-border">
          <p className="text-sm text-muted text-center">
            FollowThrough Chrome Extension - MVP Foundation Ready
          </p>
        </footer>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
