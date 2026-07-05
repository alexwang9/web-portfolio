import React from 'react';
import Reveal from './Reveal';

const skillCategories = [
  {
    title: 'languages',
    skills: ['JavaScript/TypeScript', 'C++', 'Python', 'Java', 'SQL', 'C#'],
  },
  {
    title: 'frameworks',
    skills: [
      'React',
      'Next.js',
      'Spring Boot',
      'Node.js',
      'Flask',
      'Swift',
      'TensorFlow',
      'scikit-learn',
      'Pandas',
    ],
  },
  {
    title: 'tools & cloud',
    skills: [
      'AWS (EC2, S3)',
      'GitHub Actions',
      'Git',
      'Jira',
      'JUnit',
      'Cypress',
    ],
  },
  {
    title: 'databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'OracleDB'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="wrap-narrow">
        <Reveal>
          <p className="section-label mb-4">04 — skills</p>
          <h2 className="section-heading mb-12">What I work with</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 75}>
              <div className="border-t border-stone-200 pt-5">
                <h3 className="section-label mb-4">{category.title}</h3>
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-mono text-sm text-stone-600 border border-stone-200 rounded px-2.5 py-1"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
