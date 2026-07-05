import React from 'react';
import { ArrowDown } from 'lucide-react';
import TypewriterText from './TypewriterText';
import portrait from '../assets/portrait.jpg';

const TYPEWRITER_PHRASES = [
  'software engineer',
  'lego builder',
  'shot glass collector',
  'tennis player',
  'rock climber',
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
        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10 lg:gap-20 animate-fade-in motion-reduce:animate-none">
        <div className="max-w-3xl flex-1">
          <p className="section-label mb-6">
            software engineer · washington, dc
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
            Software Engineer at Capital One. Recent graduate from the University of
            Michigan with Computer Science &amp; Business dual-degree. 
            Previously at Discover Financial Services.
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

        <img
          src={portrait}
          alt="Alexander Wang"
          className="w-44 sm:w-52 lg:w-80 aspect-[3/4] object-cover rounded-2xl border border-stone-200 shrink-0"
        />
        </div>
      </div>
    </section>
  );
};

export default Hero;
