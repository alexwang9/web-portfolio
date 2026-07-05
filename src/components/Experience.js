import React from 'react';
import { Briefcase, Users, Calendar } from 'lucide-react';

const Experience = () => {

  const workExperience = [
    {
      title: 'Software Engineering Intern',
      company: 'Discover Financial Services',
      location: 'Riverwoods, IL',
      period: 'Jun 2025 – Present',
      achievements: [
        'Migrated 2000+ configs from Oracle DB to MongoDB and released Spring Boot REST APIs (GET/POST/PATCH) with 100% JUnit coverage, cutting deployment time from hours to seconds',
        'Architected \'Toolbox\' web console (React + TS/Tailwind, virtualized grid, 25-row pagination) and Cypress E2E gates; now reference design for team-wide UI migration',
        'Used daily by 120+ engineers across Payments and Network Authorizations org and expected to cut future build effort by 50%',
        'Patched 10 critical SVEs across 19 micro-frontends and 11 Java services, eliminating every high-severity finding',
        'Onboarded five engineers by creating CI/CD playbook and giving in-person demos, reducing ramp-up by 10 hours'
      ]
    },
    {
      title: 'Co-Founder',
      company: 'Stealth Startup',
      location: 'Ann Arbor, MI',
      period: 'May 2025 – Present',
      achievements: [
        'Building AI agent that converts GitHub PR and Salesforce deltas into structured Notion docs via OpenAI & Claude functions',
        'Conducted 20+ customer discovery calls and landed 1 active design-partner pilot'
      ]
    },
    {
      title: 'Co-Founder & COO',
      company: 'Collage',
      location: 'Ann Arbor, MI',
      period: 'Apr 2024 – Apr 2025',
      achievements: [
        'Developed end-to-end social networking course-selection platform, scaling to over 750 users within 3 weeks of launch',
        'Shipped Google OAuth, social graph, schedule builder, activity feed, and released Stripe metered billing in < 3 days',
        'Migrated 1000+ LOC from React SPA to Next.js 14 App Router, cutting Time-to-First-Byte by 38%',
        'Managed a cross-functional team of 10 members over 1 year as a full-time college student'
      ]
    },
    {
      title: 'Software Engineering Extern',
      company: 'IBM Accelerate',
      location: 'Los Angeles, CA',
      period: 'May 2024 – Jul 2024',
      achievements: [
        'Led team of 4 to develop a full-stack virtual assistant for an insurance call center using IBM watsonx',
        'Designed 50+ intent-response flows to handle 9 high-volume inquiry categories; achieved 92% simulated resolution rate',
        'Enhanced backend with watsonx.ai NLP APIs for sentiment analysis, entity extraction, and summarization',
        'Applied prompt-engineering techniques to reduce hallucination rate by 35% and improve intent-classification accuracy by 20%'
      ]
    },
    {
      title: 'Coding Instructor',
      company: 'iD Tech Camps',
      location: 'Los Angeles, CA',
      period: 'Jun 2023 – Aug 2023',
      achievements: [
        'Expanded curriculum materials for 5 different courses covering HTML/CSS/JS, web scraping with Beautiful Soup, PyGame, and Git',
        'Provided individualized guidance and mentorship, earning positive feedback from 80+ students and parents',
        'Achieved 70% class-retention rate through engaging teaching methods'
      ]
    },
    {
      title: 'Product Management Intern',
      company: 'Extend Enterprises',
      location: 'New York, NY',
      period: 'May 2023 – Jun 2023',
      achievements: [
        'Conducted market research and competitive analysis on 7 commercial payment platforms',
        'Added 5 companies into documentation and developed 2–3 new feature sections',
        'Worked with platform team for 3 sprints and wrote 20+ user stories for Shared Budgets feature'
      ]
    }
  ];

  const leadershipExperience = [
    {
      title: 'VP of Professional Development',
      company: 'Sigma Eta Pi Entrepreneurship Group',
      location: 'University of Michigan',
      period: '2023 – Present',
      achievements: [
        'Reached out to 15+ founders and arranged speaker events with industry leaders',
        'Organized 3-day professional trek to Chicago for 70+ members, connecting with 50+ companies including VC, consulting, and tech firms',
        'Coordinated recruiting and résumé-review fair for 22 new members, bringing in 14 students from 5 different fields'
      ]
    },
    {
      title: 'Augmented Reality Team Developer',
      company: 'Collaborative Lab for Advancing Work in Space',
      location: 'University of Michigan',
      period: 'Aug 2023 – Present',
      achievements: [
        'Developed back-end task-list functionality using C# and Unity for NASA SUITS challenge submission',
        'Built task-list JSON sender tester to update astronaut instances with added, deleted, or edited tasks',
        'Created DCU (Display and Control Unit) AR front-end and UI for mission-critical astronaut information'
      ]
    },
    {
      title: 'Business Team Lead',
      company: 'Michigan Fintech',
      location: 'University of Michigan',
      period: 'Oct 2022 – Mar 2023',
      achievements: [
        'Led team of 10 students to devise and build a robo-advisor that tailors portfolios to users\' investment objectives',
        'Developed solution considering risk profile and time horizon factors',
        'Presented final product at the annual Ross FinTech conference'
      ]
    }
  ];

  // Manually order experiences with custom positioning
  const allExperiences = [
    // Current roles first
    { ...workExperience[0], type: 'work', icon: <Briefcase size={16} /> }, // Discover
    { ...workExperience[1], type: 'work', icon: <Briefcase size={16} /> }, // Stealth Startup
    
    // Leadership roles
    { ...leadershipExperience[0], type: 'leadership', icon: <Users size={16} /> }, // Sigma Eta Pi
    { ...leadershipExperience[1], type: 'leadership', icon: <Users size={16} /> }, // AR Team
    
    // Past work experiences
    { ...workExperience[2], type: 'work', icon: <Briefcase size={16} /> }, // Collage
    { ...workExperience[3], type: 'work', icon: <Briefcase size={16} /> }, // IBM
    { ...workExperience[4], type: 'work', icon: <Briefcase size={16} /> }, // iD Tech
    { ...workExperience[5], type: 'work', icon: <Briefcase size={16} /> }, // Extend
    
    // Past leadership
    { ...leadershipExperience[2], type: 'leadership', icon: <Users size={16} /> }, // Michigan Fintech
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">experience</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            my journey through internships, startups, and leadership roles
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute right-6 md:right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-600"></div>
          
          {/* Timeline Experiences */}
          <div className="space-y-8 md:space-y-12">
            {allExperiences.map((exp, index) => (
              <div key={index} className="flex items-center relative">
                {/* Experience Card */}
                <div className="flex-1 mr-8 md:mr-12">
                  <div className="bg-white border-2 border-gray-100 rounded-xl p-4 md:p-6 shadow-lg hover-lift">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className={`p-2 md:p-3 rounded-lg mr-3 ${
                          exp.type === 'work' 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-purple-100 text-purple-600'
                        }`}>
                          {exp.icon}
                        </div>
                        <div className="text-xs md:text-sm text-gray-500 font-medium">
                          {exp.type === 'work' ? 'work' : 'leadership'}
                        </div>
                      </div>
                      <div className="flex items-center text-xs md:text-sm text-gray-600">
                        <Calendar size={14} className="mr-2" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-2">{exp.title}</h3>
                    <h4 className="text-primary-600 font-semibold text-sm md:text-base mb-3">{exp.company}</h4>
                  </div>
                </div>
                
                {/* Connecting Line */}
                <div className="w-6 md:w-8 h-0.5 bg-gray-300"></div>
                
                {/* Timeline Dot */}
                <div className="w-4 h-4 md:w-5 md:h-5 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10 flex-shrink-0"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 