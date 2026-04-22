import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, AudioLines, ArrowLeft } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pastel-waves px-4 py-20 relative overflow-hidden">
      <div className="bg-white/80 backdrop-blur-xl w-full max-w-md rounded-3xl shadow-xl border border-white/50 p-8 sm:p-10 relative z-10">
        
        <Link to="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to login
        </Link>

        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-4">
            <AudioLines className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Forgot password?</h2>
          <p className="text-gray-500 mt-2 text-sm text-center">
            No worries, we'll send you reset instructions.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input 
                required
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-gray-900 text-white font-semibold rounded-xl py-3.5 mt-2 hover:bg-gray-800 transition-colors shadow-md"
            >
              Reset password
            </button>
          </form>
        ) : (
          <div className="text-center bg-green-50 text-green-800 rounded-xl p-6 border border-green-100">
            <h3 className="font-bold mb-2">Check your email</h3>
            <p className="text-sm">We've sent a password reset link to <strong>{email}</strong>.</p>
            <p className="text-sm mt-4 text-green-700">Did not receive the email? <button onClick={() => setSubmitted(false)} className="underline font-semibold">Click to resend</button></p>
          </div>
        )}
      </div>
    </div>
  );
}
