import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Rider } from "@/lib/mocks";
import { apiFetch } from "@/lib/apiClient";
import { toast } from "react-toastify"; // ✅ added

interface RiderState {
  riders: Rider[];
  loading: boolean;
  fetchRiders: () => Promise<void>;
}

export const useRiderStore = create<RiderState>()(
  persist(
    (set) => ({
      riders: [],
      loading: false,
      async fetchRiders() {
        set({ loading: true });
        try {
          const data = await apiFetch<Rider[]>("/api/riders", {
            cache: "no-store",
          });
          set({ riders: data, loading: false });
        } catch (err) {
          toast.error("Failed to fetch riders."); // ✅ toast on error
          set({ loading: false });
        }
      },
    }),
    { name: "rider-store" }
  )
);
