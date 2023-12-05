import { signal, effect } from "@preact/signals-react";

export const cartContentSignal = signal([]);

/*
---------------------------------------
Syncs localStorage with cartContentSignal changes.
---------------------------------------
*/
effect(() => {
    const product = cartContentSignal.value;

    if (product.length !== 0) {
        const updatedStorageCart = cartContentSignal.value;
        localStorage.setItem("cart", JSON.stringify(updatedStorageCart));
    }
});
