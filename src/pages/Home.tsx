import React, { useEffect, useState } from 'react';
import { GraduationCap, Globe2, FileCheck, Stamp, Landmark, Users } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import ServiceCard from '../components/ServiceCard';
import ContactSection from '../components/ContactSection';
import homeImage from '../assets/home.jpg';
import tribhuvanImage from '../assets/tribhuvan.png';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import missImage from '../assets/miss.jpg';
import megaCollegeLogo from '../assets/megacollege.png';

function Home() {
  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Personalized Counseling",
      description: "Expert guidance in choosing the right country and institution based on your goals and background."
    },
    {
      icon: <Globe2 className="w-8 h-8" />,
      title: "Global Education Options",
      description: "Specialized programs in Australia, Canada, UK, USA, Finland, New Zealand, and Dubai."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Application Assistance",
      description: "Comprehensive support with documents, personal statements, and application forms."
    },
    {
      icon: <Stamp className="w-8 h-8" />,
      title: "Visa Guidance",
      description: "Expert assistance with visa documentation and interview preparation."
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Financing Support to Students",
      description: "Comprehensive loan support for education with expert guidance."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Bank Loan Support",
      description: "Professional business consulting and loan support services to various individuals and business."
    }
  ];

  const features = [
    {
      title: "Expert Counseling",
      description: "Our experienced counselors provide personalized guidance to help you choose the right course and university that aligns with your career goals.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Financial Support",
      description: "We offer comprehensive financial assistance including education loans, scholarships guidance, and flexible payment plans to make your dreams achievable.",
      icon: <Landmark className="w-8 h-8" />
    },
    {
      title: "Visa Success",
      description: "Our expert team ensures a smooth visa application process with high success rates through proper documentation and interview preparation.",
      icon: <FileCheck className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Pratikshya Neupane",
      course: "Masters in Business Analytics",
      university: "Mega Imperial College, UK",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80",
      quote: "Mega Imperial made my dream of studying in Australia come true. Their guidance throughout the process was invaluable."
    },
    {
      name: "Manisha Pandey",
      course: "Bachelor of Nursing",
      university: "University of Toronto",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      quote: "The team's dedication and support made the complex process of studying abroad feel simple and achievable."
    },
    {
      name: "Kabita Gurung",
      course: "Masters in Data Science",
      university: "University of Melbourne",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      quote: "From application to visa approval, their comprehensive support made all the difference in my journey."
    },
    {
      name: "Nabin Bhattarai",
      course: "Bachelor of Computer Application",
      university: "University of Finland",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      quote: "The team's dedication and support made the complex process of studying abroad feel simple and achievable."
    }
  ];

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <ParallaxSection
        imageUrl={homeImage}
        height="100vh"
      >
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-6xl font-bold mb-6 tracking-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300">
            Mega Imperial
            <span className="block text-4xl mt-2 font-normal text-white">Consultancy Services</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-cyan-100 drop-shadow-md">
            Your Gateway to International Education
          </p>
          <button className="mt-12 bg-white text-secondary hover:bg-secondary hover:text-white font-medium py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Start Your Journey
          </button>
        </div>
      </ParallaxSection>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Us?</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-gray-900 max-w-2xl mx-auto text-lg">
                Choose Mega Imperial for a seamless study abroad experience backed by years of expertise and dedication
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-secondary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-white">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Message From CEO</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="relative">
                  <img 
                    src={tribhuvanImage}
                    alt="Mr. Tribhuvan Bhandari - CEO" 
                    className="rounded-lg shadow-lg w-full object-cover aspect-[3/4]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                    <h3 className="text-white text-xl font-semibold">Mr. Tribhuvan Bhandari</h3>
                    <p className="text-white/90">CEO & Founder</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <div className="prose max-w-none mt-8 lg:mt-16">
                  <p className="text-gray-800 text-lg leading-relaxed mb-6">
                    "Welcome to Mega Imperial Consultancy Services. Our commitment to excellence 
                    and dedication to helping students achieve their dreams has been our driving 
                    force. We understand that choosing the right educational path is one of life's 
                    most important decisions, and we are here to guide you every step of the way."
                  </p>
                  <p className="text-gray-800 text-lg leading-relaxed mb-6">
                    "With years of experience in educational consultancy, we have helped thousands 
                    of students realize their potential and secure admissions in prestigious 
                    institutions worldwide. Our personalized approach ensures that each student 
                    receives the attention and guidance they deserve."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Services</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive support for your international education journey
            </p>
            <p className="text-secondary font-semibold mt-4">
              Nepal's First and Only Consultancy Providing Complete Financial Support Services for Students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${missImage})`,
          height: '60vh'
        }}
      >
        {/* Add a dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 flex items-center justify-center h-full">
          <div className="text-center" ref={ref}>
            <h2 className="text-4xl font-bold mb-8 text-white drop-shadow-lg">Our Mission</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-12 opacity-80"></div>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed mb-12 drop-shadow-md">
              To become the preferred consultancy for every student in Nepal by delivering exceptional quality services that inspire trust, meet their unique needs, and help them achieve their academic and career goals.
            </p>
            <div className="flex justify-center items-center space-x-16">
              <div className="text-center text-white">
                <div className="text-5xl font-bold">
                  {inView && <CountUp end={500} duration={2.5} suffix="+" />}
                </div>
                <div className="mt-2 text-lg opacity-90">Students Placed</div>
              </div>
              <div className="text-center text-white">
                <div className="text-5xl font-bold">
                  {inView && <CountUp end={95} duration={2.5} suffix="%" />}
                </div>
                <div className="mt-2 text-lg opacity-90">Success Rate</div>
              </div>
              <div className="text-center text-white">
                <div className="text-5xl font-bold">
                  {inView && <CountUp end={10} duration={2.5} suffix="+" />}
                </div>
                <div className="mt-2 text-lg opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Student Success Stories</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Hear from our students who have successfully achieved their dreams of studying abroad
              </p>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonials[currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1].image} 
                      alt="Student" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1].name}
                      </h4>
                      <p className="text-secondary text-sm">
                        {testimonials[currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1].course}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonials[currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1].university}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonials[currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1].quote}"
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonials[currentTestimonialIndex].image} 
                      alt="Student" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonials[currentTestimonialIndex].name}</h4>
                      <p className="text-secondary text-sm">{testimonials[currentTestimonialIndex].course}</p>
                      <p className="text-gray-600 text-sm">{testimonials[currentTestimonialIndex].university}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonials[currentTestimonialIndex].quote}"</p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonials[currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1].image} 
                      alt="Student" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1].name}
                      </h4>
                      <p className="text-secondary text-sm">
                        {testimonials[currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1].course}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {testimonials[currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1].university}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonials[currentTestimonialIndex === testimonials.length - 1 ? 0 : currentTestimonialIndex + 1].quote}"
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button 
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-20 bg-white">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Partner Universities</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We have option of around 200+ universities around the world.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Mega Imperial College */}
              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-300">
                <img 
                  src={megaCollegeLogo} 
                  alt="Mega Imperial College"
                  className="w-32 h-32 object-contain mb-4 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-gray-900 font-semibold text-center">Mega Imperial College</h3>
                <p className="text-secondary text-sm">United Kingdom</p>
              </div>

              {/* Other Universities with Placeholders */}
              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"></div>
                <h3 className="text-gray-900 font-semibold text-center">University of Helsinki</h3>
                <p className="text-secondary text-sm">Finland</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"></div>
                <h3 className="text-gray-900 font-semibold text-center">University of Melbourne</h3>
                <p className="text-secondary text-sm">Australia</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"></div>
                <h3 className="text-gray-900 font-semibold text-center">University of Toronto</h3>
                <p className="text-secondary text-sm">Canada</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"></div>
                <h3 className="text-gray-900 font-semibold text-center">University of Auckland</h3>
                <p className="text-secondary text-sm">New Zealand</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"></div>
                <h3 className="text-gray-900 font-semibold text-center">University of Manchester</h3>
                <p className="text-secondary text-sm">United Kingdom</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"></div>
                <h3 className="text-gray-900 font-semibold text-center">University of Sydney</h3>
                <p className="text-secondary text-sm">Australia</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center group hover:shadow-xl transition-all duration-300">
                <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"></div>
                <h3 className="text-gray-900 font-semibold text-center">University of Dubai</h3>
                <p className="text-secondary text-sm">UAE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}

export default Home;