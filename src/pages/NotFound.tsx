import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pastel-waves text-center px-4">
      <h1 className="text-9xl font-black text-gray-900 mb-4 opacity-20">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page not found</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg leading-relaxed">
        Sorry, we couldn't find the page you're looking for. The audio might have faded out, or the link is broken.
      </p>
      <Link 
        to="/" 
        className="bg-gray-900 text-white font-semibold rounded-xl px-8 py-3.5 hover:bg-gray-800 transition-colors shadow-md"
      >
        Return to Home
      </Link>
    </div>
  );
}
