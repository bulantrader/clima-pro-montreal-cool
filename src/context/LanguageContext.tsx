
import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "en" | "fr";

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  // Navbar
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About Us", fr: "À Propos" },
  "nav.services": { en: "Services", fr: "Services" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  
  // Hero
  "hero.title": { 
    en: "Stay Cool with Montreal's Trusted AC Installation Experts", 
    fr: "Restez au frais avec les experts en installation de climatisation à Montréal" 
  },
  "hero.subtitle": { 
    en: "Fast, professional air conditioning assembly and installation across Greater Montreal.", 
    fr: "Installation et assemblage de climatiseurs rapides et professionnels dans le Grand Montréal." 
  },
  "hero.cta.call": { en: "Call Us", fr: "Appelez-nous" },
  "hero.cta.quote": { en: "Request a Quote", fr: "Demander un devis" },
  
  // Service Highlights
  "services.highlights.title": { en: "Service Highlights", fr: "Points forts du service" },
  "services.highlights.residential": { en: "Residential & Commercial Installations", fr: "Installations résidentielles et commerciales" },
  "services.highlights.professional": { en: "Professional Assembly & Setup", fr: "Assemblage et configuration professionnels" },
  "services.highlights.pricing": { en: "Competitive Pricing", fr: "Prix compétitifs" },
  "services.highlights.serving": { en: "Serving Montreal, Laval, Longueuil, and Surroundings", fr: "Desservant Montréal, Laval, Longueuil et les environs" },
  
  // Why Choose Us
  "why.title": { en: "Why Choose ClimaPro Installations", fr: "Pourquoi choisir ClimaPro Installations" },
  "why.licensed": { en: "Licensed & Insured Technicians", fr: "Techniciens certifiés et assurés" },
  "why.turnaround": { en: "Fast Turnaround Times", fr: "Délais d'exécution rapides" },
  "why.bilingual": { en: "Bilingual Service (English & French)", fr: "Service bilingue (anglais et français)" },
  
  // About Us
  "about.title": { en: "About Us", fr: "À Propos de Nous" },
  "about.description": { 
    en: "With years of experience, ClimaPro Installations is Montreal's trusted name for air conditioning solutions. Our certified team guarantees quality work, fast service, and total customer satisfaction.",
    fr: "Avec des années d'expérience, ClimaPro Installations est le nom de confiance à Montréal pour les solutions de climatisation. Notre équipe certifiée garantit un travail de qualité, un service rapide et une satisfaction totale du client."
  },
  
  // Services Page
  "services.title": { en: "Our Services", fr: "Nos Services" },
  "services.wallmounted": { en: "Wall-Mounted AC Installations", fr: "Installations de climatiseurs muraux" },
  "services.central": { en: "Central Air Conditioning Installations", fr: "Installations de climatisation centrale" },
  "services.ductless": { en: "Ductless Mini-Split Installations", fr: "Installations de mini-splits sans conduit" },
  "services.assembly": { en: "Assembly & Setup of New Units", fr: "Assemblage et configuration de nouvelles unités" },
  "services.upgrades": { en: "System Upgrades and Replacements", fr: "Mises à niveau et remplacements de systèmes" },
  "services.area.title": { en: "Service Area", fr: "Zone de service" },
  "services.area.description": { 
    en: "Serving Greater Montreal, Laval, Longueuil, West Island, South Shore, Downtown, and surrounding regions.",
    fr: "Desservant le Grand Montréal, Laval, Longueuil, l'Ouest de l'Île, la Rive-Sud, le centre-ville et les régions environnantes."
  },
  
  // Contact Page
  "contact.title": { en: "Contact Us", fr: "Contactez-nous" },
  "contact.message": { 
    en: "Ready for a cooler home or office? Contact us today to schedule your air conditioning installation!",
    fr: "Prêt pour une maison ou un bureau plus frais? Contactez-nous dès aujourd'hui pour planifier votre installation de climatisation!"
  },
  "contact.form.name": { en: "Name", fr: "Nom" },
  "contact.form.phone": { en: "Phone Number", fr: "Numéro de téléphone" },
  "contact.form.email": { en: "Email", fr: "Courriel" },
  "contact.form.message": { en: "Message", fr: "Message" },
  "contact.form.submit": { en: "Submit", fr: "Soumettre" },
  "contact.call": { en: "Call Us Now", fr: "Appelez-nous maintenant" },
  "contact.quote": { en: "Request a Quote", fr: "Demander un devis" },
  
  // Footer
  "footer.rights": { en: "All rights reserved", fr: "Tous droits réservés" },
  "footer.address": { 
    en: "Montreal, Quebec, Canada", 
    fr: "Montréal, Québec, Canada" 
  },
  "footer.phone": { en: "Phone", fr: "Téléphone" },
  "footer.email": { en: "Email", fr: "Courriel" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    console.warn(`Translation key not found: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
