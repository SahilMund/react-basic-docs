import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useUser } from '../contexts/UserContext';
import { useState } from 'react';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { user } = useUser();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/router', label: 'Router' },
    { path: '/context', label: 'Context' },
    { path: '/forms', label: 'Forms' },
    { path: '/refs', label: 'Refs' },
    { path: '/lifecycle', label: 'Lifecycle' },
    { path: '/jsx', label: 'JSX' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800 dark:text-white">React Demo</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === item.path
                    ? 'bg-gray-900 text-white dark:bg-gray-700'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {user.isLoggedIn && (
              <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                <User size={16} />
                <span>{user.username}</span>
              </div>
            )}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {user.isLoggedIn && (
              <div className="px-3 py-2 text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                <User size={16} />
                <span>{user.username}</span>
              </div>
            )}
            <button
              onClick={toggleTheme}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}