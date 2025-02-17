import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    window.location.href = "mailto:megaimperial007@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+977-985-7033669";
  };

  const handleLocationClick = () => {
    window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8565896018795!2d83.46216947508009!3d27.690826976191968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996871971955741%3A0x442cd8e26b360648!2sMega%20imperial%20consultancy%20services!5e0!3m2!1sen!2snp!4v1738478336353!5m2!1sen!2snp", "_blank");
  };

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="px-4 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mega Imperial</h3>
            <p className="text-gray-400 mb-4">Your trusted partner for international education and career guidance.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/p/Mega-Imperial-Consultancy-Services-100092867568383/" 
                 target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/megaimperial" 
                 target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/@megaimperial" 
                 target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/megaimperial" 
                 target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={handleHomeClick}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <button 
                onClick={handlePhoneClick}
                className="flex items-center text-gray-400 hover:text-white transition-colors w-full text-left"
              >
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>+977 985-7033669</span>
              </button>
              <button 
                onClick={handleEmailClick}
                className="flex items-center text-gray-400 hover:text-white transition-colors w-full text-left"
              >
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>megaimperial007@gmail.com</span>
              </button>
              <button 
                onClick={handleLocationClick}
                className="flex items-center text-gray-400 hover:text-white transition-colors w-full text-left"
              >
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Milanchowk, Butwal, Nepal</span>
              </button>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Sunday - Friday: 10:00 AM - 6:00 PM</li>
              <li>Saturday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mega Imperial. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;