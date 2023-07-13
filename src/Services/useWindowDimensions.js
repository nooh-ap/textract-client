import {useSyncExternalStore} from "react";

export function useWindowDimensions() {
    const windowDimensions = useSyncExternalStore(subscribe, getSnapshot);
    return windowDimensions;
};

function subscribe(callback) {
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
};

function getSnapshot() {
    return {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
    }
};