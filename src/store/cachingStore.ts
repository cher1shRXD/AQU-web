import { create } from "zustand";
import { User } from "../types/user/user.type";

interface CachingStore {
  cachingState: boolean;
  setCachingState: (cachingState: boolean) => void;
}

export const cachingStore = create<CachingStore>((set) => ({
  cachingState: false,
  setCachingState: (cachingState: boolean) => set(() => ({ cachingState })),
}));
