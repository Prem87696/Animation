import { Sparkles, Twitter, Github, Dribbble } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-neutral-900">AnimHub</span>
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              The premium marketplace for high-quality animations, micro-interactions, and motion design assets.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-neutral-400 hover:text-indigo-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-indigo-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-indigo-600 transition-colors">
                <Dribbble className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link to="/explore" className="hover:text-indigo-600 transition-colors">Trending</Link></li>
              <li><Link to="/explore" className="hover:text-indigo-600 transition-colors">New Animations</Link></li>
              <li><Link to="/explore" className="hover:text-indigo-600 transition-colors">Free Assets</Link></li>
              <li><Link to="/explore" className="hover:text-indigo-600 transition-colors">Premium</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Creators</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link to="/upload" className="hover:text-indigo-600 transition-colors">Upload Animation</Link></li>
              <li><Link to="/dashboard" className="hover:text-indigo-600 transition-colors">Dashboard</Link></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Guidelines</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Payouts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-neutral-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} AnimHub. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-indigo-600 transition-colors">Status</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Security</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
