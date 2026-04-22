import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Github } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('This is a frontend showcase. In the full app, this would authenticate the user.');
  };

  const handleGithubLogin = () => {
    alert('This is a frontend showcase. In the full app, this would authenticate via GitHub.');
  };

  return (
    <div className="min-h-screen bg-pastel-waves flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to your Synkturt account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-sm font-medium text-gray-900 hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors mt-6"
            >
              Sign In
            </button>
          </form>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <button
            onClick={handleGithubLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </button>

          <p className="text-center text-gray-600 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-gray-900 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
