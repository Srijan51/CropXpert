/**
 * Advisory API service.
 */

import api from "./api";
import { Advisory } from "@/types";

export const advisoryService = {
  /** Generate a treatment advisory for a detection. */
  async generate(detectionId: string, language: string = "en"): Promise<Advisory> {
    const { data } = await api.post("/advisory/generate", { detection_id: detectionId, language });
    return data;
  },

  /** Get dosage guidance for a pesticide. */
  async getDosage(pesticideId: string, crop: string, areaHectares: number) {
    const { data } = await api.get("/advisory/dosage", {
      params: { pesticide_id: pesticideId, crop, area_hectares: areaHectares },
    });
    return data;
  },

  /** Get TTS audio for an advisory. */
  async getAudio(advisoryId: string, language: string = "en") {
    const { data } = await api.post("/advisory/tts", { advisory_id: advisoryId, language });
    return data;
  },
};
