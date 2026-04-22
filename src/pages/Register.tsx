import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Github } from 'lucide-react';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }
    
    alert('This is a frontend showcase. In the full app, this would register a new user.');
  };
  const calculateStrength = (pwd: string) => {
    let score = 0;
    if (pwd.length > 0) score += 1;
    if (pwd.length >= 8) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;
    return score;
  };

  const strength = calculateStrength(formData.password);
  const strengthLabels = ['Enter password', 'Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['bg-gray-200', 'bg-red-400', 'bg-orange-400', 'bg-blue-400', 'bg-green-500'];

  const handleGithubSignup = () => {
    alert('This is a frontend showcase. In the full app, this would register via GitHub.');
  };

  return (
    <div className="min-h-screen bg-pastel-waves flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Join Synkturt to start generating audio</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm font-semibold rounded-xl text-center border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Create a strong password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900"
                  required
                />
              </div>
              {formData.password.length > 0 && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1 h-1.5">
                    {[1, 2, 3, 4].map((idx) => (
                      <div
                        key={idx}
                        className={`h-full flex-1 rounded-full ${
                          strength >= idx ? strengthColors[strength] : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-500">
                    {strengthLabels[strength]}
                    {strength < 2 && ' - Use 8+ characters & symbols'}
                  </p>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors mt-6"
            >
              Create Account
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
            onClick={handleGithubSignup}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </button>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-gray-900 hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
