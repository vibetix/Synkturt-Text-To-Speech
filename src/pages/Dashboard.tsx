import { useState, useEffect } from 'react';
import { Play, Pause, Square, Download, FileAudio, RefreshCw, Loader2, Clock } from 'lucide-react';

const GEMINI_VOICES = ['Puck', 'Charon', 'Kore', 'Fenrir', 'Zephyr'];

export default function Dashboard() {
  const [text, setText] = useState('Welcome to Synkturt. This is an interactive text to speech demonstration utilizing hyper-realistic neural voices powered by Gemini.');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<string>('Kore');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [words, setWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [generations, setGenerations] = useState<{id: number, text: string, voice: string, created_at: string}[]>([]);

  const generateAudio = async () => {
    if (!text.trim()) return;
    setIsGenerating(true);
    setAudioUrl(null);
    setCurrentWordIndex(-1);

    // Simulate API call delay
    setTimeout(() => {
      alert("This is a frontend showcase. In the full app, this would generate audio using AI.");
      setIsGenerating(false);
    }, 2000);
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setIsPaused(true);
    } else {
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const stop = () => {
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentWordIndex(-1);
  };

  const simulateDownload = () => {
    alert("This is a frontend showcase. In the full app, this would download the generated audio.");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6 md:px-12 pb-12">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
        
        {/* Editor Side */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col h-[70vh]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Input Text</h2>
            {GEMINI_VOICES.length > 0 && (
              <select 
                className="bg-gray-100 border-none rounded-lg px-3 py-1.5 text-sm font-medium focus:ring-2 focus:ring-gray-900 outline-none"
                value={selectedVoice}
                onChange={e => setSelectedVoice(e.target.value)}
              >
                {GEMINI_VOICES.map(v => (
                  <option key={v} value={v}>
                    {v} (Neural)
                  </option>
                ))}
              </select>
            )}
          </div>
          
          <textarea
            className="flex-1 w-full resize-none border-none bg-gray-50 rounded-2xl p-6 text-gray-800 text-lg leading-relaxed focus:outline-none focus:ring-2 focus:ring-gray-200"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
          />
          
          <div className="mt-4 flex items-center justify-between px-2">
             <p className="text-sm font-medium text-gray-500">
                Cost: <span className="text-gray-900">{text.length}</span> tokens
             </p>
             <div className="flex items-center gap-3">
               <p className="text-sm font-medium text-gray-500">
                  Balance: <span className="text-blue-600 font-bold">1000</span> tokens
               </p>
               <button className="text-xs font-bold text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors">
                  Top Up
               </button>
             </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-2">
              <button 
                onClick={togglePlay}
                disabled={!text || isGenerating}
                className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[140px] justify-center"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    {isPlaying && !isPaused ? <Pause className="w-5 h-5" fill="currentColor" /> : <Play className="w-5 h-5" fill="currentColor" />}
                    {isPlaying && !isPaused ? 'Pause' : 'Play Audio'}
                  </>
                )}
              </button>
              
              <button 
                onClick={stop}
                disabled={!isPlaying && !isPaused}
                className="p-3 text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                title="Stop Navigation"
              >
                <Square className="w-5 h-5" fill="currentColor" />
              </button>
            </div>

            <button 
              onClick={simulateDownload}
              disabled={!audioUrl}
              className="flex items-center gap-2 bg-white border border-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              <Download className="w-4 h-4" />
              Export WAV
            </button>
          </div>
        </div>

        {/* Transcript Side */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-[70vh] flex flex-col">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <FileAudio className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Interactive Transcript</h2>
              <p className="text-sm text-gray-500">Click any word to jump to that timestamp</p>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
            {words.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-gray-400">
                <RefreshCw className="w-12 h-12 mb-4 opacity-20" />
                <p>Waiting for text input...</p>
              </div>
            ) : (
              <div className="text-xl leading-loose">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className={`inline-block mr-1.5 px-0.5 rounded transition-colors ${
                      index === currentWordIndex 
                        ? 'bg-blue-200 text-blue-900 border-b-2 border-blue-500 font-medium' 
                        : 'text-gray-700'
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* History Section */}
      <div className="max-w-5xl mx-auto mt-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Recent Generations</h2>
              <p className="text-sm text-gray-500">Your past text-to-speech items</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {generations.length === 0 ? (
              <p className="text-gray-400 text-center py-6">No generations found.</p>
            ) : (
              generations.map((gen) => (
                <div 
                  key={gen.id} 
                  onClick={() => {
                    setText(gen.text);
                    setSelectedVoice(gen.voice);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-sm hover:border-blue-100 transition-all cursor-pointer flex justify-between items-start"
                >
                  <div className="flex-1 overflow-hidden pr-4">
                    <p className="text-gray-900 font-medium truncate mb-1">"{gen.text}"</p>
                    <p className="text-sm text-gray-500">
                      Voice: <span className="font-semibold text-gray-700">{gen.voice}</span> • {new Date(gen.created_at).toLocaleString()}
                    </p>
                  </div>
                  <button className="text-blue-600 font-semibold text-sm px-3 py-1.5 bg-blue-50 rounded-lg whitespace-nowrap">
                    Restore
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
