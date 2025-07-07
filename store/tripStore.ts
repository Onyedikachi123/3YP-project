// /store/tripStore.ts
// import { create } from "zustand";
// import { Trip } from "@/lib/mocks";
// import { apiFetch } from "@/lib/apiClient";

// interface TripState {
//   trips: Trip[];
//   selected?: Trip;
//   loading: boolean;
//   error?: string;
//   fetchTrips: () => Promise<void>;
//   fetchTrip: (id: string) => Promise<void>;
// }

// export const useTripStore = create<TripState>((set) => ({
//   trips: [],
//   loading: false,
//   async fetchTrips() {
//     try {
//       set({ loading: true });
//       const data = await apiFetch<Trip[]>("/api/trips");
//       set({ trips: data, loading: false });
//     } catch (err: any) {
//       set({ loading: false, error: err.message });
//     }
//   },
//   async fetchTrip(id) {
//     try {
//       set({ loading: true });
//       const data = await apiFetch<Trip>(`/api/trips/${id}`);
//       set({ selected: data, loading: false });
//     } catch (err: any) {
//       set({ loading: false, error: err.message });
//     }
//   },
// }));

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Trip } from "@/lib/mocks";
import { apiFetch } from "@/lib/apiClient";

interface TripState {
  trips: Trip[];
  current?: Trip;
  loading: boolean;
  error?: string;
  fetchTrips: () => Promise<void>;
  fetchTrip: (id: string) => Promise<void>;
  addTrip: (data: Omit<Trip, "id">) => Promise<string>;
  updateTrip: (id: string, patch: Partial<Trip>) => Promise<void>;
  deleteTrip: (id: string) => Promise<void>;
}

export const useTripStore = create<TripState>()(
  persist(
    (set, get) => ({
      trips: [],
      loading: false,
      async fetchTrips() {
        set({ loading: true });
        try {
          const data = await apiFetch<Trip[]>("/api/trips");
          set({ trips: data, loading: false });
        } catch (e: any) {
          set({ loading: false, error: e.message });
        }
      },
      async fetchTrip(id) {
        const data = await apiFetch<Trip>(`/api/trips/${id}`);
        set({ current: data });
      },
      async addTrip(data) {
        const res = await apiFetch<{ id: string }>("/api/trips", {
          method: "POST",
          body: JSON.stringify(data),
        });
        set({ trips: [...get().trips, { id: res.id, ...data }] });
        return res.id;
      },
      async updateTrip(id, patch) {
        await apiFetch(`/api/trips/${id}`, {
          method: "PATCH",
          body: JSON.stringify(patch),
        });
        set({ trips: get().trips.map((t) => (t.id === id ? { ...t, ...patch } : t)) });
      },
      async deleteTrip(id) {
        await apiFetch(`/api/trips/${id}`, { method: "DELETE" });
        set({ trips: get().trips.filter((t) => t.id !== id) });
      },
    }),
    { name: "trip-store" }
  )
);
