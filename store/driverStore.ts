import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Driver } from "@/lib/mocks";
import { apiFetch } from "@/lib/apiClient";

interface DriverState {
  drivers: Driver[];
  loading: boolean;
  fetchDrivers: () => Promise<void>;
}

export const useDriverStore = create<DriverState>()(
  persist(
    (set) => ({
      drivers: [],
      loading: false,
      async fetchDrivers() {
        set({ loading: true });
        try {
          const data = await apiFetch<Driver[]>("/api/drivers", {
            cache: "no-store",
          });
          set({ drivers: data, loading: false });
        } catch {
          set({ loading: false });
        }
      },
    }),
    { name: "driver-store" }
  )
);
