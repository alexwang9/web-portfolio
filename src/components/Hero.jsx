import React from 'react';
import { ArrowDown } from 'lucide-react';
import TypewriterText from './TypewriterText';

const TYPEWRITER_PHRASES = [
  'software engineer',
  'tennis player',
  'formula one fan',
  'show/movie connoisseur',
  'world traveler',
];

const Hero = () => {
  const scrollTo = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="wrap-wide px-6 sm:px-8 w-full">
        <div className="max-w-3xl animate-fade-in motion-reduce:animate-none">
          <p className="section-label mb-6">
            software engineer · ann arbor, mi
          </p>

          <h1 className="font-serif text-5xl md:text-7xl text-stone-900 tracking-tight mb-6">
            Alexander Wang
          </h1>

          <h2 className="text-xl md:text-2xl text-stone-500 font-light mb-8">
            <TypewriterText
              phrases={TYPEWRITER_PHRASES}
              className="text-accent-700 font-normal"
              speed={80}
              deleteSpeed={40}
              pauseDuration={1500}
            />
          </h2>

          <p className="text-lg text-stone-600 leading-relaxed mb-12 max-w-2xl">
            Computer science &amp; business dual-degree senior at the University of
            Michigan. Previously at Discover Financial Services — currently
            building{' '}
            <span className="font-medium text-stone-900">Telepathy</span>, a
            semantic search layer for everything on your Mac.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => scrollTo('#contact')}
              className="bg-stone-900 text-stone-50 px-7 py-3 rounded font-medium hover:bg-stone-700 transition-colors duration-200"
            >
              get in touch
            </button>
            <button
              onClick={() => scrollTo('#projects')}
              className="link-quiet inline-flex items-center gap-1.5 font-medium"
            >
              see projects <ArrowDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
