
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-16 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">{t('contact.title')}</h1>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
        </div>
      </section>
      
      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-lg text-gray-700">
              {t('contact.message')}
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">{t('footer.phone')}</h3>
                      <a href="tel:+15141234567" className="text-gray-700 hover:text-primary transition-colors">
                        +1 (514) 123-4567
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">{t('footer.email')}</h3>
                      <a href="mailto:info@climapro.com" className="text-gray-700 hover:text-primary transition-colors">
                        info@climapro.com
                      </a>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-700">
                        {t('footer.address')}
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-700">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 3:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <a 
                  href="tel:+15141234567" 
                  className="bg-primary hover:bg-primary-light text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center flex-1"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  {t('contact.call')}
                </a>
                <a 
                  href="mailto:info@climapro.com" 
                  className="bg-secondary hover:bg-yellow-500 text-gray-800 font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center flex-1"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </div>
              
              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178787.92385433818!2d-73.8728358204003!3d45.55748544860798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1714498127233!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
