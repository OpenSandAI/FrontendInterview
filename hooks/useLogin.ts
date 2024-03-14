import { create } from "zustand";

interface LoginStore {
  isOpen?: boolean;
  setOpen: (isOpen: boolean) => void;
}

const useLogin = create<LoginStore>()(set => ({
  isOpen: false,
  setOpen: (isOpen: boolean) => set({ isOpen }),
}));

export default useLogin;
