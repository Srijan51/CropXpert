import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Eye, Satellite, CloudSun, Sprout, MapPin } from "lucide-react";

export const LandingPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-black overflow-hidden font-sans">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        {/* Subtle overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent"></div>
      </div>

      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-col justify-center min-h-screen px-4 pt-20 pb-28 sm:px-8 sm:pt-28 sm:pb-32 lg:px-20">
        <div className="max-w-xl sm:max-w-3xl space-y-6">
          <h1 
            className="tracking-normal drop-shadow-none"
            style={{
              fontFamily: "'Compacta BT', 'Compacta Standard', 'Compacta', 'League Gothic', 'Oswald', Impact, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "clamp(36px, 8vw, 88px)",
              lineHeight: 1.05,
              letterSpacing: "0px",
            }}
          >
            <span className="block" style={{ color: "#395c34" }}>{t("landing.headline_line1")}</span>
            <span className="block">
              <span style={{ color: "#395c34" }}>{t("landing.headline_part1")}</span>
              <span style={{ color: "#8f2e29" }}>{t("landing.headline_highlight")}</span>
            </span>
          </h1>
          
          <p 
            className="text-sm sm:text-base max-w-xs sm:max-w-lg leading-relaxed font-normal"
            style={{ 
              color: "#395c34",
            }}
          >
            {t("landing.subtext")}
          </p>
          
          <div className="pt-2 flex items-center gap-4">
            <Link 
              to="/register" 
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-[#8f2e29] hover:bg-[#7a2622] text-white px-7 py-3 rounded-xl font-medium text-base transition-all shadow-md"
            >
              {t("landing.explore")} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Bottom Partners Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-3 sm:mx-6 lg:mx-10 mb-4 sm:mb-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-3 sm:p-5 px-4 sm:px-8 flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-6">
          <div className="text-white font-semibold text-base whitespace-nowrap">
            {t("landing.partners_tech", "Our Technology Partners")}
          </div>
          
          <div className="flex items-center gap-2 text-white font-medium text-base">
            <Eye className="w-5 h-5 text-white" />
            <span>{t("landing.partners_ai", "AI Vision")}</span>
          </div>
          
          <div className="flex items-center gap-2 text-white font-medium text-base">
            <Satellite className="w-5 h-5 text-white" />
            <span>{t("landing.partners_sat", "Satellite Insights")}</span>
          </div>
          
          <div className="flex items-center gap-2 text-white font-medium text-base">
            <CloudSun className="w-5 h-5 text-white" />
            <span>{t("landing.partners_weather", "Weather Data")}</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 text-white font-medium text-base">
            <Sprout className="w-5 h-5 text-white" />
            <span>{t("landing.partners_soil", "Soil Intelligence")}</span>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 text-white font-medium text-base">
            <MapPin className="w-5 h-5 text-white" />
            <span>{t("landing.partners_network", "Local Networks")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
