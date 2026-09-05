/**
 * Forecasting API service.
 */

import api from "./api";
import { OutbreakRisk } from "@/types";

export const forecastingService = {
  /** Get outbreak risk forecast for a location. */
  async getRisk(lat: number, lng: number): Promise<OutbreakRisk> {
    const { data } = await api.get("/forecasting/risk", {
      params: { latitude: lat, longitude: lng },
    });
    return data;
  },
};
