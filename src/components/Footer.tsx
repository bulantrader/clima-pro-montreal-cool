
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-white font-poppins font-bold text-xl">ClimaPro</span>
              <span className="text-gray-300 font-poppins ml-1">Installations</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Professional air conditioning installation services across Greater Montreal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.666.254 1.23.596 1.785 1.151.555.555.897 1.119 1.152 1.785.247.636.416 1.363.465 2.427.048 1.023.06 1.379.06 3.808s-.012 2.785-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.911 4.911 0 01-1.152 1.785 4.906 4.906 0 01-1.785 1.151c-.636.247-1.363.416-2.427.465-1.023.048-1.379.06-3.808.06s-2.784-.012-3.807-.06c-1.064-.049-1.792-.218-2.428-.465a4.908 4.908 0 01-1.785-1.151 4.907 4.907 0 01-1.151-1.785c-.247-.636-.416-1.363-.465-2.427-.047-1.023-.06-1.379-.06-3.808s.013-2.784.06-3.807c.049-1.064.218-1.792.465-2.428a4.905 4.905 0 011.151-1.785 4.91 4.91 0 011.785-1.151c.636-.247 1.364-.416 2.428-.465 1.023-.047 1.379-.06 3.807-.06zm0 1.661c-2.389 0-2.672.01-3.612.053-.871.04-1.343.185-1.657.308a3.12 3.12 0 00-1.143.743c-.338.338-.576.712-.743 1.143-.123.315-.268.786-.308 1.658-.043.939-.052 1.222-.052 3.611s.01 2.672.052 3.612c.04.87.185 1.343.308 1.657.167.431.405.804.743 1.143.339.338.712.576 1.143.742.314.123.786.268 1.657.308.94.042 1.223.052 3.612.052s2.672-.01 3.611-.052c.871-.04 1.343-.185 1.658-.308.431-.166.804-.404 1.143-.742.338-.339.576-.712.742-1.143.123-.314.268-.786.308-1.657.043-.94.052-1.223.052-3.612s-.01-2.672-.052-3.611c-.04-.872-.185-1.343-.308-1.658a3.126 3.126 0 00-.742-1.143 3.119 3.119 0 00-1.143-.743c-.315-.123-.787-.267-1.658-.308-.94-.043-1.223-.052-3.611-.052z" clipRule="evenodd"></path>
                  <path fillRule="evenodd" d="M12.315 6.85a5.15 5.15 0 100 10.3 5.15 5.15 0 000-10.3zm0 8.497a3.347 3.347 0 110-6.694 3.347 3.347 0 010 6.694z" clipRule="evenodd"></path>
                  <path d="M19.526 6.619a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">{t('contact.title')}</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-light mr-2 mt-0.5" />
                <span className="text-gray-400">{t('footer.address')}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-light mr-2" />
                <a href="tel:+15141234567" className="text-gray-400 hover:text-white transition-colors">+1 (514) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-light mr-2" />
                <a href="mailto:info@climapro.com" className="text-gray-400 hover:text-white transition-colors">info@climapro.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-gray-400 text-sm text-center">
          <p>&copy; {currentYear} ClimaPro Installations. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
