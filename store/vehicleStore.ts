// /store/vehicleStore.ts
import { create } from "zustand";
import { Vehicle } from "@/lib/mocks";
import { apiFetch } from "@/lib/apiClient";

interface VehicleState {
  vehicles: Vehicle[];
  loading: boolean;
  fetchVehicles: () => Promise<void>;
}

export const useVehicleStore = create<VehicleState>((set) => ({
  vehicles: [],
  loading: false,
  async fetchVehicles() {
    set({ loading: true });
    try {
      const data = await apiFetch<Vehicle[]>("/api/vehicles");
      set({ vehicles: data, loading: false });
    } catch {
      set({ loading: false });
    }
  },
}));
