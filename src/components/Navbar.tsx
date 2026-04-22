import { Link, useLocation } from 'react-router-dom';
import { AudioLines } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Features', path: '/#features' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Contact Us', path: '/#contact' },
  ];

  return (
    <nav className={`w-full z-50 ${isHome ? 'absolute top-0' : 'bg-white border-b border-gray-100'} px-6 py-6 md:px-12 flex items-center justify-between`}>
      <Link to="/" className="flex flex-col items-center gap-1 group">
        <AudioLines className="w-10 h-10 text-gray-900 group-hover:scale-105 transition-transform" strokeWidth={2} />
        <span className="text-xl font-bold tracking-tight text-gray-900">Synkturt</span>
      </Link>

      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className={`text-[15px] font-semibold text-gray-900 hover:opacity-70 transition-opacity ${
              location.pathname === '/' && link.path === '/' ? 'border-b-2 border-gray-900 pb-1' : ''
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link to="/login" className="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-800 transition-colors text-[15px] shadow-sm">
          Sign In
        </Link>
      </div>
    </nav>
  );
}
