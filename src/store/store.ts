import { create } from 'zustand'

interface MeasurementsState {
  height: number | null;
  weight: number | null;
  setHeight: (height: number) => void;
  setWeight: (weight: number) => void;
  dropMeasurements: () => void;
}

export const useMeasurements = create<MeasurementsState>((set) => ({
  height: null,
  weight: null,

  setHeight: (height) => set({ height }),
  setWeight: (weight) => set({ weight }),
  dropMeasurements: () => set({ height: null, weight: null }),
}));