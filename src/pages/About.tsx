
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">{t('about.title')}</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-6">Montreal's Trusted AC Installation Experts</h2>
                <p className="mb-4 text-gray-700">
                  {t('about.description')}
                </p>
                <p className="mb-4 text-gray-700">
                  Founded with a commitment to quality and customer satisfaction, ClimaPro Installations has grown to become one of Montreal's most trusted names in air conditioning installation. Our team of licensed technicians brings years of expertise to every job, ensuring your cooling systems are perfectly installed and optimized for efficiency.
                </p>
                <p className="mb-4 text-gray-700">
                  We take pride in our attention to detail, from the initial assessment to the final installation. Every member of our team is fully certified and regularly trained on the latest air conditioning technologies to provide you with the best possible service.
                </p>
                <h3 className="text-xl font-bold mt-8 mb-4">Our Mission</h3>
                <p className="mb-4 text-gray-700">
                  To provide exceptional air conditioning installation services that enhance comfort, improve energy efficiency, and exceed customer expectations through professional workmanship and dedicated service.
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/contact" className="bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded-md transition-colors inline-block">
                  {t('hero.cta.quote')}
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 lg:pl-12">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3"></div>
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                  alt="ClimaPro Installations Team"
                  className="rounded-lg shadow-xl relative z-10"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-primary">100+</h4>
                  <p className="text-gray-700">Installations Completed Monthly</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-primary">10+</h4>
                  <p className="text-gray-700">Years of Industry Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">R</div>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Robert T.</h4>
                  <p className="text-sm text-gray-500">Westmount</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-2">
                ★★★★★
              </div>
              <p className="text-gray-700">
                "The team at ClimaPro was incredibly professional. They installed my new AC unit quickly and the quality of work was outstanding. I'm enjoying a perfectly cooled home thanks to their expertise."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">S</div>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Sophie M.</h4>
                  <p className="text-sm text-gray-500">Longueuil</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-2">
                ★★★★★
              </div>
              <p className="text-gray-700">
                "J'ai été impressionnée par le service rapide et l'installation impeccable. L'équipe était courtoise et professionnelle. Je recommande fortement ClimaPro Installations!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">D</div>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">David L.</h4>
                  <p className="text-sm text-gray-500">Laval</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-2">
                ★★★★★
              </div>
              <p className="text-gray-700">
                "The technicians were on time, efficient, and very knowledgeable. They took the time to explain the system to me and made sure everything was working perfectly before leaving. Excellent service!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
