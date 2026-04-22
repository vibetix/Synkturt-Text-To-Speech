import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, AudioLines, ArrowLeft, Eye, EyeOff } from 'lucide-react';

export default function ResetPassword() {
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (strength < 2) {
      alert("Please choose a stronger password");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Password updated successfully!");
    navigate('/login');
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
          <h2 className="text-2xl font-bold text-gray-900">Set new password</h2>
          <p className="text-gray-500 mt-2 text-sm text-center">
            Your new password must be different from previous used passwords.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-gray-400" />
            </div>
            <input 
              required
              type={showPassword ? "text" : "password"} 
              placeholder="New password" 
              className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-12 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})}
            />
            <button 
              type="button"
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          {formData.password.length > 0 && (
            <div className="px-1 mt-[-8px]">
              <div className="flex gap-1 mb-2 h-1.5">
                {[1, 2, 3, 4].map(idx => (
                  <div key={idx} className={`h-full flex-1 rounded-full ${strength >= idx ? strengthColors[strength] : 'bg-gray-200'}`} />
                ))}
              </div>
              <p className="text-xs text-gray-500 font-medium">{strengthLabels[strength]} {strength < 2 && '- Use 8+ characters & symbols'}</p>
            </div>
          )}

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-gray-400" />
            </div>
            <input 
              required
              type={showPassword ? "text" : "password"} 
              placeholder="Confirm password" 
              className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-12 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
              value={formData.confirmPassword}
              onChange={e => setFormData({...formData, confirmPassword: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gray-900 text-white font-semibold rounded-xl py-3.5 mt-2 hover:bg-gray-800 transition-colors shadow-md"
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
}
