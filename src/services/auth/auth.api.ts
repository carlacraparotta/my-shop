import { pb } from '../../pocketbase';

export function login(username: string, password: string) {
    return pb.admins.authWithPassword(username, password);
}

export function logout() {
    pb.authStore.clear();
}

export function getToken() {
    return pb.authStore.token;
}

export function isLogged() {
    return pb.authStore.isValid;
}