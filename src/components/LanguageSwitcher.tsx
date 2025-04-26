
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`text-sm px-2 py-1 rounded-md transition-all ${
          language === 'en' ? 'bg-primary text-white' : 'bg-transparent text-gray-700'
        }`}
        onClick={() => setLanguage('en')}
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button
        className={`text-sm px-2 py-1 rounded-md transition-all ${
          language === 'fr' ? 'bg-primary text-white' : 'bg-transparent text-gray-700'
        }`}
        onClick={() => setLanguage('fr')}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
