import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Heart, Stethoscope, Brain, Microscope, Star, Menu, X, Award, Building2, FlaskRound as Flask, Users, Trophy, Guitar as Hospital, Microscope as Microscope2, Facebook, Twitter, Linkedin, Instagram, Check } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [appointmentData, setAppointmentData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    notes: ''
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!appointmentData.name || !appointmentData.email || !appointmentData.phone || 
        !appointmentData.date || !appointmentData.time || !appointmentData.doctor) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch('https://hook.eu2.make.com/jpbkqmdmjnfpzslf1uqtta5c4hik1w3d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData)
      });

      if (response.ok) {
        setIsAppointmentModalOpen(false);
        setShowSuccessMessage(true);
        setAppointmentData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          doctor: '',
          notes: ''
        });
      } else {
        throw new Error(`Server returned ${response.status}`);
      }
    } catch (error) {
      console.error('Error processing appointment:', error);
      alert('Unable to process your appointment request. Please try again.');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Cardiology",
      description: "Expert care for heart-related conditions with state-of-the-art facilities."
    },
    {
      icon: <Brain className="w-12 h-12 text-blue-600" />,
      title: "Neurology",
      description: "Specialized treatment for neurological disorders by experienced specialists."
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-blue-600" />,
      title: "General Medicine",
      description: "Comprehensive medical care for all types of health conditions."
    },
    {
      icon: <Microscope className="w-12 h-12 text-blue-600" />,
      title: "Laboratory Services",
      description: "Advanced diagnostic testing and laboratory services."
    }
  ];

  const doctors = [
    {
      name: "Dr. Sarah Mitchell",
      specialty: "Chief of Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Dedicated to providing exceptional cardiac care with the latest treatments and technologies."
    },
    {
      name: "Dr. James Wilson",
      specialty: "Neurosurgery Director",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Committed to advancing neurosurgical techniques for better patient outcomes."
    },
    {
      name: "Dr. Emily Chen",
      specialty: "Head of Pediatrics",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Passionate about providing compassionate care to our youngest patients."
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="w-12 h-12 text-blue-600" />,
      title: "Excellence in Healthcare",
      description: "Ranked #1 in Patient Care Quality for 5 consecutive years"
    },
    {
      icon: <Award className="w-12 h-12 text-blue-600" />,
      title: "Research Recognition",
      description: "Over 200 published medical research papers in 2024"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Patient Trust",
      description: "Served over 1 million patients with 98% satisfaction rate"
    },
    {
      icon: <Star className="w-12 h-12 text-blue-600" />,
      title: "Accreditation",
      description: "Joint Commission International (JCI) Accredited Hospital"
    }
  ];

  const facilities = [
    {
      icon: <Hospital className="w-12 h-12 text-blue-600" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art medical facilities spanning 500,000 sq ft"
    },
    {
      icon: <Microscope2 className="w-12 h-12 text-blue-600" />,
      title: "Advanced Equipment",
      description: "Latest diagnostic and therapeutic technology"
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Specialized Units",
      description: "Dedicated departments for specialized care and treatment"
    }
  ];

  const research = {
    title: "Research & Innovation",
    description: "Leading the way in medical breakthroughs and innovative treatments",
    stats: [
      { number: "50+", label: "Ongoing Clinical Trials" },
      { number: "200+", label: "Research Publications" },
      { number: "25+", label: "International Collaborations" }
    ]
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The care I received at Elite Care Hospital was exceptional. The staff was professional and caring.",
      rating: 5
    },
    {
      name: "Michael Chen",
      text: "Top-notch medical facility with state-of-the-art equipment. Highly recommend their services.",
      rating: 5
    },
    {
      name: "Emily Williams",
      text: "The doctors here are extremely knowledgeable and take time to explain everything clearly.",
      rating: 5
    }
  ];

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Doctors', id: 'doctors' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Facilities', id: 'facilities' },
    { label: 'Research', id: 'research' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-2">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <div className="flex items-center hover:text-white transition-colors">
                <MapPin className="w-4 h-4 mr-1" />
                <span>123 Healthcare Avenue, Medical District</span>
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-1" />
                <span>info@elitecarehospital.com</span>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="social-icon">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="social-icon">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="social-icon">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="social-icon">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm mt-9">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold gradient-text">Elite Care Hospital</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-blue-600 transition-transform duration-300 hover:rotate-180"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-[slideIn_0.3s_ease-out]">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white pt-32">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-[slideIn_1s_ease-out]">
              <h1 className="text-5xl font-bold leading-tight">
                Expert Healthcare for a Better Life
              </h1>
              <p className="text-xl text-blue-100">
                At Elite Care Hospital, we combine advanced medical technology with compassionate care to provide the best healthcare services.
              </p>
              <button 
                onClick={() => setIsAppointmentModalOpen(true)}
                className="btn-primary"
              >
                Book Appointment
              </button>
            </div>
            <div className="relative animate-[float_6s_ease-in-out_infinite]">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Medical Team"
                  className="rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl opacity-20 -z-10 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-20 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center gradient-text mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card p-8 rounded-lg shadow-lg hover-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 transform transition-transform duration-300 hover:scale-110">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Expert Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-4 aspect-h-3 w-full">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-[300px] sm:h-[350px] md:h-[280px] lg:h-[320px] object-cover object-center transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                  <p className="text-blue-600 mb-4">{doctor.specialty}</p>
                  <p className="text-gray-600 italic">"{doctor.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{research.title}</h2>
            <p className="text-xl text-blue-100">{research.description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {research.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Patient Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            {/* Close Icon */}
            <div className="absolute top-4 right-4">
              <button className="text-white/80 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white text-center mb-8">Contact Us</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                {/* Contact Information */}
                <div className="lg:col-span-2 space-y-6 text-white">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 group">
                      <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-colors">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white/60">Phone</p>
                        <p className="font-semibold">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group">
                      <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-colors">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white/60">Email</p>
                        <p className="font-semibold">info@elitecarehospital.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group">
                      <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-colors">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white/60">Address</p>
                        <p className="font-semibold">123 Healthcare Avenue, Medical District</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 group">
                      <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-colors">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white/60">Hours</p>
                        <p className="font-semibold">24/7 Emergency Services</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-3">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 mb-2 text-sm">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                   focus:outline-none focus:border-white/40 text-white placeholder-white/40
                                   transition-colors"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 mb-2 text-sm">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                   focus:outline-none focus:border-white/40 text-white placeholder-white/40
                                   transition-colors"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2 text-sm">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                 focus:outline-none focus:border-white/40 text-white placeholder-white/40
                                 transition-colors"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 mb-2 text-sm">Message</label>
                      <textarea
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                                 focus:outline-none focus:border-white/40 text-white placeholder-white/40
                                 transition-colors"
                        rows={4}
                        placeholder="Your message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold
                               hover:bg-blue-50 transition-all duration-300 hover:shadow-lg
                               focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 Elite Care Hospital. All rights reserved.</p>
        </div>
      </footer>

      {/* Appointment Modal */}
      {isAppointmentModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-2xl w-full max-w-5xl relative animate-[fadeIn_0.3s_ease-out] shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={() => setIsAppointmentModalOpen(false)}
              className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="p-8 relative z-0">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Book an Appointment</h2>
              <form onSubmit={handleAppointmentSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                               focus:outline-none focus:border-white/40 text-white placeholder-white/40
                               transition-colors"
                      placeholder="Your full name"
                      value={appointmentData.name}
                      onChange={(e) => setAppointmentData({...appointmentData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                               focus:outline-none focus:border-white/40 text-white placeholder-white/40
                               transition-colors"
                      placeholder="Your email"
                      value={appointmentData.email}
                      onChange={(e) => setAppointmentData({...appointmentData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                               focus:outline-none focus:border-white/40 text-white placeholder-white/40
                               transition-colors"
                      placeholder="Your phone number"
                      value={appointmentData.phone}
                      onChange={(e) => setAppointmentData({...appointmentData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Additional Notes</label>
                    <textarea
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                               focus:outline-none focus:border-white/40 text-white placeholder-white/40
                               transition-colors"
                      rows={5}
                      placeholder="Any specific requirements or concerns..."
                      value={appointmentData.notes}
                      onChange={(e) => setAppointmentData({...appointmentData, notes: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Select Doctor</label>
                    <select
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                               focus:outline-none focus:border-white/40 text-white placeholder-white/40
                               transition-colors"
                      value={appointmentData.doctor}
                      onChange={(e) => setAppointmentData({...appointmentData, doctor: e.target.value})}
                      required
                    >
                      <option value="" className="text-gray-800">Select a doctor</option>
                      {doctors.map((doctor, index) => (
                        <option key={index} value={doctor.name} className="text-gray-800">
                          {doctor.name} - {doctor.specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                               focus:outline-none focus:border-white/40 text-white placeholder-white/40
                               transition-colors"
                      value={appointmentData.date}
                      onChange={(e) => setAppointmentData({...appointmentData, date: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Preferred Time</label>
                    <input
                      type="time"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg 
                               focus:outline-none focus:border-white/40 text-white placeholder-white/40
                               transition-colors"
                      value={appointmentData.time}
                      onChange={(e) => setAppointmentData({...appointmentData, time: e.target.value})}
                      required
                    />
                  </div>

                  {/* Submit Button - Placed at bottom of right column */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold
                               hover:bg-blue-50 transition-all duration-300 hover:shadow-lg
                               focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
                               transform hover:scale-105"
                    >
                      Confirm Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-2xl w-full max-w-lg relative animate-[fadeIn_0.3s_ease-out] shadow-2xl">
            {/* Close Button */}
            <button 
              onClick={() => setShowSuccessMessage(false)}
              className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="p-8 relative z-0">
              <div className="text-center space-y-4">
                {/* Success Icon */}
                <div className="mx-auto w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-white" />
                </div>
                
                <h2 className="text-3xl font-bold text-white">Appointment Confirmed!</h2>
                
                <p className="text-white/80 text-lg">
                  Thank you for choosing Elite Care Hospital. We have received your appointment request.
                </p>
                
                <div className="bg-white/10 rounded-lg p-4 mt-6">
                  <p className="text-white/90">
                    We will send a confirmation email to:
                    <span className="block font-semibold mt-1 text-white">
                      {appointmentData.email}
                    </span>
                  </p>
                </div>
                
                <button
                  onClick={() => setShowSuccessMessage(false)}
                  className="mt-6 w-full px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold
                           hover:bg-blue-50 transition-all duration-300 hover:shadow-lg
                           focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50
                           transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;