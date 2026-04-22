import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, CreditCard, LogOut, Download } from 'lucide-react';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6 md:px-12 pb-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <h1 className="text-2xl font-bold mb-6 text-gray-900">Settings</h1>
          <nav className="flex flex-col gap-2">
            <button 
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'profile' ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <User className="w-5 h-5" /> Profile
            </button>
            <button 
              onClick={() => setActiveTab('billing')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'billing' ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <CreditCard className="w-5 h-5" /> Billing & Plan
            </button>
            <button 
              onClick={() => setActiveTab('security')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === 'security' ? 'bg-white text-gray-900 shadow-sm border border-gray-200' : 'text-gray-500 hover:bg-gray-100'}`}
            >
              <Lock className="w-5 h-5" /> Security
            </button>
            
            <div className="my-4 border-t border-gray-200"></div>
            
            <button 
              onClick={() => {
                localStorage.removeItem('isLoggedIn');
                window.location.href = '/login'; // Force a full navigation to clear memory state
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-600 hover:bg-red-50 transition-colors w-full text-left"
            >
              <LogOut className="w-5 h-5" /> Log Out
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {activeTab === 'profile' && (
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6">Profile Information</h2>
              <div className="max-w-md space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Avatar</label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold">JD</div>
                    <button className="text-sm font-semibold border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">Change</button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <input type="text" defaultValue="Jane Doe" className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input type="email" defaultValue="jane@example.com" className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <button className="bg-gray-900 text-white font-semibold rounded-xl px-6 py-3 mt-4 hover:bg-gray-800 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col gap-8">
              <div>
                <h2 className="text-xl font-bold mb-2">Current Plan</h2>
                <div className="p-6 border border-gray-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Free Core</h3>
                    <p className="text-gray-500 text-sm mt-1">Limited features, 5 downloads per day.</p>
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shrink-0">
                    Active
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-4">Usage This Month</h2>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="flex items-center gap-1"><Download className="w-4 h-4" /> Downloads Used</span>
                    <span>3 / 150</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gray-900 h-2.5 rounded-full" style={{ width: '2%' }}></div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Upgrade Plan</h2>
                <div className="bg-gray-900 text-white p-8 rounded-2xl relative overflow-hidden">
                  <div className="relative z-10 md:w-2/3">
                    <h3 className="font-bold text-2xl mb-2">Pro Creator</h3>
                    <p className="text-gray-400 mb-6">Unlock unlimited premium neural voices and unlimited downloads for just $12/mo.</p>
                    <Link to="/billing" className="inline-block bg-white text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                      Upgrade to Pro
                    </Link>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6">Password & Security</h2>
              <div className="max-w-md space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
                </div>
                <button className="bg-gray-900 text-white font-semibold rounded-xl px-6 py-3 mt-4 hover:bg-gray-800 transition-colors">
                  Update Password
                </button>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
}
