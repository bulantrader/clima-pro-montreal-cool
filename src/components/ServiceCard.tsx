
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex flex-col items-center text-center group">
      <div className="bg-blue-50 p-4 rounded-full mb-4 group-hover:bg-primary transition-colors">
        <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
