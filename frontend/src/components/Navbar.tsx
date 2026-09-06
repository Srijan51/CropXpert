/**
 * Navigation bar component with language switcher.
 */

import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6 px-8 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo-icon.png"
            alt="CropXpert Icon"
            className="w-11 h-11 object-contain flex-shrink-0"
          />
          <img
            src="/logo-text.png"
            alt="CropXpert"
            className="h-8 object-contain object-left flex-shrink-0"
          />
        </Link>

        {/* Center Navigation Links - Glassmorphic Pill */}
        <div className="hidden md:flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 shadow-sm">
          <Link to="/" className="text-white bg-[#8f2e29] px-5 py-1.5 rounded-full font-medium text-sm transition-all shadow-sm">
            {t("nav.home", "Home")}
          </Link>
          <a href="#solutions" className="text-white hover:text-white/80 px-4 py-1.5 rounded-full font-medium text-sm transition-all">
            {t("nav.solutions", "Solutions")}
          </a>
          <a href="#resources" className="text-white hover:text-white/80 px-4 py-1.5 rounded-full font-medium text-sm transition-all">
            {t("nav.resources", "Resources")}
          </a>
          <a href="#pricing" className="text-white hover:text-white/80 px-4 py-1.5 rounded-full font-medium text-sm transition-all">
            {t("nav.pricing", "Pricing")}
          </a>
          <a href="#about" className="text-white hover:text-white/80 px-4 py-1.5 rounded-full font-medium text-sm transition-all">
            {t("nav.about", "About us")}
          </a>
        </div>

        {/* Right side: Language Switcher and Contact Button */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-white/20">
            <button onClick={() => changeLanguage("en")} className={`px-1.5 py-0.5 rounded ${i18n.language === 'en' ? 'bg-white/20 text-white font-bold' : 'hover:text-white'}`}>EN</button>
            <button onClick={() => changeLanguage("hi")} className={`px-1.5 py-0.5 rounded ${i18n.language === 'hi' ? 'bg-white/20 text-white font-bold' : 'hover:text-white'}`}>हि</button>
            <button onClick={() => changeLanguage("mr")} className={`px-1.5 py-0.5 rounded ${i18n.language === 'mr' ? 'bg-white/20 text-white font-bold' : 'hover:text-white'}`}>मर</button>
          </div>
          
          <button className="bg-[#8f2e29] hover:bg-[#7a2622] text-white font-medium px-6 py-2.5 rounded-2xl transition-colors shadow-sm text-sm">
            {t("nav.contact", "Contact Us")}
          </button>
        </div>
      </div>
    </nav>
  );
};

