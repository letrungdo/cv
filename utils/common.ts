export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const isNullOrEmpty = (value?: number | string | null): value is null | undefined => {
    return (value ?? "") === "";
};

export const stringFormat = (str: string, ...args: string[]) =>
    str.replace(/{(\d+)}/g, (_match, index) => args[index] || "");

// https://jsfiddle.net/jonathansampson/m7G64/
export const throttle = (callback: any, limit = 250) => {
    let wait = false; // Initially, we're not waiting

    return () => {
        // We return a throttled function
        if (!wait) {
            // If we're not waiting
            callback.call(); // Execute users function
            wait = true; // Prevent future invocations
            setTimeout(() => {
                // After a period of time
                wait = false; // And allow future invocations
            }, limit);
        }
    };
};
