import { create } from "zustand";
import { User } from "../types/user/user.type";



interface UserStore {
  user: User,
  setUser: (user:User) => void;
  clearUser: () => void;
}

export const userStore = create<UserStore>((set) => ({
  user: {
    id: 0,
    username: "",
    role: "DEFAULT",
    board: [],
  },
  setUser: (user: User) => set(() => ({ user })),
  clearUser: () =>
    set(() => ({
      user: {
        id: 0,
        username: "",
        role: "DEFAULT",
        board: [],
      },
    })),
}));