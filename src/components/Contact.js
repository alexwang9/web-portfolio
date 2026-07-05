import React from 'react';
import { Mail, Linkedin, Github, ExternalLink, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'alex.wang@umich.edu',
      href: 'mailto:alex.wang@umich.edu',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: '/in/alexwang-umich',
      href: 'https://linkedin.com/in/alexwang-umich',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: '@alexwang',
      href: 'https://github.com/alexwang',
      color: 'from-gray-700 to-gray-800'
    }
  ];

  const quickFacts = [
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Ann Arbor, MI'
    },
    {
      icon: <ExternalLink size={20} />,
      label: 'Available',
      value: 'Summer 2026 Full-time'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and interesting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="block bg-gray-50 rounded-2xl p-6 hover-lift text-center group"
              >
                <div className={`bg-gradient-to-r ${method.color} p-4 rounded-lg text-white mx-auto w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.label}</h3>
                <p className="text-gray-600 group-hover:text-primary-600 transition-colors">
                  {method.value}
                </p>
              </a>
            ))}
          </div>

          {/* Quick Facts */}
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Quick Facts</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {quickFacts.map((fact, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="bg-primary-600 p-2 rounded-lg mr-4">
                    {React.cloneElement(fact.icon, { className: 'text-white' })}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{fact.label}</p>
                    <p className="text-gray-600">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Whether you're looking for a software engineering intern, collaborating on an exciting project, 
                or just want to chat about technology, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:alex.wang@umich.edu"
                  className="flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <Mail size={20} />
                  Send Email
                </a>
                <button className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <ExternalLink size={20} />
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-2xl font-bold gradient-text">Alex Wang</p>
              <p className="text-gray-600">Software Engineer & CS Student</p>
            </div>
            <div className="flex space-x-6">
              <button className="text-gray-400 hover:text-primary-600 transition-colors">
                <Linkedin size={24} />
              </button>
              <button className="text-gray-400 hover:text-primary-600 transition-colors">
                <Github size={24} />
              </button>
              <a href="mailto:alex.wang@umich.edu" className="text-gray-400 hover:text-primary-600 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              © 2024 Alex Wang. Built with React & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact; 