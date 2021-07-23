export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const isNullOrEmpty = (value?: number | string | null) => {
    return (value ?? "") === "";
};

export const stringFormat = (str: string, ...args: string[]) =>
    str.replace(/{(\d+)}/g, (_match, index) => args[index] || "");
