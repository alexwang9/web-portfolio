import React from 'react';
import Reveal from './Reveal';

const workExperience = [
  {
    title: 'Incoming Software Engineer',
    company: 'Capital One',
    location: 'McLean, VA',
    period: 'Jul 2026 – Present',
    achievements: [
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Discover Financial Services',
    location: 'Riverwoods, IL',
    period: 'Jun – Aug 2025',
    achievements: [
      "Designed full-stack replacement for Toolbox, Discover's legacy configuration management application for the core transaction switching platform",
      'Built web console (React + TS/Tailwind, Vite, virtualized grid) with Cypress unit, component, & E2E testing; now reference design for team-wide UI migration used by 10+ engineers, expected to cut future build effort by 50%',
      'Wrote Spring Boot REST APIs with 100% JUnit coverage and a script auto-populating MongoDB with 1200+ config entries from legacy Oracle DB, cutting deployment time to seconds',
    ],
  },
  {
    title: 'Software Engineering Lead',
    company: 'Collage',
    location: 'Ann Arbor, MI',
    period: 'Apr 2024 – Apr 2025',
    achievements: [
      'Developed end-to-end social networking course selection platform in Next.js and Flask as lead developer and project manager, scaling to 750+ users within 3 weeks of launch',
      'Shipped Google OAuth, social graph, schedule builder, activity feed; integrated Stripe metered billing in under 3 days',
      'Migrated 1000+ lines from React SPA to Next.js 14 App Router, cutting Time-to-First-Byte by 38%; managed a cross-functional team of 10',
      'Managed a cross-functional team of 10 members over 1 year as a full time college student, coordinating development, design, and deployment to deliver the platform before Fall 2025 course registration',
    ],
  },
  {
    title: 'Software Engineering Extern',
    company: 'IBM Accelerate',
    location: 'Los Angeles, CA',
    period: 'May – Jul 2024',
    achievements: [
      'Led team of 4 building a full-stack virtual assistant for an insurance call center using IBM watsonx; designed 50+ intent-response flows across 9 inquiry categories with a 92% simulated resolution rate',
      'Incorporated watsonx.ai NLP APIs for sentiment analysis, entity extraction, and summarization; prompt engineering cut hallucination rate by 35% and improved intent classification accuracy by 20%',
    ],
  },
  // {
  //   title: 'Coding Instructor',
  //   company: 'iD Tech Camps',
  //   location: 'Los Angeles, CA',
  //   period: 'Jun – Aug 2023',
  //   achievements: [
  //     'Expanded upon curriculum materials for 5 different courses tailored to various skill levels, taught topics such as web development with HTML, CSS, and JS, web scraping with Beautiful Soup, PyGame, and version control with Git',
  //     'Provided individualized guidance and mentorship to camp participants to drive positive feedback from over 80 students and parents in post camp surveys, leading to a 70% class retention rate',
  //   ],
  // },
  // {
  //   title: 'Product Management Intern',
  //   company: 'Extend Enterprises',
  //   location: 'New York, NY',
  //   period: 'May – Jun 2023',
  //   achievements: [
  //     'Conducted market research and competitive analysis on 7 commercial payment platforms in Fintech space, adding 5 new companies into company documentation and developing 2-3 new feature sections',
  //     'Worked with the platform team for 3 sprints and wrote 20+ user stories for new Shared Budgets platform feature, leading to the successful rollout of the key feature within 4 months',
  //   ],
  // },
];

const leadershipExperience = [
  {
    title: 'VP of New Member Education',
    company: 'Sigma Eta Pi Entrepreneurship Fraternity',
    location: 'University of Michigan',
    period: 'Jan 2026 – Apr 2026',
    achievements: [
      'Designed and led a semester-long entrepreneurship and professional-development curriculum for a 19-member cohort organized into 5 venture teams, spanning problem identification, customer discovery, and solution design',
      'Launched an inaugural venture studio (SPPS) in which each team validated a startup concept through 12+ customer discovery interviews, built a feature set, competitive map, and business model, and pitched to judges in a capstone competition awarding $750 in prizes',
    ],
  },
  // {
  //   title: 'Augmented Reality Developer',
  //   company: 'Collaborative Lab for Advancing Work in Space',
  //   location: 'University of Michigan',
  //   period: 'Aug 2023 – Dec 2024',
  //   achievements: [
  //     'Developed back-end task-list functionality in C# and Unity for the NASA SUITS challenge submission',
  //     'Created the DCU AR front-end and UI for mission-critical astronaut information',
  //   ],
  // },
  {
    title: 'VP of Professional Development',
    company: 'Sigma Eta Pi Entrepreneurship Fraternity',
    location: 'University of Michigan',
    period: 'Jan 2023 – Apr 2023',
    achievements: [
      'Organized 3-day professional trek to Chicago for 70+ members, connecting with 50+ companies across VC, consulting, and tech',
      'Coordinated recruiting and resume-review fair for 22 new members from 5 different fields',
    ],
  },
  {
    title: 'Business Team Lead',
    company: 'Michigan Fintech',
    location: 'University of Michigan',
    period: 'Oct 2022 – Mar 2023',
    achievements: [
      "Led team of 10 building a robo-advisor tailoring portfolios to users' investment objectives, risk profile, and time horizon",
      'Presented final product at the annual Ross FinTech conference',
    ],
  },
];

const ExperienceEntry = ({ entry }) => (
  <div className="grid md:grid-cols-[170px,1fr] gap-2 md:gap-8 py-8 border-t border-stone-200">
    <p className="font-mono text-sm text-stone-400 pt-0.5">{entry.period}</p>
    <div>
      <h3 className="text-lg font-medium text-stone-900">{entry.title}</h3>
      <p className="text-sm text-stone-500 mb-3">
        {entry.company} · {entry.location}
      </p>
      <ul className="space-y-2">
        {entry.achievements.map((achievement, index) => (
          <li
            key={index}
            className="text-sm text-stone-600 leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-stone-400"
          >
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="wrap-narrow">
        <Reveal>
          <p className="section-label mb-4">02 — experience</p>
          <h2 className="section-heading mb-12">Where I've worked</h2>
        </Reveal>

        <div>
          {workExperience.map((entry) => (
            <Reveal key={`${entry.company}-${entry.period}`}>
              <ExperienceEntry entry={entry} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="section-label mt-16 mb-2">leadership</p>
        </Reveal>
        <div>
          {leadershipExperience.map((entry) => (
            <Reveal key={`${entry.company}-${entry.period}`}>
              <ExperienceEntry entry={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
