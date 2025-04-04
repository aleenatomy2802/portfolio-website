import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, User, Cpu, Moon, Sun, Trophy, Sparkles } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#e0e1dd] dark:bg-gray-900 transition-colors duration-300">
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-[#1b263b]" />
        )}
      </button>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e1dd] to-[#778da9] dark:from-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#1b263b] dark:text-white">
              Aleena Tomy
            </h1>
            <p className="text-xl md:text-2xl text-[#415a77] dark:text-gray-300 mb-8">
              Undergrad Computer Science Senior | Aspiring AI Engineer
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/aleenatomy2802" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
                <Github className="w-7 h-7 text-[#1b263b] dark:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/aleena-tomy-1b32a723a/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
                <Linkedin className="w-7 h-7 text-[#1b263b] dark:text-gray-300" />
              </a>
              <a href="mailto:aleenatomy2802@gmail.com" className="transform hover:scale-110 transition-transform duration-200">
                <Mail className="w-7 h-7 text-[#1b263b] dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#778da9] dark:bg-gray-800 transition-colors duration-300" id="about">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <User className="w-8 h-8 text-[#e0e1dd] dark:text-[#e0e1dd] mr-3" />
            <h2 className="text-4xl font-bold text-[#e0e1dd] dark:text-white">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img
                src="https://raw.githubusercontent.com/aleenatomy2802/portfolio/main/aleena.jpg"
                alt="Profile"
                className="rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#415a77] to-[#1b263b] opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
            </div>
            <div>
              <p className="text-lg text-[#e0e1dd] dark:text-gray-300 leading-relaxed mb-6">
                As a Senior Computer Science student, I'm passionate about creating innovative solutions through code. 
                My academic journey has equipped me with strong foundations in algorithms, data structures, and software 
                engineering principles. I'm particularly interested in web development and artificial intelligence, 
                always eager to learn and apply new technologies to solve real-world problems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-[#e0e1dd]" />
                  <span className="text-[#e0e1dd] font-semibold">Fun Facts:</span>
                </div>
                <ul className="list-disc list-inside text-[#e0e1dd] space-y-2 pl-4">
                  <li>I love solving Rubik's cubes and can solve one in under 3 minutes</li>
                  <li>I'm fluent in 3 languages: English, Malayalam, and Hindi</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-[#e0e1dd] dark:bg-gray-900 transition-colors duration-300" id="skills">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Cpu className="w-8 h-8 text-[#1b263b] dark:text-[#e0e1dd] mr-3" />
            <h2 className="text-4xl font-bold text-[#1b263b] dark:text-white">Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'C++',
              'Java',
              'Python',
              'Git/Github',
              'Probability and Statistics',
              'Data Structures and Algorithms',
              'Machine Learning'
            ].map((skill) => (
              <div 
                key={skill} 
                className="bg-[#778da9] dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#415a77] dark:hover:border-[#778da9]"
              >
                <h3 className="text-lg font-semibold text-[#e0e1dd] dark:text-white">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Projects Section */}
      <section className="py-20 bg-[#e0e1dd] dark:bg-gray-900 transition-colors duration-300" id="projects">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-12">
            <Code2 className="w-8 h-8 text-[#1b263b] dark:text-[#e0e1dd] mr-3" />
            <h2 className="text-4xl font-bold text-[#1b263b] dark:text-white">Projects</h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div 
              className="group bg-[#778da9] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=1200&q=80"
                  alt="AI Advisor Project"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#415a77] to-[#1b263b] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#e0e1dd] dark:text-white mb-4">AI Virtual Advisor</h3>
                <p className="text-[#e0e1dd] dark:text-gray-300 mb-6 text-lg">
                  An innovative AI-powered academic advising system that helps students with course selection, 
                  academic planning, and career guidance. Built with modern technologies and machine learning 
                  algorithms to provide personalized educational recommendations.
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-[#e0e1dd] dark:text-white">Key Features:</h4>
                  <ul className="list-disc list-inside text-[#e0e1dd] dark:text-gray-300 space-y-2">
                    <li>Personalized course recommendations</li>
                    <li>Academic progress tracking</li>
                    <li>Career path guidance</li>
                    <li>Interactive chat interface</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <a 
                    href="https://github.com/aleenatomy2802/virtual-advisor.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#e0e1dd] dark:text-[#e0e1dd] hover:text-[#415a77] dark:hover:text-[#778da9] transition-colors"
                  >
                    View Project on GitHub <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#778da9] dark:bg-gray-800 py-8 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center text-[#e0e1dd] dark:text-gray-400">
          <p>© 2025 Aleena Tomy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;