import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()


    const navLink = (to, label) => (
      <Link 
      to={to}
      className={`text-sm transition ${
        location.pathname === to
        ? 'text-purple-400 font-semibold'
        : 'text-gray-400 hover:text-white'
      }`}
      >
        {label}
      </Link>
    )




  return (
    <header className="bg-gray-900 sticky top-0 z-50 border-b border-gray-800">
  <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
    <Link to="/" className="font-bold text-xl text-purple-400">
    Sasha
    </Link>
    <nav className="flex gap-8">
      {navLink('/', 'Home')}
      {navLink('/about', 'About')}
      {navLink('/projects', 'Projects')}
    </nav>
  </div>
</header>
  )
}

export default Navbar