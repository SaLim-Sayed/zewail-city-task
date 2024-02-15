import { create } from 'zustand';

// Define the user store
interface UserStore {
  count: number;
  setCount: (count: number) => void; // Corrected type for setCount
}

// Create the store
export const useUserStore = create<UserStore>((set) => ({
  count: 0,
  // Method to set count
  setCount: (count) => set({ count }), // Update the count in the store
}));
