export const convertImageToCanvas = (image: HTMLImageElement) => {
    const canvas = document.createElement("canvas");
    canvas.width = image.width * 2;
    canvas.height = image.height * 2;
    const ctx = canvas.getContext("2d");
    if (ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.drawImage(image, 0, 0, image.width * 2, image.height * 2);
    }

    return canvas;
};
