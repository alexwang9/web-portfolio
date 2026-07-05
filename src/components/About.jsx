import React from 'react';
import Reveal from './Reveal';

const About = () => {
  const certifications = [
    'AWS Certified Cloud Practitioner (Aug 2024)',
    'IBM Client Engineering Track (Jul 2024)',
  ];

  const organizations = [
    'Sigma Eta Pi',
    'Collaborative Lab for Advancing Work in Space',
    'Michigan Fintech',
  ];

  return (
    <section id="about" className="section-padding">
      <div className="wrap-narrow">
        <Reveal>
          <p className="section-label mb-4">01 — about</p>
          <h2 className="section-heading mb-10">
            Builder first, student second.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid md:grid-cols-5 gap-10">
            <div className="md:col-span-3 space-y-5 text-stone-600 leading-relaxed">
              <p>
                I'm a recent graduate from the University of Michigan with
                a dual degree in computer science and business. I like working across the whole
                stack — from Spring Boot services and MapReduce pipelines to
                React consoles and native macOS apps.
              </p>
              <p>
                Outside of class, I've led a ten-person team shipping a course
                selection platform to 750+ students, interned on Discover's
                core transaction switching platform, and I'm now building
                Telepathy, a semantic search product with paying pilot
                customers.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="border border-stone-200 rounded-lg p-6">
                <h3 className="font-medium text-stone-900 mb-1">
                  University of Michigan
                </h3>
                <p className="text-sm text-stone-600 mb-1">
                  BS Computer Science &amp; BBA
                </p>
                <p className="font-mono text-sm text-stone-400 mb-4">
                  Aug 2022 – May 2026 · GPA 3.8/4.0
                </p>

                <h4 className="section-label mb-2">certifications</h4>
                <ul className="text-sm text-stone-600 space-y-1 mb-4">
                  {certifications.map((cert) => (
                    <li key={cert}>{cert}</li>
                  ))}
                </ul>

                <h4 className="section-label mb-2">organizations</h4>
                <ul className="text-sm text-stone-600 space-y-1">
                  {organizations.map((org) => (
                    <li key={org}>{org}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
