import React from 'react';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';
import Reveal from './Reveal';

const socialLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    href: 'mailto:alxswang@umich.edu',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/alexscwang',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com/alexwang9',
  },
  {
    icon: <FileText size={20} />,
    label: 'Resume',
    href: '/Alexander_Wang_Resume.pdf',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="wrap-narrow text-center">
        <Reveal>
          <p className="section-label mb-4">05 — contact</p>
          <h2 className="section-heading mb-6">Let's connect</h2>
          <p className="text-stone-600 leading-relaxed max-w-xl mx-auto mb-10">
            I'm graduating in May 2026 and open to full-time software
            engineering roles, collaborations, and interesting projects.
          </p>

          <a
            href="mailto:alxswang@umich.edu"
            className="font-serif text-2xl md:text-3xl text-stone-900 underline decoration-stone-300 underline-offset-8 hover:decoration-accent-600 transition-colors"
          >
            alxswang@umich.edu
          </a>

          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                className="text-stone-400 hover:text-stone-900 transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      <footer className="mt-24 pt-8 border-t border-stone-200">
        <div className="wrap-wide flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-mono text-xs text-stone-400">
            © 2026 Alexander Wang
          </p>
          <p className="font-mono text-xs text-stone-400">
            ann arbor, mi · built with react &amp; tailwind
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
