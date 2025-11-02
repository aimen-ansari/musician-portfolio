import { Music, Piano, Headphones } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.05),transparent_50%)]"></div>

      <div className="absolute top-20 left-10 animate-pulse">
        <Music className="w-16 h-16 text-amber-500/20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
        <Piano className="w-20 h-20 text-amber-500/20" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-pulse delay-500">
        <Headphones className="w-12 h-12 text-amber-500/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500"></div>
              <Music2 className="w-12 h-12 text-amber-500" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500"></div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
            Welcome to My
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
              Musical Journey
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate musician specializing in piano and various instruments,
            creating harmonies that touch the soul
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 font-semibold rounded-lg hover:from-amber-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/50"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-slate-800 text-white font-semibold rounded-lg border-2 border-amber-500/50 hover:border-amber-500 hover:bg-slate-700 transform hover:scale-105 transition-all duration-300"
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-amber-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const Music2 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

export default Hero;
