import { signal } from "@preact/signals-react";

// Luo signaali autentikointitokenille
export const authTokenSignal = signal(sessionStorage.getItem("token") || "");

// Funktio tokenin päivittämiseen
export const updateAuthToken = (newToken) => {
    authTokenSignal.value = newToken;
    sessionStorage.setItem("token", newToken);
};
