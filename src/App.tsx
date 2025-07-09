import React, { useState } from 'react';
import { ChevronDown, Download, Mail, Phone, Github, Linkedin, Twitter, Youtube, Instagram, Code, Database, Server, Lightbulb, Clock, MessageSquare } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowSuccess(true);
    setContactForm({ name: '', email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Pravinraj%20.pdf';
    link.download = 'Pravinraj_R_Resume.pdf';
    link.click();
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 opacity-15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-pink-500 to-orange-500 opacity-10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pravinraj R
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors duration-300 ${
                    activeSection === section ? 'text-purple-400 border-b-2 border-purple-400' : ''
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 bg-gray-800 rounded-lg mt-2">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize hover:text-purple-400 transition-colors duration-300"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Pravinraj R
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Python Full Stack Developer (Fresher)
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Passionate about creating innovative web solutions with Python, Flask, and modern technologies. 
              Ready to bring fresh ideas and dedication to your team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                Hire Me
              </button>
              <button
                onClick={downloadResume}
                className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500 transition-all duration-300 flex items-center gap-2 justify-center group"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Education</h3>
                <p className="text-gray-300">
                  <strong>B.Com (CGPA: 7.66)</strong><br/>
                  Thanthai Periyar Government Arts & Science College, Trichy
                </p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Internship</h3>
                <p className="text-gray-300">
                  <strong>Python Full Stack Developer</strong><br/>
                  Sri Venkateswara Agencies, Villupuram<br/>
                  <em>Feb-Jul 2025</em>
                </p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-purple-400">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed">
                As a fresh Python Full Stack Developer, I bring enthusiasm, dedication, and a strong foundation in 
                modern web technologies. My educational background in Commerce combined with technical expertise 
                gives me a unique perspective on building practical, user-focused applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-full flex justify-center">
              <div className="max-w-md w-full">
                {[
                  {
                    title: "A Food Delivery Web App Using Flask & MYSQL",
                    description: "Built a dynamic food ordering platform with Flask, enabling users to register, browse menus, and place real-time ordersd",
                    tech: ["Python", "Flask", "MYSQL", "HTML/CSS"], 
                    gradient: "from-purple-500 to-pink-500"
                  }
                ].map((project, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:rotate-1 perspective-1000"
                  >
                    <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-4`}></div>
                    <h3 className="text-xl font-bold mb-3 text-purple-400">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-purple-400">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Python", icon: Code, color: "from-yellow-400 to-yellow-600" },
                  { name: "Flask", icon: Server, color: "from-green-400 to-green-600" },
                  { name: "Django", icon: Server, color: "from-green-500 to-green-700" },
                  { name: "MySQL", icon: Database, color: "from-blue-400 to-blue-600" },
                  { name: "PostgreSQL", icon: Database, color: "from-blue-500 to-blue-700" },
                  { name: "HTML/CSS", icon: Code, color: "from-orange-400 to-orange-600" }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center mb-3`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-gray-300">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-8 text-purple-400">Soft Skills</h3>
              <div className="space-y-4">
                {[
                  { name: "Communication", icon: MessageSquare, color: "from-purple-400 to-purple-600" },
                  { name: "Problem-solving", icon: Lightbulb, color: "from-yellow-400 to-yellow-600" },
                  { name: "Time Management", icon: Clock, color: "from-blue-400 to-blue-600" }
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all duration-300 flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center`}>
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-gray-300">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <form
  action="https://formspree.io/f/mkgblrrg"
  method="POST"
  className="space-y-6"
>
  <div>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
      required
    />
  </div>

  <div>
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
      required
    />
  </div>

  <div>
    <textarea
      name="message"
      placeholder="Your Message"
      rows={4}
      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors resize-none"
      required
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
  >
    Send Message
  </button>
</form>


      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400">© 2025 Pravinraj R. All rights reserved.</p>
            
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/arthepravin", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/pravinraj-r-b305a8364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-500 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;