/* eslint-disable @typescript-eslint/no-explicit-any */
export const getSessionStorage = <T = any>(key: string, fallbackValue?: any): T => {
    if (typeof sessionStorage === "undefined") {
        return fallbackValue as T;
    }
    const data = sessionStorage.getItem(key);
    try {
        return (JSON.parse(data as string) || fallbackValue) as T;
    } catch (e) {
        return (data || fallbackValue) as T;
    }
};

export const getLocalStorage = <T = any>(key: string, fallbackValue?: any): T => {
    if (typeof localStorage === "undefined") {
        return fallbackValue as T;
    }
    const data = localStorage.getItem(key);
    try {
        return (JSON.parse(data as string) ?? fallbackValue) as T;
    } catch (e) {
        return (data || fallbackValue) as T;
    }
};
