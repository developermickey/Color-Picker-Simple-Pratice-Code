const btn = document.querySelector("button");
const h3 = document.querySelector("h3");

const pickColor = async () => {
    try {
        const eyeDropper = new EyeDropper();
        const { sRGBHex } = await eyeDropper.open();
        h3.innerHTML = sRGBHex;
        h3.style.color = sRGBHex;
    } catch (error) {
        console.error("Color picking failed:", error);
    }
};

btn.addEventListener("click", pickColor);
