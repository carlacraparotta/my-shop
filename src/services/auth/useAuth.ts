import { create } from "zustand";
import * as AuthService from "./auth.api";
export interface AuthState {
    error: boolean;
    isLogged: boolean;
    token: string | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
    error: false,
    isLogged: AuthService.isLogged(),
    token: AuthService.getToken(),
    login: async (username, password) => {
        set({ error: false, isLogged: false });
        try {
            await AuthService.login(username, password);
            set({ isLogged: AuthService.isLogged(), token: AuthService.getToken() });
        } catch (err) {
            set({ error: true, isLogged: false });
        }
        
    },
    logout: () => {
        AuthService.logout();
        set({ isLogged: false, token: null });
    }
    
}))