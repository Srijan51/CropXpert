/**
 * Shared TypeScript type definitions for CropXpert.
 */

export interface DetectionResult {
  id: number;
  detectionType: "disease" | "pest";
  diseaseName?: string;
  pestName?: string;
  confidence: number;
  severity?: "mild" | "moderate" | "severe";
  pestCount?: number;
  cropType?: string;
  createdAt: string;
}

export interface Advisory {
  id: number;
  detectionId: number;
  content: string;
  language: string;
  pesticideRecommendation?: string;
  dosageInfo?: string;
  ipmStrategy?: string;
  audioUrl?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: "farmer" | "extension_worker" | "officer";
  language: "en" | "hi" | "mr";
}

export interface OutbreakRisk {
  location: { lat: number; lng: number };
  riskLevel: "low" | "medium" | "high" | "critical";
  diseases: string[];
  pests: string[];
  forecast: string;
}

export interface HotspotData {
  id: number;
  lat: number;
  lng: number;
  type: "disease" | "pest";
  name: string;
  count: number;
  severity: string;
}
