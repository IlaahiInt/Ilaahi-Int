import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Heart, Stethoscope, Brain, Microscope, Star, Menu, X, Award, Building2, FlaskRound as Flask, Users, Trophy, Guitar as Hospital, Microscope as Microscope2, Facebook, Twitter, Linkedin, Instagram, Check } from 'lucide-react';

const HospitalIcon = () => (
  <svg 
    className="w-8 h-8" 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" 
      className="fill-blue-600"
    />
    <path 
      d="M16 7v18M7 16h18" 
      stroke="white" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
  </svg>
);

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
  const [successEmail, setSuccessEmail] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleAppointmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Store email for success message
    const userEmail = appointmentData.email;

    // Format the date and time
    const formattedDate = new Date(appointmentData.date).toLocaleDateString();
    const formattedTime = appointmentData.time;

    // Create the payload with all required information
    const payload = {
      appointmentRequest: {
        patient: {
          name: appointmentData.name,
          email: appointmentData.email,
          phone: appointmentData.phone
        },
        appointment: {
          date: formattedDate,
          time: formattedTime,
          doctor: appointmentData.doctor,
          notes: appointmentData.notes || 'No additional notes'
        },
        metadata: {
          submittedAt: new Date().toISOString(),
          source: 'website',
          status: 'pending'
        }
      }
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/jpbkqmdmjnfpzslf1uqtta5c4hik1w3d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response body:', responseText);

      if (response.ok) {
        setIsAppointmentModalOpen(false);
        setShowSuccessMessage(true);
        setSuccessEmail(userEmail);
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
      icon: <Stethoscope className="w-12 h-12 text-blue-600" />,
      title: "Medical Clinics",
      description: "Comprehensive outpatient care with specialized medical consultations and treatments."
    },
    {
      icon: <Microscope className="w-12 h-12 text-blue-600" />,
      title: "Surgical Clinics",
      description: "Expert surgical consultations and advanced surgical procedures across specialties."
    },
    {
      icon: <Flask className="w-12 h-12 text-blue-600" />,
      title: "Diagnostic Services",
      description: "State-of-the-art diagnostic facilities including laboratory tests and imaging services."
    },
    {
      icon: <Phone className="w-12 h-12 text-blue-600" />,
      title: "Emergency Services",
      description: "24/7 emergency care with rapid response teams and critical care facilities."
    }
  ];

  const doctors = [
    {
      name: "Dr. Ikhlaq Ahmad",
      specialty: "Head of Medical Clinics",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Dedicated to providing comprehensive primary care and specialized medical consultations."
    },
    {
      name: "Dr. Muhammad Nazir",
      specialty: "Chief of Surgical Services",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Committed to excellence in surgical care with advanced minimally invasive techniques."
    },
    {
      name: "Dr. Tahir Abbas",
      specialty: "Director of Diagnostic Services",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Focused on accurate diagnostics using state-of-the-art technology for better patient care."
    },
    {
      name: "Dr. Waqas Ahmad",
      specialty: "Emergency Medicine Director",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Leading our 24/7 emergency response team with prompt and efficient critical care."
    },
    {
      name: "Dr. Shabana Gujjar",
      specialty: "Gynecology Specialist",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Providing specialized care for women's health with compassion and expertise."
    },
    {
      name: "Dr. Samina Shabbir",
      specialty: "Pediatrics Specialist",
      image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      quote: "Dedicated to providing the best care for children and supporting their healthy development."
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
      title: "Quality Certification",
      description: "ISO 9001:2015 Certified for Quality Management Systems"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Patient Trust",
      description: "Served over 3 thousands patients with 98% satisfaction rate"
    },
    {
      icon: <Star className="w-12 h-12 text-blue-600" />,
      title: "Medical Excellence",
      description: "Recognized for Advanced Medical Procedures & Innovation"
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure with latest medical equipment"
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Community Service",
      description: "Provided free healthcare to 2,000+ underprivileged patients"
    }
  ];

  const facilities = [
    {
      icon: <Hospital className="w-12 h-12 text-blue-600" />,
      title: "Modern Infrastructure",
      description: "State-of-the-art medical facilities spanning 300,000 sq ft"
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
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "24/7 Emergency Care",
      description: "Round-the-clock emergency services with rapid response teams"
    },
    {
      icon: <Flask className="w-12 h-12 text-blue-600" />,
      title: "Modern Laboratory",
      description: "Fully equipped laboratory for accurate and quick diagnostics"
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Patient Comfort",
      description: "Comfortable patient rooms with modern amenities and care"
    }
  ];

  const research = {
    title: "Research & Innovation",
    description: "Committed to advancing medical care through research and innovative treatments",
    stats: [
      { number: "10+", label: "Research Projects" },
      { number: "15+", label: "Medical Publications" },
      { number: "5+", label: "Academic Partnerships" }
    ]
  };

  const testimonials = [
    {
      name: "Muhammad Aslam",
      age: "52",
      location: "Sargodha",
      treatment: "Heart Surgery",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "I am grateful for the successful heart surgery at Elite Care Hospital. Dr. Ikhlaq Ahmad and his team provided exceptional care throughout my treatment."
    },
    {
      name: "Khadija Bibi",
      age: "45",
      location: "Faisalabad",
      treatment: "Diabetes Care",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "I've been receiving diabetes treatment here. Dr. Shabana Gujjar provided excellent guidance, and my health has significantly improved under her care."
    },
    {
      name: "Abdul Majeed",
      age: "58",
      location: "Mianwali",
      treatment: "Joint Replacement",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "I came from Mianwali for knee surgery. Dr. Muhammad Nazir performed the surgery excellently. Now I can walk without any pain."
    },
    {
      name: "Amina Batool",
      age: "35",
      location: "Bhalwal",
      treatment: "Maternity Care",
      image: "https://images.unsplash.com/photo-1548366565-6bbab241282d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "I chose Elite Care Hospital for my delivery. Dr. Samina Shabbir and the staff provided outstanding care. The hospital facilities are excellent."
    },
    {
      name: "Rana Asif",
      age: "42",
      location: "Jhang",
      treatment: "Emergency Care",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "After a road accident, I was admitted to emergency. Dr. Waqas Ahmad's team saved my life. I'm deeply thankful for their quick response and care."
    },
    {
      name: "Nasreen Akhtar",
      age: "48",
      location: "Khushab",
      treatment: "Diagnostic Services",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      text: "I came from Khushab for medical tests. Dr. Tahir Abbas provided accurate diagnosis and timely treatment. My health has improved significantly."
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
      <div className="hidden md:block bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-2">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <div className="flex items-center hover:text-white transition-colors">
                <MapPin className="w-4 h-4 mr-1" />
                <span>87-Satellite Town, Sargodha</span>
              </div>
              <div className="flex items-center hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                <span>048-3768499 / +92 300 7472568</span>
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
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm md:mt-9">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <HospitalIcon />
              <div className="text-xl font-bold gradient-text">Elite Care Hospital</div>
            </div>
            
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
                {/* Navigation Items First */}
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 text-center"
                  >
                    {item.label}
                  </button>
                ))}

                {/* Divider */}
                <div className="border-t border-gray-200 my-2"></div>

                {/* Contact Information at the end */}
                <div className="flex flex-col items-center space-y-3 text-gray-600 pt-2">
                  {/* Social Media Links */}
                  <div className="flex justify-center space-x-6 mb-3">
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-center">87-Satellite Town, Sargodha</span>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-center">048-3768499 / +92 300 7472568</span>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-center">info@elitecarehospital.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white pt-16 md:pt-32">
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
                className="btn-primary relative z-20 touch-manipulation"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg hover-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg hover-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 transform transition-transform duration-300 hover:scale-110">
                  {facility.icon}
                </div>
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
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Patient Testimonials</h2>
          
          <div className="relative max-w-7xl mx-auto">
            {/* Testimonial Cards Container */}
            <div className="relative h-[450px]">
              <div className="flex transition-transform duration-500 absolute"
                   style={{ transform: `translateX(-${currentTestimonial * 33.33}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-1/3 px-4 flex-shrink-0"
                  >
                    <div className="bg-white rounded-2xl shadow-xl p-8 relative h-full">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover"
                        />
                      </div>
                      
                      <div className="mt-8 text-center">
                        <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                        <p className="text-blue-600 text-sm mb-2">
                          {testimonial.age} Years • {testimonial.location}
                        </p>
                        <p className="text-gray-600 text-sm mb-4">
                          Treatment: {testimonial.treatment}
                        </p>
                        <p className="text-gray-700 italic">{testimonial.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1))}
              className="absolute left-0 top-[45%] transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-30 cursor-pointer"
            >
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 3 ? 0 : prev + 1))}
              className="absolute right-0 top-[45%] transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform z-30 cursor-pointer"
            >
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {[...Array(testimonials.length - 2)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentTestimonial ? 'bg-blue-600 w-6' : 'bg-blue-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl relative overflow-hidden">
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
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white/90">Address</h4>
                        <p className="text-white/70">87-Satellite Town, Sargodha</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white/90">Phone</h4>
                        <p className="text-white/70">PTCL: 048-3768499</p>
                        <p className="text-white/70">Mobile: +92 300 7472568</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white/90">Email</h4>
                        <p className="text-white/70">info@elitecarehospital.com</p>
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
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-2xl w-full max-w-5xl relative animate-[fadeIn_0.3s_ease-out] shadow-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={() => setIsAppointmentModalOpen(false)}
              className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
            </div>
            
            <div className="p-4 sm:p-6 md:p-8 relative z-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">Book an Appointment</h2>
              <form onSubmit={handleAppointmentSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {/* Left Column */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg 
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg 
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg 
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg 
                               focus:outline-none focus:border-white/40 text-white placeholder-white/40
                               transition-colors"
                      rows={4}
                      placeholder="Any specific requirements or concerns..."
                      value={appointmentData.notes}
                      onChange={(e) => setAppointmentData({...appointmentData, notes: e.target.value})}
                    ></textarea>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm">Select Doctor</label>
                    <select
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg 
                               focus:outline-none focus:border-white/40 text-white
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg 
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg 
                               focus:outline-none focus:border-white/40 text-white placeholder-white/40
                               transition-colors"
                      value={appointmentData.time}
                      onChange={(e) => setAppointmentData({...appointmentData, time: e.target.value})}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 sm:pt-4">
                    <button
                      type="submit"
                      className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-lg font-semibold
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
                      {successEmail}
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