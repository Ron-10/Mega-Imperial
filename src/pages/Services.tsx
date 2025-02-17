import { 
  GraduationCap, Globe2, FileCheck, Stamp, Landmark, BookOpen, 
  Building2, Plane, Users, BadgeCheck, ScrollText, PenTool 
} from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const mainServices = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "University Admissions",
      description: "Comprehensive support for university applications, including course selection, documentation, and application submission.",
      features: [
        "Course and university selection guidance",
        "Application documentation preparation",
        "Personal statement assistance",
        "Application submission and follow-up",
        "Scholarship application support"
      ]
    },
    {
      icon: <Stamp className="w-8 h-8" />,
      title: "Visa Processing",
      description: "Expert assistance throughout the visa application process to ensure successful outcomes.",
      features: [
        "Visa requirement analysis",
        "Documentation preparation",
        "Interview preparation",
        "Application submission",
        "Follow-up support"
      ]
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Financial Services",
      description: "Complete financial support services including education loans and scholarship guidance.",
      features: [
        "Education loan assistance",
        "Scholarship opportunities",
        "Financial documentation",
        "Budget planning",
        "Bank account setup guidance"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Test Preparation",
      description: "IELTS, PTE, and TOEFL preparation courses with experienced instructors."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Accommodation",
      description: "Assistance in finding suitable accommodation in your study destination."
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Travel Support",
      description: "Flight bookings and pre-departure orientation sessions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Career Counseling",
      description: "Professional guidance for career planning and development."
    },
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Document Authentication",
      description: "Assistance with document verification and authentication processes."
    },
    {
      icon: <ScrollText className="w-6 h-6" />,
      title: "SOP Writing",
      description: "Professional assistance in crafting compelling statements of purpose."
    }
  ];

  const destinations = [
    
      {
        country: "Finland",
        image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&q=80",
        universities: "30+ Universities",
        courses: "500+ Courses",
        path: "/countries/finland"
      },
      {
      country: "Australia",
      image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80",
      universities: "50+ Universities",
      courses: "1000+ Courses",
      path: "/countries/australia"
    },
    {
      country: "Canada",
      image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80",
      universities: "40+ Universities",
      courses: "800+ Courses",
      path: "/countries/canada"
    },
    {
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
      universities: "45+ Universities",
      courses: "900+ Courses",
      path: "/countries/uk"
    },
    {
      country: "United States",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&q=80",
      universities: "60+ Universities",
      courses: "1200+ Courses",
      path: "/countries/usa"
    },
    
    {
      country: "New Zealand",
      image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&q=80",
      universities: "35+ Universities",
      courses: "600+ Courses",
      path: "/countries/new-zealand"
    },
    {
      country: "Dubai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
      universities: "20+ Universities",
      courses: "400+ Courses",
      path: "/countries/dubai"
    },
    {
      country: "Ireland",
      image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80",
      universities: "25+ Universities",
      courses: "450+ Courses",
      path: "/countries/ireland"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <ParallaxSection
        imageUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
        height="50vh"
        overlay={true}
      >
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-white">
            Comprehensive support for your international education journey
          </p>
        </div>
      </ParallaxSection>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden group">
                  <div className="p-8">
                    <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-body mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <PenTool className="w-4 h-4 text-secondary mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Additional Services</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Supporting services to ensure a smooth transition to your study abroad journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 group">
                  <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-body">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Study Destinations */}
      <section className="py-20">
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Study Destinations</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Explore opportunities in leading education destinations worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {destinations.map((destination, index) => (
                <button
                  key={index}
                  onClick={() => navigate(destination.path)}
                  className="group relative overflow-hidden rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.country}
                      className="w-full h-64 object-cover transform group-hover:scale-125 transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors duration-500">
                          {destination.country}
                        </h3>
                        <div className="space-y-1 transform group-hover:translate-y-0 transition-all duration-500">
                          <p className="text-sm opacity-90 group-hover:opacity-100">
                            {destination.universities}
                          </p>
                          <p className="text-sm opacity-90 group-hover:opacity-100">
                            {destination.courses}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;