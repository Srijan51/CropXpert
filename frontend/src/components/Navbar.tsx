/**
 * Navigation bar component with responsive mobile hamburger menu and language switcher.
 */

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-4 sm:px-8 sm:py-6 lg:px-16">
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

        {/* Center Navigation Links - Glassmorphic Pill (Desktop) */}
        <div className="hidden md:flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30 shadow-sm">
          <Link
            to="/"
            className="text-white bg-[#8f2e29] px-5 py-1.5 rounded-full font-medium text-sm transition-all shadow-sm"
          >
            {t("nav.home", "Home")}
          </Link>
          <a
            href="#solutions"
            className="text-white hover:text-white/80 px-4 py-1.5 rounded-full font-medium text-sm transition-all"
          >
            {t("nav.solutions", "Solutions")}
          </a>
          <a
            href="#resources"
            className="text-white hover:text-white/80 px-4 py-1.5 rounded-full font-medium text-sm transition-all"
          >
            {t("nav.resources", "Resources")}
          </a>
          <a
            href="#pricing"
            className="text-white hover:text-white/80 px-4 py-1.5 rounded-full font-medium text-sm transition-all"
          >
            {t("nav.pricing", "Pricing")}
          </a>
          <a
            href="#about"
            className="text-white hover:text-white/80 px-4 py-1.5 rounded-full font-medium text-sm transition-all"
          >
            {t("nav.about", "About us")}
          </a>
        </div>

        {/* Right side: Language Switcher and Contact Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium border border-white/20">
            <button
              onClick={() => changeLanguage("en")}
              className={`px-1.5 py-0.5 rounded ${
                i18n.language === "en" ? "bg-white/20 text-white font-bold" : "hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("hi")}
              className={`px-1.5 py-0.5 rounded ${
                i18n.language === "hi" ? "bg-white/20 text-white font-bold" : "hover:text-white"
              }`}
            >
              हि
            </button>
            <button
              onClick={() => changeLanguage("mr")}
              className={`px-1.5 py-0.5 rounded ${
                i18n.language === "mr" ? "bg-white/20 text-white font-bold" : "hover:text-white"
              }`}
            >
              मर
            </button>
          </div>

          <button className="bg-[#8f2e29] hover:bg-[#7a2622] text-white font-medium px-6 py-2.5 rounded-2xl transition-colors shadow-sm text-sm">
            {t("nav.contact", "Contact Us")}
          </button>
        </div>

        {/* Hamburger Button (Mobile only) */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-200 focus:outline-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide-down Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed inset-x-0 top-0 bg-[#1a2e1d]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl px-6 py-6 transition-transform duration-300 ease-in-out md:hidden ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Header: Logo and Close (X) Button */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              <img
                src="/logo-icon.png"
                alt="CropXpert Icon"
                className="w-10 h-10 object-contain flex-shrink-0"
              />
              <img
                src="/logo-text.png"
                alt="CropXpert"
                className="h-7 object-contain object-left flex-shrink-0"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Vertically Stacked Navigation Links */}
          <div className="flex flex-col py-6 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white bg-[#8f2e29] px-5 py-3 rounded-xl font-medium text-base text-center transition-all shadow-sm"
            >
              {t("nav.home", "Home")}
            </Link>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-white hover:bg-white/10 px-5 py-3 rounded-xl font-medium text-base text-center transition-all"
            >
              {t("nav.solutions", "Solutions")}
            </a>
            <a
              href="#resources"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-white hover:bg-white/10 px-5 py-3 rounded-xl font-medium text-base text-center transition-all"
            >
              {t("nav.resources", "Resources")}
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-white hover:bg-white/10 px-5 py-3 rounded-xl font-medium text-base text-center transition-all"
            >
              {t("nav.pricing", "Pricing")}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/90 hover:text-white hover:bg-white/10 px-5 py-3 rounded-xl font-medium text-base text-center transition-all"
            >
              {t("nav.about", "About us")}
            </a>
          </div>

          {/* Mobile Language Switcher and Contact Button */}
          <div className="pt-4 border-t border-white/10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              <button
                type="button"
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  i18n.language === "en" ? "bg-white/20 text-white font-bold" : "hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => changeLanguage("hi")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  i18n.language === "hi" ? "bg-white/20 text-white font-bold" : "hover:text-white"
                }`}
              >
                हि
              </button>
              <button
                type="button"
                onClick={() => changeLanguage("mr")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  i18n.language === "mr" ? "bg-white/20 text-white font-bold" : "hover:text-white"
                }`}
              >
                मर
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#8f2e29] hover:bg-[#7a2622] text-white font-medium py-3 rounded-xl transition-colors shadow-sm text-sm"
            >
              {t("nav.contact", "Contact Us")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
