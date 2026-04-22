import { Link } from 'react-router-dom';
import { Mic, Save, Wrench, FileText, LayoutGrid } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative w-full h-screen min-h-[600px] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20"
        style={{ 
          backgroundImage: `url('/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h1 className="text-6xl md:text-8xl lg:text-[110px] font-medium tracking-tight text-gray-900 mb-6 drop-shadow-sm leading-none">
          Welcome to Synkturt
        </h1>
        <p className="text-2xl md:text-3xl lg:text-[34px] font-medium text-gray-900 mb-12 max-w-4xl tracking-tight leading-tight">
          Transform your text into natural-sounding speech.
        </p>
        <Link
          to="/app"
          className="bg-white text-gray-900 text-lg md:text-xl font-semibold border-2 border-gray-900 px-10 py-4 rounded-xl shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:bg-black hover:text-white hover:border-white hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all w-full max-w-xs z-10"
        >
          Get Started
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About Synkturt</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Synkturt empowers creators, learners, and professionals by providing high-quality, natural-sounding voice synthesis from any text content. Whether you need narration for a video, accessible audio versions of articles, or quick voiceovers, our lightweight tool delivers fast and reliable results directly in your browser.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 md:px-12 bg-white border-y border-gray-100">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Realistic AI Voices - Spans 2 columns */}
            <div className="md:col-span-2 p-8 bg-gray-50 rounded-[20px] border-[2px] border-black shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] flex flex-col items-start transition-transform hover:-translate-y-1">
              <div className="bg-white rounded-[14px] w-14 h-14 flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <Mic className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Realistic AI Voices</h3>
              <p className="text-[15px] text-gray-800 leading-relaxed font-medium mb-6">
                Synkturt uses cutting-edge AI to provide a variety of natural-sounding voices. Available in multiple languages and accents, these voices are designed to suit different contexts and preferences, making the listening experience enjoyable and relatable.
              </p>
              <Link to="/features/voices" className="mt-auto text-blue-900 font-bold text-sm tracking-wide">
                Learn More {'>'}{'>'}
              </Link>
            </div>

            {/* Interactive Transcripts - Spans 1 column */}
            <div className="md:col-span-1 p-8 bg-gray-50 rounded-[20px] border-[2px] border-black shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] flex flex-col items-start transition-transform hover:-translate-y-1">
              <div className="bg-white rounded-[14px] w-14 h-14 flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <FileText className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Interactive Transcripts</h3>
              <p className="text-[15px] text-gray-800 leading-relaxed font-medium mb-6">
                Our interactive transcripts offer you a unique way to engage with audio content. Simply click on any part of the text to jump directly to that section in the audio, making navigation easier and more enjoyable.
              </p>
              <Link to="/features/transcripts" className="mt-auto text-blue-900 font-bold text-sm tracking-wide">
                Learn More {'>'}{'>'}
              </Link>
            </div>

            {/* Customizable Audio Player - Spans 1 column */}
            <div className="md:col-span-1 p-8 bg-gray-50 rounded-[20px] border-[2px] border-black shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] flex flex-col items-start transition-transform hover:-translate-y-1">
              <div className="bg-white rounded-[14px] w-14 h-14 flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <Wrench className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Customizable Audio Player</h3>
              <p className="text-[15px] text-gray-800 leading-relaxed font-medium mb-6">
                Our audio player is fully customizable to match your style. You can change colors, styles, and sizes, ensuring a seamless integration that enhances both the overall aesthetic and your user experience
              </p>
              <Link to="/features/player" className="mt-auto text-blue-900 font-bold text-sm tracking-wide">
                Learn More {'>'}{'>'}
              </Link>
            </div>

            {/* Downloadable MP3s - Spans 1 column */}
            <div className="md:col-span-1 p-8 bg-gray-50 rounded-[20px] border-[2px] border-black shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] flex flex-col items-start transition-transform hover:-translate-y-1">
              <div className="bg-white rounded-[14px] w-14 h-14 flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                <Save className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">Downloadable MP3s</h3>
              <p className="text-[15px] text-gray-800 leading-relaxed font-medium mb-6">
                For your convenience and flexibility, you can download audio files in MP3 format. This lets you listen offline whenever you like, whether you're on the go or without internet access.
              </p>
              <Link to="/features/downloads" className="mt-auto text-blue-900 font-bold text-sm tracking-wide">
                Learn More {'>'}{'>'}
              </Link>
            </div>

            {/* Discover More - Spans 1 column */}
            <Link to="/app" className="md:col-span-1 p-8 bg-black rounded-[20px] border-[2px] border-black shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1 group">
              <div className="bg-transparent rounded-2xl w-16 h-16 flex items-center justify-center mb-4 border border-white/30 group-hover:bg-white/10 transition-colors">
                <LayoutGrid className="w-8 h-8 text-white stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold text-white">Discover More</h3>
            </Link>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Simple Pricing</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="border border-gray-200 rounded-3xl p-10 flex flex-col items-center text-center shadow-sm">
            <h3 className="text-2xl font-bold mb-2">Free Core</h3>
            <p className="text-5xl font-black mb-6">$0<span className="text-lg text-gray-500 font-normal">/mo</span></p>
            <p className="text-gray-600 mb-8 max-w-[200px]">Perfect for individuals and quick conversions.</p>
            <ul className="text-left space-y-3 mb-10 w-full max-w-[250px]">
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Unlimited standard voices</li>
              <li className="flex items-center gap-3"><span className="text-green-500">✓</span> 5 downloads / day</li>
            </ul>
            <Link to="/register" className="mt-auto w-full border-2 border-gray-900 rounded-xl py-3 font-semibold hover:bg-gray-50 transition-colors">Sign Up</Link>
          </div>
          <div className="bg-gray-900 text-white rounded-3xl p-10 flex flex-col items-center text-center shadow-xl transform md:-translate-y-4">
            <h3 className="text-2xl font-bold mb-2">Pro Creator</h3>
            <p className="text-5xl font-black mb-6">$12<span className="text-lg text-gray-400 font-normal">/mo</span></p>
            <p className="text-gray-400 mb-8 max-w-[200px]">For professionals needing regular outputs.</p>
            <ul className="text-left space-y-3 mb-10 w-full max-w-[250px]">
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Premium neural voices</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Unlimited downloads</li>
              <li className="flex items-center gap-3"><span className="text-green-400">✓</span> Advanced voice tuning</li>
            </ul>
            <Link to="/register" className="mt-auto w-full bg-white text-gray-900 rounded-xl py-3 font-semibold hover:bg-gray-100 transition-colors">Start 7-Day Trial</Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
          <p className="text-xl text-gray-600 mb-10">Have questions? We'd love to hear from you.</p>
          <form className="flex flex-col gap-4 max-w-xl mx-auto text-left" onSubmit={e => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea className="w-full border border-gray-300 rounded-xl p-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help?"></textarea>
            </div>
            <button type="submit" className="bg-gray-900 text-white font-semibold rounded-xl py-4 mt-2 hover:bg-gray-800 transition-colors">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 text-sm border-t border-gray-100 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
          <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          <span className="hidden md:inline text-gray-300">•</span>
          <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
        </div>
        <p>© {new Date().getFullYear()} Synkturt. All rights reserved.</p>
      </footer>
    </div>
  );
}
