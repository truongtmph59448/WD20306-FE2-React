import {create} from "zustand";
import { persist } from "zustand/middleware";

export type AuthState = {
    user: any;
    token: string | null;

    setUser: (data: {})
}