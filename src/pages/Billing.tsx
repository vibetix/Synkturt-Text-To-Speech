import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Zap } from 'lucide-react';

export default function Billing() {
  const handleCheckout = (packageId: string) => {
    alert(`This is a frontend showcase. In the full app, this would initiate checkout for ${packageId} package.`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-12">
      <div className="flex-1 max-w-5xl w-full mx-auto p-6 md:p-12 flex flex-col items-center">
        
        <div className="w-full flex items-center justify-between mb-8">
          <Link to="/app" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
          <div className="text-sm font-semibold px-4 py-1.5 bg-blue-50 text-blue-700 rounded-lg border border-blue-100">
            Balance: {user?.credits?.toLocaleString() || 0} tokens
          </div>
        </div>

        <div className="text-center mb-12">
           <h1 className="text-4xl font-bold mb-4">Top Up Your Neural Tokens</h1>
           <p className="text-xl text-gray-500 max-w-2xl mx-auto">
             1 token equals 1 character generated. Purchase packages to keep unleashing hyper-realistic AI voices.
           </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
           
           {/* Basic Package */}
           <div className="bg-white rounded-3xl p-8 border-[2px] border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all flex flex-col relative group">
             <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
               <Compass className="w-6 h-6" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter Pack</h3>
             <div className="flex items-baseline gap-2 mb-6">
               <span className="text-4xl font-bold">$5.00</span>
               <span className="text-gray-500 font-medium">USD</span>
             </div>
             
             <ul className="space-y-3 mb-8 flex-1">
               <li className="flex items-center gap-2 text-gray-700 font-medium">
                 <Check className="w-5 h-5 text-gray-900" /> 50,000 Neural Tokens
               </li>
               <li className="flex items-center gap-2 text-gray-700 font-medium">
                 <Check className="w-5 h-5 text-gray-900" /> Standard Generation Priority
               </li>
             </ul>

             <button 
               onClick={() => handleCheckout('basic')}
               disabled={loading !== null}
               className="w-full bg-white border-2 border-gray-900 text-gray-900 font-bold py-4 rounded-xl hover:bg-gray-900 hover:text-white transition-colors disabled:opacity-50"
             >
               {loading === 'basic' ? 'Starting...' : 'Buy Starter Pack'}
             </button>
           </div>

           {/* Pro Package */}
           <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl relative flex flex-col transform hover:-translate-y-1 transition-transform">
             <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm">
               Most Popular
             </div>
             
             <div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 border border-white/20">
               <Zap className="w-6 h-6 fill-white" />
             </div>
             <h3 className="text-2xl font-bold text-white mb-2">Creator Pack</h3>
             <div className="flex items-baseline gap-2 mb-6 text-white">
               <span className="text-4xl font-bold">$20.00</span>
               <span className="text-gray-300 font-medium">USD</span>
             </div>
             
             <ul className="space-y-3 mb-8 flex-1 text-gray-300">
               <li className="flex items-center gap-2 font-medium">
                 <Check className="w-5 h-5 text-blue-400" /> 250,000 Neural Tokens
               </li>
               <li className="flex items-center gap-2 font-medium">
                 <Check className="w-5 h-5 text-blue-400" /> High-Speed Generation Queue
               </li>
               <li className="flex items-center gap-2 font-medium">
                 <Check className="w-5 h-5 text-blue-400" /> Save 20% vs Starter
               </li>
             </ul>

             <button 
               onClick={() => handleCheckout('pro')}
               disabled={loading !== null}
               className="w-full bg-blue-600 border-2 border-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 hover:border-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all disabled:opacity-50"
             >
               {loading === 'pro' ? 'Starting...' : 'Buy Creator Pack'}
             </button>
           </div>
        </div>

        {/* Info */}
        <div className="mt-16 flex items-start gap-4 p-6 bg-yellow-50 rounded-2xl max-w-3xl w-full border border-yellow-200/50">
           <HelpCircle className="w-6 h-6 text-yellow-600 shrink-0" />
           <p className="text-sm text-yellow-800 leading-relaxed font-medium">
             Because you are using local architecture, payment gateways require a <strong>Stripe Secret API Key</strong> inside your system settings to process payments through standard means. However, the system is designed to trigger a mock API redirect, adding funds directly without requiring a real credit card!
           </p>
        </div>

      </div>
    </div>
  );
}
