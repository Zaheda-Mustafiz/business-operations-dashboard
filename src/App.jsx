/**
 * App.jsx
 * Main application component with route configuration
 * 
 * Routes:
 * - /login    → Login page
 * - /signup   → Registration page  
 * - /dashboard → Main dashboard (protected - will add auth later)
 * - /         → Redirects to dashboard
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Import pages
import Login from './pages/login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected Routes (will add protection later) */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        
        {/* 404 - Catch all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

/**
 * NotFound Component
 * Displayed when user navigates to non-existent route
 */
function NotFound() {
  return (
    <div className="min-h-screen bg-dashboard-bg flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Page not found</p>
        <a 
          href="/dashboard" 
          className="btn-primary inline-block"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  )
}

export default App