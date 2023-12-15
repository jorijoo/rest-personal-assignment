import { signal } from "@preact/signals-react";

export const adminSignal = signal();

export const updateAdminToken = (data) => {
    adminSignal.value = data;
    sessionStorage.setItem("adminData", JSON.stringify(data));
};

export const clearAdminData = () => {
    adminSignal.value = {};
    sessionStorage.removeItem("adminData");
};