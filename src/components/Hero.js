import React from 'react';
import { ChevronDown, Mail } from 'lucide-react';
import TypewriterText from './TypewriterText';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-primary-50 pt-16">
      <div className="container-max section-padding text-center">
        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-primary-600 font-medium text-lg mb-4">
            hello, i'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Alex Wang</span>
          </h1>
          
          {/* Title with Typewriter */}
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-light">
            <TypewriterText 
              phrases={[
                "software engineer",
                "tennis player", 
                "formula one fan",
                "show/movie connoisseur",
                "world traveler"
              ]}
              className="gradient-text font-medium"
              speed={80}
              deleteSpeed={40}
              pauseDuration={1500}
            />
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            computer science & business dual-degree student at University of Michigan. currently interning at discover financial services.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 border-transparent"
            >
              <Mail size={20} />
              get in touch
            </a>
            
            <button 
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2 border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <ChevronDown size={20} />
              see projects
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce-slow text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 