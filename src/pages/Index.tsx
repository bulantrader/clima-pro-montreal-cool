import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Fan, AirVent, Wrench, ThumbsUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Index: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Get the last uploaded image path from Lovable uploads
    const backgroundImagePath = '/lovable-uploads/49470c43-333e-46ae-b8af-32b2254cd34b.png';
    const backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${backgroundImagePath}')`;
    console.log('Background Image URL:', backgroundImage);
    
    const img = new Image();
    img.onload = () => console.log('Image loaded successfully');
    img.onerror = (error) => console.error('Image failed to load:', error);
    img.src = backgroundImagePath;
  }, []);

  return (
    <>
      <section className="relative bg-cover bg-center" style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('/lovable-uploads/49470c43-333e-46ae-b8af-32b2254cd34b.png')`,
        height: '600px'
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-shadow animate-fade-in">
              {t('hero.title')}
            </h1>
            <p className="text-white text-lg sm:text-xl mb-8 text-shadow animate-fade-in">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
              <a 
                href="tel:+15141234567" 
                className="bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t('hero.cta.call')}
              </a>
              <Link 
                to="/contact" 
                className="bg-secondary hover:bg-yellow-500 text-gray-800 font-medium px-6 py-3 rounded-md transition-colors"
              >
                {t('hero.cta.quote')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('services.highlights.title')}</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all">
              <div className="bg-blue-50 p-4 rounded-full inline-flex mb-4">
                <AirVent className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t('services.highlights.residential')}</h3>
              <p className="text-gray-600">Expert installations for homes and businesses</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all">
              <div className="bg-blue-50 p-4 rounded-full inline-flex mb-4">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t('services.highlights.professional')}</h3>
              <p className="text-gray-600">Quality setup by certified technicians</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all">
              <div className="bg-blue-50 p-4 rounded-full inline-flex mb-4">
                <ThumbsUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t('services.highlights.pricing')}</h3>
              <p className="text-gray-600">Affordable rates with no hidden fees</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all">
              <div className="bg-blue-50 p-4 rounded-full inline-flex mb-4">
                <Fan className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t('services.highlights.serving')}</h3>
              <p className="text-gray-600">Greater Montreal area coverage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                  alt="ClimaPro Installations Professional Service"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('why.title')}</h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white p-1 rounded-full">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-lg">{t('why.licensed')}</h3>
                    <p className="text-gray-600">Our team is fully trained, licensed, and insured for your peace of mind.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white p-1 rounded-full">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-lg">{t('why.turnaround')}</h3>
                    <p className="text-gray-600">We understand the urgency of staying cool – most installations completed within 48 hours.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white p-1 rounded-full">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-lg">{t('why.bilingual')}</h3>
                    <p className="text-gray-600">Our team communicates fluently in both English and French.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8">
                <Link to="/contact" className="bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded-md transition-colors inline-block">
                  {t('hero.cta.quote')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
