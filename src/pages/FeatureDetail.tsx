import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Mic, FileText, Wrench, Save, Sparkles } from 'lucide-react';

const featureData: Record<string, any> = {
  'voices': {
    title: 'Realistic AI Voices',
    icon: <Mic className="w-8 h-8 text-white" />,
    description: 'Access a diverse library of hyper-realistic voices powered by advanced neural networks.',
    content: [
      'Synkturt uses cutting-edge AI to provide a variety of natural-sounding voices. Whether you are generating content for audiobooks, marketing videos, or accessibility tools, our voices ensure your audience stays engaged.',
      'We offer multiple languages, accents, and tones. You can easily switch between authoritative, friendly, professional, or conversational voices to match the exact context of your application.',
      'Unlike traditional robotic TTS, our engine captures the nuances of human speech including breathing patterns, intonation, and emotional delivery.'
    ]
  },
  'transcripts': {
    title: 'Interactive Transcripts',
    icon: <FileText className="w-8 h-8 text-white" />,
    description: 'Click anywhere in the text to instantly jump the audio playback to that exact word.',
    content: [
      'Our interactive transcripts offer you a unique way to engage with audio content. By synchronizing the text with the generated audio down to the millisecond, we provide powerful playback navigation.',
      'Simply click on any part of the text in the dashboard to jump directly to that section in the audio. As the audio plays, the current spoken word highlights automatically so you never lose your place.',
      'This feature is incredibly useful for proofreading long generated audio files and ensuring pronunciation accuracy.'
    ]
  },
  'player': {
    title: 'Customizable Audio Player',
    icon: <Wrench className="w-8 h-8 text-white" />,
    description: 'Embed and style the audio player exactly how you want it.',
    content: [
      'Our audio player is fully customizable to match your style. You can change colors, styles, and sizes, ensuring a seamless integration that enhances both the overall aesthetic and your user experience.',
      'Whether you want a minimalistic inline play button or a full-featured playback widget with scrubbing, volume control, and speed adjustments, Synkturt adapts to your design language.',
      'Built specifically with modern web standards, it ensures smooth and accessible playback across all major devices and browsers.'
    ]
  },
  'downloads': {
    title: 'Downloadable MP3s',
    icon: <Save className="w-8 h-8 text-white" />,
    description: 'Export your high-quality synthesized speech for offline use, podcasts, or video editing.',
    content: [
      'For your convenience and flexibility, you can instantly download your generated audio files in universally compatible MP3 format. This lets you listen offline whenever you like.',
      'Download standard definition for quick previews, or high-fidelity audio streams for your final production cuts.',
      'Free users get up to 5 downloads per day, while Pro Creator subscribers enjoy unlimited unthrottled exports without any watermarking.'
    ]
  }
};

export default function FeatureDetail() {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !featureData[id]) {
    return <Navigate to="/#features" replace />;
  }

  const feature = featureData[id];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 max-w-4xl w-full mx-auto p-6 md:p-12 pt-24">
        
        <Link to="/#features" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Features
        </Link>

        <div className="bg-white rounded-[32px] p-8 md:p-14 shadow-sm border border-gray-100 relative overflow-hidden">
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
              {feature.icon}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {feature.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed max-w-2xl">
              {feature.description}
            </p>

            <div className="space-y-6 text-lg text-gray-800 leading-relaxed font-medium">
              {feature.content.map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-4">
              <Link to="/app" className="w-full sm:w-auto bg-gray-900 text-white font-bold rounded-xl px-8 py-4 hover:bg-gray-800 transition-colors shadow-md text-center inline-flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" /> Try it now
              </Link>
              <Link to="/pricing" className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 font-bold rounded-xl px-8 py-4 hover:bg-gray-50 transition-colors text-center">
                View Pricing
              </Link>
            </div>
          </div>

          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        </div>

      </div>
    </div>
  );
}
