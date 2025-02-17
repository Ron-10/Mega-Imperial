import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Get in touch with our expert consultants today
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          <ContactCard
            icon={<Phone className="w-6 h-6" />}
            title="Phone"
            info={['+977 985-7033669', '071591669']}
            onClick={() => window.location.href = "tel:+977-985-7033669"}
          />
          <ContactCard
            icon={<Mail className="w-6 h-6" />}
            title="Email"
            info={['megaimperial007@gmail.com']}
            onClick={() => window.location.href = "mailto:megaimperial007@gmail.com"}
          />
          <ContactCard
            icon={<MapPin className="w-6 h-6" />}
            title="Address"
            info={['Krish Building, 2nd Floor', 'Milanchowk, Butwal, Nepal']}
            onClick={() => window.open("https://maps.google.com/?q=Mega+Imperial+Consultancy+Services,+Milanchowk,+Butwal,+Nepal", "_blank")}
          />
        </div>
      </div>
    </section>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  info: string[];
  onClick?: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, info, onClick }) => {
  return (
    <div 
      className="text-center p-8 rounded-xl bg-gray-50 hover:bg-white transition-all duration-500 group animate-on-scroll hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="inline-block p-4 bg-secondary/10 rounded-full text-secondary mb-6 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-secondary transition-colors duration-300">
        {title}
      </h3>
      {info.map((line, index) => (
        <p key={index} className="text-gray-600 leading-relaxed">{line}</p>
      ))}
    </div>
  );
};

export default ContactSection;