import { useState } from "react";

export function useStoredState(storageKey, initialState) {
   
    function getInitialState() {
        const storedState =  localStorage.getItem(storageKey);
        return storedState ?? initialState;
    }

    const [state, setState] =  useState(getInitialState);

    function setStoredState(state) {
        setState(state);
        localStorage.setItem(storageKey, state);
    }

    return [state, setStoredState]
}