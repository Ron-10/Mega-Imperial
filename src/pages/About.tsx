import { Users, Target, Award, Heart } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import ParallaxSection from '../components/ParallaxSection';
import { useRef } from 'react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: 1000, suffix: "+", label: "Students Placed" },
    { icon: <Target className="w-8 h-8" />, value: 5, suffix: "+", label: "Countries" },
    { icon: <Award className="w-8 h-8" />, value: 100, suffix: "+", label: "University Partners" },
    { icon: <Heart className="w-8 h-8" />, value: 95, suffix: "%", label: "Success Rate" }
  ];

  // Update the universities array with more universities and their actual logos
  const universities = [
    {
      name: "University of Toronto",
      country: "Canada",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/UofT_Logo.svg/1200px-UofT_Logo.svg.png"
    },
    {
      name: "University of Melbourne",
      country: "Australia",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/University_of_Melbourne_logo.svg/1200px-University_of_Melbourne_logo.svg.png"
    },
    {
      name: "University of Manchester",
      country: "UK",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/University_of_Manchester_logo.svg/1200px-University_of_Manchester_logo.svg.png"
    },
    {
      name: "Harvard University",
      country: "USA",
      logo: "https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png"
    },
    {
      name: "University of Sydney",
      country: "Australia",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/University_of_Sydney_Logo.svg/1200px-University_of_Sydney_Logo.svg.png"
    },
    {
      name: "University of British Columbia",
      country: "Canada",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/96/UBC_Logo.svg/1200px-UBC_Logo.svg.png"
    }
  ];

  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxSection 
        imageUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
        height="50vh"
        overlay={true}
      >
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-6 text-white">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-white">
            Your trusted partner in international education since 2010
          </p>
        </div>
      </ParallaxSection>

      <div className="pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16">
        <div className="px-4 sm:px-8 lg:px-12">
          {/* About Section */}
        

          {/* Stats */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-secondary mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {inView && (
                    <CountUp 
                      end={stat.value} 
                      duration={2.5} 
                      suffix={stat.suffix} 
                    />
                  )}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Story Section */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded with a vision to bridge the gap between Nepali students and international education opportunities,
              Mega Imperial has grown to become one of the most trusted education consultancies in Nepal.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of experienced counselors works tirelessly to provide personalized guidance and support
              to each student, ensuring they make informed decisions about their education and future.
            </p>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-body leading-relaxed">
              To become the preferred consultancy for every student in Nepal by delivering exceptional quality services that inspire trust,
               meet their unique needs, and help them achieve their academic and career goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
              To be the leading education consultancy in Nepal, renowned for our integrity, expertise, and value-based services, and dedicated 
              to transforming students' futures through success in international education.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Integrity in all our dealings</li>
                <li>• Excellence in service delivery</li>
                <li>• Student success as our priority</li>
                <li>• Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Universities Section */}
      <section className="py-20 bg-white">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Partner Universities</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                We have partnerships with over 200+ universities worldwide
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {/* First set of universities */}
                {universities.map((university, index) => (
                  <div 
                    key={`first-${index}`}
                    className="flex-shrink-0 w-48 h-48 mx-6 bg-white rounded-lg shadow-sm p-6 flex items-center justify-center group hover:shadow-lg transition-all duration-300"
                  >
                    <img 
                      src={university.logo} 
                      alt={university.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {universities.map((university, index) => (
                  <div 
                    key={`second-${index}`}
                    className="flex-shrink-0 w-48 h-48 mx-6 bg-white rounded-lg shadow-sm p-6 flex items-center justify-center group hover:shadow-lg transition-all duration-300"
                  >
                    <img 
                      src={university.logo} 
                      alt={university.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                And many more prestigious institutions across the globe
              </p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors duration-300"
              >
                Contact Us for Full List
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;