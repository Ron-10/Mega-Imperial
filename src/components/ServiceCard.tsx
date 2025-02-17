import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 group border-t-2 border-transparent hover:border-secondary">
      <div className="text-secondary mb-6 transform group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-secondary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;