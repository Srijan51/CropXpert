/**
 * Detection API service.
 */

import api from "./api";
import { DetectionResult } from "@/types";

export const detectionService = {
  /** Upload an image for disease identification. */
  async identifyDisease(image: File): Promise<DetectionResult> {
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await api.post("/detection/identify", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  },

  /** Upload an image for pest detection. */
  async detectPests(image: File): Promise<DetectionResult> {
    const formData = new FormData();
    formData.append("image", image);
    const { data } = await api.post("/detection/detect-pests", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  },

  /** Get detection history for the current user. */
  async getHistory(): Promise<DetectionResult[]> {
    const { data } = await api.get("/detection/history");
    return data;
  },
};
