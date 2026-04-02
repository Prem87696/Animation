import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, Upload, User, Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Explore', path: '/explore' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-neutral-900">AnimHub</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-indigo-600",
                    location.pathname === link.path ? "text-indigo-600" : "text-neutral-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="relative group">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-indigo-500 transition-colors" />
                <input
                  type="text"
                  placeholder="Search animations..."
                  className="w-64 pl-9 pr-4 py-2 bg-neutral-100/50 border border-neutral-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
              </div>

              <Link
                to="/upload"
                className="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                <Upload className="w-4 h-4" />
                Upload
              </Link>

              <Link
                to="/profile"
                className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-indigo-500 hover:text-indigo-600 transition-colors"
              >
                <User className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-neutral-200 px-4 py-4 space-y-4"
        >
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search animations..."
              className="w-full pl-9 pr-4 py-2 bg-neutral-100 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-neutral-600 hover:bg-neutral-50 rounded-lg font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/upload"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Upload Animation
            </Link>
            <Link
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-neutral-600 hover:bg-neutral-50 rounded-lg font-medium flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Profile
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
