/**
 * Detection page — upload crop images for disease/pest identification.
 */

import React from "react";
import { useTranslation } from "react-i18next";

const DetectionPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">{t("detection.upload_title")}</h2>
      <p className="mt-2 text-gray-600">{t("detection.upload_description")}</p>
      {/* TODO: Implement image upload component */}
    </div>
  );
};

export default DetectionPage;
