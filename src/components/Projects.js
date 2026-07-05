import React from 'react';
import { ExternalLink, Github, Play, Clock, Code, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'SwingSense',
      description: 'AI-powered tennis swing analysis application that processes video footage to provide real-time form feedback using computer vision and machine learning.',
      technologies: ['Python', 'FastAPI', 'Streamlit', 'MediaPipe', 'OpenCV', 'Dynamic Time Warping'],
      achievements: [
        'Optimized pipeline to analyze 30-sec clips in 18s on CPU (≈25 fps)',
        'Maintained 95% PCK landmark accuracy and 0.88 F1 swing-detection reliability',
        'Implemented pose landmark extraction and swing isolation via wrist-velocity heuristics'
      ],
      icon: <Play className="text-green-600" size={24} />,
      period: 'May 2024',
      featured: true
    },
    {
      title: 'Distributed Search Engine',
      description: 'Built a Google-style search engine from scratch with MapReduce architecture, capable of indexing and searching through large-scale document collections.',
      technologies: ['Python', 'Flask', 'MapReduce', 'tf-idf', 'PageRank'],
      achievements: [
        'Engineered five-stage MapReduce pipeline that parsed and indexed 150K Wikipedia pages',
        'Exposed shard results through Flask REST API and multi-threaded aggregator UI',
        'Delivered top-10 results in <100ms median latency'
      ],
      icon: <Database className="text-blue-600" size={24} />,
      period: 'Nov 2024',
      featured: true
    },
    {
      title: 'Collage Platform',
      description: 'End-to-end social networking platform for college course selection, featuring personalized recommendations and social interactions.',
      technologies: ['Next.js', 'Flask', 'MySQL', 'Stripe', 'DigitalOcean'],
      achievements: [
        'Designed MySQL database schema and implemented robust backend API endpoints',
        'Created intuitive React-based frontend components with AI-driven class recommendations',
        'Established CI/CD pipeline on DigitalOcean for efficient deployments'
      ],
      icon: <Code className="text-purple-600" size={24} />,
      period: 'May 2024',
      featured: true
    },
    {
      title: 'Briefly News',
      description: 'Full-stack web application that automates daily delivery of summarized New York Times content to registered users via email.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'NYT API', 'NodeMailer'],
      achievements: [
        'Implemented user authentication and email notification features',
        'Integrated NYT API for content retrieval and NodeMailer for scheduled dispatch',
        'Enhanced user engagement and information accessibility'
      ],
      icon: <ExternalLink className="text-orange-600" size={24} />,
      period: 'May 2024'
    },
    {
      title: 'Pomodoro Timer Chrome Extension',
      description: 'Productivity Chrome extension providing customizable work and break intervals with real-time data synchronization.',
      technologies: ['HTML5', 'CSS', 'JavaScript', 'Chrome APIs'],
      achievements: [
        'Built using Chrome storage and runtime APIs for real-time timer data updates',
        'Implemented user input validation and dynamic timer updates',
        'Efficient communication between service worker and content scripts'
      ],
      icon: <Clock className="text-red-600" size={24} />,
      period: 'Dec 2023 – Jan 2024'
    },
    {
      title: 'Banking Transaction System',
      description: 'C++ application demonstrating robust software architecture with efficient data structures and comprehensive testing.',
      technologies: ['C++', 'Hash Sets', 'Priority Queues', 'Unit Testing'],
      achievements: [
        'Implemented user registration management with hash set for efficient storage',
        'Utilized priority queue for optimized transaction processing',
        'Emphasized robust test cases for comprehensive code troubleshooting'
      ],
      icon: <Database className="text-indigo-600" size={24} />,
      period: 'Nov 2023'
    },
    {
      title: 'ML Movie Reviews Classification',
      description: 'Machine learning project classifying movie sentiment with neural networks and real-world testing on IMDb data.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Beautiful Soup', 'Matplotlib'],
      achievements: [
        'Created sequential neural network with three dense and three dropout layers',
        'Achieved 70% test accuracy on movie review sentiment classification',
        'Tested model on Barbie movie reviews scraped from IMDb'
      ],
      icon: <Play className="text-pink-600" size={24} />,
      period: 'Aug 2023'
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of technical projects demonstrating full-stack development, AI/ML, and system design skills
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover-lift group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                    <p className="text-gray-500 text-sm">{project.period}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Github size={18} />
                  </button>
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2">
                {project.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded-lg mr-3">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{project.title}</h4>
                      <p className="text-gray-500 text-xs">{project.period}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    <button className="p-1.5 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
                      <Github size={14} />
                    </button>
                    <button className="p-1.5 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  {project.achievements.slice(0, 2).map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      <p className="text-gray-700 text-xs leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
            <Github size={48} className="mx-auto mb-4 text-gray-600" />
            <h3 className="text-2xl font-bold mb-4 text-gray-800">More Projects on GitHub</h3>
            <p className="text-gray-600 mb-6">
              Explore additional projects, contributions, and code samples on my GitHub profile.
            </p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors hover:shadow-lg hover:-translate-y-1">
              View GitHub Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 