import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { store } from "./redux/store";
import { loadFromStorage } from "./redux/features/auth/authSlice";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function initAuthFromStorage() {
  // Make sure we are on client
  const stored = localStorage.getItem("auth");
  if (stored) {
    const parsed = JSON.parse(stored);
    store.dispatch(loadFromStorage({ user: parsed.user, token: parsed.token }));
  }
}
