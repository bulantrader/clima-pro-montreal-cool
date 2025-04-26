
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { AirVent, Thermometer, Fan, Wrench, HeartPulse } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: AirVent,
      title: t('services.wallmounted'),
      description: 'Efficient installation of wall-mounted units for single rooms or open spaces.'
    },
    {
      icon: Fan,
      title: t('services.central'),
      description: 'Complete central air conditioning systems for whole-home cooling solutions.'
    },
    {
      icon: Thermometer,
      title: t('services.ductless'),
      description: 'Energy-efficient ductless mini-split systems for zoned cooling without extensive ductwork.'
    },
    {
      icon: Wrench,
      title: t('services.assembly'),
      description: 'Professional assembly and setup of new air conditioning units of all brands.'
    },
    {
      icon: HeartPulse,
      title: t('services.upgrades'),
      description: 'System upgrades and replacements to improve efficiency and performance.'
    }
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">{t('services.title')}</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Installation Process</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              Our streamlined process ensures a smooth and efficient installation experience from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">We assess your needs and space to recommend the best cooling solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2">Detailed Quote</h3>
              <p className="text-gray-600">Receive a comprehensive quote with transparent pricing and no hidden costs.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2">Professional Installation</h3>
              <p className="text-gray-600">Our licensed technicians complete the installation with minimal disruption.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">4</div>
              <h3 className="text-lg font-semibold mb-2">System Testing</h3>
              <p className="text-gray-600">Final inspection and testing ensures everything works perfectly before we leave.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('services.area.title')}</h2>
              <p className="text-gray-700 mb-6">
                {t('services.area.description')}
              </p>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Montreal</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Laval</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Longueuil</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>West Island</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>South Shore</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Downtown</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/contact" className="bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded-md transition-colors inline-block">
                  {t('contact.quote')}
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-12">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f"
                  alt="Greater Montreal Service Area"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Stay Cool?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote for your air conditioning installation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="tel:+15141234567" 
              className="bg-white text-primary hover:bg-gray-100 font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t('contact.call')}
            </a>
            <Link 
              to="/contact" 
              className="bg-secondary hover:bg-yellow-500 text-gray-800 font-medium px-6 py-3 rounded-md transition-colors"
            >
              {t('contact.quote')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
