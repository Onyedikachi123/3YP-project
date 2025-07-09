import { create } from "zustand";
import { Vehicle } from "@/lib/mocks";
import { apiFetch } from "@/lib/apiClient";
import { toast } from "react-toastify"; // ✅ added

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
    } catch (err) {
      toast.error("Failed to fetch vehicles."); // ✅ toast on error
      set({ loading: false });
    }
  },
}));
