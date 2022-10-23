//Color Util

import u_num from "./num";

const u_color = (() => {
    const randomRGB = () => u_num.randomIntArray(0, 255, 3);
    const randomHex = () => `#${randomRGB().map((i) => i.toString(16).padStart(2, "0")).join('')}`;

    const exported = {
        randomRGB,
        randomHex
    };

    return exported;
})();

export default u_color;