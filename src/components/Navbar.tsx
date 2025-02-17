import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const countries = [
    { name: "Finland", path: "/countries/finland" },
    { name: "United States", path: "/countries/usa" },
    { name: "United Kingdom", path: "/countries/uk" },
    { name: "Australia", path: "/countries/australia" },
    { name: "New Zealand", path: "/countries/new-zealand" },
    { name: "Dubai", path: "/countries/dubai" },
    { name: "Canada", path: "/countries/canada" }
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg top-0' : 'bg-transparent top-10'
    }`}>
      <div className="px-10 sm:px-10 lg:px-10 py-1 sm:py-1">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/logo.png"
              alt="Mega Imperial Logo" 
              className="w-12 h-12 object-contain transform group-hover:scale-105 transition-transform duration-300"
              style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
            />
            <span className={`font-bold text-xl ${
              isScrolled ? 'text-secondary' : 'text-white'
            } group-hover:opacity-80 transition-opacity duration-300`}>
              Mega Imperial
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            <div 
              className="relative group"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) {
                  clearTimeout(dropdownTimeoutRef.current);
                }
                setIsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setIsDropdownOpen(false);
                }, 150);
              }}
            >
              <button
                className={`flex items-center space-x-1 ${
                  isScrolled ? 'text-secondary hover:text-secondary/80' : 'text-white hover:text-white/80'
                } transition-all duration-300 relative group transform hover:scale-110`}
              >
                <span>Study In</span>
                <ChevronDown className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-300" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50 overflow-visible">
                  {countries.map((country) => (
                    <Link
                      key={country.path}
                      to={country.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-secondary/10 hover:text-secondary transition-all duration-200 whitespace-nowrap relative group"
                      onClick={() => {
                        if (dropdownTimeoutRef.current) {
                          clearTimeout(dropdownTimeoutRef.current);
                        }
                        setIsDropdownOpen(false);
                      }}
                    >
                      <span className="relative z-10">{country.name}</span>
                      <span className="absolute inset-0 bg-secondary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <NavLink to="/services" isScrolled={isScrolled}>Services</NavLink>
            <NavLink to="/about" isScrolled={isScrolled}>About</NavLink>
            <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, isScrolled }: { to: string; children: React.ReactNode; isScrolled: boolean }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`${
        isScrolled ? 'text-secondary hover:text-secondary/80' : 'text-white hover:text-white/80'
      } transition-all duration-300 relative group transform hover:scale-110 ${isActive ? 'font-semibold' : ''}`}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
};

export default Navbar;