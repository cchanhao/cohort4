let tier1 = 48535;
let tier2 = 48534;
let tier3 = 53404;
let tier4 = 63895;

const offShore = {

    taxCalc: (num) => {
        if (num <= 48535) {
            return (num * 0.15).toFixed(2);
        }
        else if (num > 48535 && num <= 97069) {
            return ((tier1 * 0.15) + ((num - tier1) * 0.205)).toFixed(2);
        }
        else if (num > 97069 && num <= 150473) {
            return ((tier1 * 0.15) + (tier2 * 0.205) + ((num - (tier1 + tier2)) * 0.26)).toFixed(2);
        }
        else if (num > 150473 && num <= 214368) {
            return ((tier1 * 0.15) + (tier2 * 0.205) + (tier3 * 0.26) + ((num - (tier1 + tier2 + tier3)) * 0.29)).toFixed(2);
        }
        else {
            return ((tier1 * 0.15) + (tier2 * 0.205) + (tier3 * 0.26) + (tier4 * 0.29) + ((num - (tier1 + tier2 + tier3 + tier4)) * 0.33)).toFixed(2);
        }
    },

};
export default offShore;