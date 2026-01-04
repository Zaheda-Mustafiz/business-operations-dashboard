/**
 * Dashboard.jsx
 * Main dashboard page - displays business overview
 */

import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // TODO: Add Firebase logout
    console.log('Logging out...')
    navigate('/login')
  }

  // Sample stats data
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+20.1%', positive: true },
    { label: 'Active Users', value: '2,338', change: '+15.2%', positive: true },
    { label: 'Pending Orders', value: '12', change: '-5.4%', positive: false },
    { label: 'Conversion Rate', value: '3.24%', change: '+4.7%', positive: true },
  ]

  return (
    <div className="min-h-screen bg-dashboard-bg">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary-600">
                📊 BizDash
              </span>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <span className="text-gray-700">Welcome, User!</span>
              <button 
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 text-sm font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back! Here's what's happening with your business.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card">
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className={`text-sm mt-2 ${
                stat.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change} from last month
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="flex flex-wrap gap-3">
            <button className="btn-primary">+ New Order</button>
            <button className="btn-primary bg-gray-600 hover:bg-gray-700">
              View Reports
            </button>
            <button className="btn-primary bg-green-600 hover:bg-green-700">
              Add Customer
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard