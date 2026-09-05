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
      <main className="relative z-10 flex flex-col justify-center min-h-screen px-8 sm:px-12 lg:px-20 pt-28 pb-32">
        <div className="max-w-3xl space-y-6">
          <h1 
            className="tracking-normal drop-shadow-none"
            style={{
              fontFamily: "'Compacta BT', 'Compacta Standard', 'Compacta', 'League Gothic', 'Oswald', Impact, sans-serif",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "88px",
              lineHeight: "96%",
              letterSpacing: "0px",
            }}
          >
            <span className="block" style={{ color: "#395c34" }}>Protect Every Crop.</span>
            <span className="block">
              <span style={{ color: "#395c34" }}>Grow With </span>
              <span style={{ color: "#8f2e29" }}>Confidence.</span>
            </span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl max-w-lg leading-relaxed font-normal"
            style={{ 
              color: "#395c34",
            }}
          >
            AI crop intelligence for early diseases detection,<br/>
            weather risk forecasting and soil insights-<br/>
            all in one platform.
          </p>
          
          <div className="pt-2 flex items-center gap-4">
            <Link 
              to="/register" 
              className="inline-flex items-center justify-center gap-2 bg-[#8f2e29] hover:bg-[#7a2622] text-white px-7 py-3 rounded-xl font-medium text-base transition-all shadow-md"
            >
              Explore CropXpert <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Bottom Partners Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-6 sm:mx-10 mb-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 p-5 px-8 flex flex-wrap items-center justify-between gap-6">
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
          
          <div className="flex items-center gap-2 text-white font-medium text-base">
            <Sprout className="w-5 h-5 text-white" />
            <span>{t("landing.partners_soil", "Soil Intelligence")}</span>
          </div>
          
          <div className="flex items-center gap-2 text-white font-medium text-base">
            <MapPin className="w-5 h-5 text-white" />
            <span>{t("landing.partners_network", "Local Networks")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
