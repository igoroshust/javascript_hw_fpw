function getCelcius(farenheit) {
    return Math.floor(
        (farenheit - 32) * 5 / 9
    );
}

module.exports = getCelcius;