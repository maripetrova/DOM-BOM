const getNumber = function (max = 11, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
};

const getRGB = function(alpha = 100) {
    let r = getNumber(256)
    let g = getNumber(256)
    let b = getNumber(256)
    alpha = +(alpha / 100).toFixed(2);
    return `rgba(${r},${g},${b},${alpha})`
}