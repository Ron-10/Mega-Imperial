import React from 'react';
import { Mail, Phone, Facebook, Instagram, Youtube, Twitter, MapPin } from 'lucide-react';

interface TopBarProps {
  isVisible: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ isVisible }) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:megaimperial007@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+977-985-7033669";
  };

  const handleLocationClick = () => {
    window.open("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8565896018795!2d83.46216947508009!3d27.690826976191968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996871971955741%3A0x442cd8e26b360648!2sMega%20imperial%20consultancy%20services!5e0!3m2!1sen!2snp!4v1738478336353!5m2!1sen!2snp", "_blank");
  };

  return (
    <div className={`bg-secondary text-white transition-all duration-300 ${
      isVisible ? 'h-10' : 'h-0 overflow-hidden'
    }`}>
      {/* Mobile View */}
      <div className="md:hidden flex flex-col items-center justify-center space-y-2 py-2">
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleEmailClick}
            className="flex items-center space-x-2 hover:text-white/80 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-xs">megaimperial007@gmail.com</span>
          </button>
        </div>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handlePhoneClick}
            className="flex items-center space-x-2 hover:text-white/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-xs">+977 985-7033669</span>
          </button>
        </div>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={handleLocationClick}
            className="flex items-center space-x-2 hover:text-white/80 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-xs">Milanchowk, Butwal</span>
          </button>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com/p/Mega-Imperial-Consultancy-Services-100092867568383/" 
             target="_blank" rel="noopener noreferrer" 
             className="hover:text-white/80 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://instagram.com/megaimperial" 
             target="_blank" rel="noopener noreferrer"
             className="hover:text-white/80 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://youtube.com/@megaimperial" 
             target="_blank" rel="noopener noreferrer"
             className="hover:text-white/80 transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="https://twitter.com/megaimperial" 
             target="_blank" rel="noopener noreferrer"
             className="hover:text-white/80 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center px-10 py-2">
        <div className="flex items-center space-x-6">
          <button 
            onClick={handleEmailClick}
            className="flex items-center space-x-2 hover:text-white/80 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">megaimperial007@gmail.com</span>
          </button>
          <button 
            onClick={handlePhoneClick}
            className="flex items-center space-x-2 hover:text-white/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-sm">+977 985-7033669</span>
          </button>
          <button 
            onClick={handleLocationClick}
            className="flex items-center space-x-2 hover:text-white/80 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Milanchowk, Butwal</span>
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <a href="https://www.facebook.com/p/Mega-Imperial-Consultancy-Services-100092867568383/" 
             target="_blank" rel="noopener noreferrer" 
             className="hover:text-white/80 transition-colors">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://instagram.com/megaimperial" 
             target="_blank" rel="noopener noreferrer"
             className="hover:text-white/80 transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://youtube.com/@megaimperial" 
             target="_blank" rel="noopener noreferrer"
             className="hover:text-white/80 transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
          <a href="https://twitter.com/megaimperial" 
             target="_blank" rel="noopener noreferrer"
             className="hover:text-white/80 transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;