import { Link } from 'react-router-dom';
import { Film, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-indigo-400" aria-hidden="true" />
            <span className="text-2xl font-bold">MovieHub</span>
          </Link>
          
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search movies..."
                className="w-full bg-gray-700 rounded-lg py-2 pl-4 pr-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}