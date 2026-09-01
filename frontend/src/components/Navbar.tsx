/**
 * Navigation bar component with language switcher.
 */

import React from "react";
import { useTranslation } from "react-i18next";

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-primary-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">🌾 {t("app_name")}</h1>
        {/* TODO: Add navigation links and language switcher */}
        <div className="flex gap-2">
          <button onClick={() => changeLanguage("en")} className="text-sm hover:underline">EN</button>
          <button onClick={() => changeLanguage("hi")} className="text-sm hover:underline">हि</button>
          <button onClick={() => changeLanguage("mr")} className="text-sm hover:underline">मर</button>
        </div>
      </div>
    </nav>
  );
};
