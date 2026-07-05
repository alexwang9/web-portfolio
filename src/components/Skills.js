import React, { useState } from 'react';
import { Code2, Database, Cloud, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [openCategories, setOpenCategories] = useState({});

  const toggleCategory = (index) => {
    setOpenCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: ['C++', 'Python', 'Java', 'JavaScript/TypeScript', 'SQL', 'C#'],
      color: 'from-blue-500 to-primary-600'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Wrench size={24} />,
      skills: ['React', 'Next.js', 'Spring Boot', 'Node.js', 'Flask', 'TensorFlow', 'scikit-learn', 'Pandas'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Tools & Cloud',
      icon: <Cloud size={24} />,
      skills: ['AWS (EC2, S3)', 'GitHub Actions', 'Git', 'Jira', 'JUnit', 'Cypress'],
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'OracleDB'],
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            technical <span className="gradient-text">skills</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            built through academic projects, internships, and personal development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Dropdown Header */}
              <button
                onClick={() => toggleCategory(index)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg mr-4 text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                  <span className="ml-3 text-sm text-gray-500">
                    ({category.skills.length} skills)
                  </span>
                </div>
                <div className="text-gray-400">
                  {openCategories[index] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </button>

              {/* Dropdown Content */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openCategories[index] 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
                style={{ 
                  overflow: 'hidden',
                  maxHeight: openCategories[index] ? `${category.skills.length * 60 + 32}px` : '0px'
                }}
              >
                <div className="px-6 pb-6 pt-4 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                      >
                        <span className="text-gray-700 font-medium">{skill}</span>
                        <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Always Learning</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring 
              advanced cloud architectures, machine learning applications, and modern frontend frameworks 
              to stay at the forefront of software development.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-gray-600 text-sm">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">8+</div>
                <div className="text-gray-600 text-sm">Frameworks Used</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-600 text-sm">Database Systems</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2</div>
                <div className="text-gray-600 text-sm">Cloud Certifications</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills; 