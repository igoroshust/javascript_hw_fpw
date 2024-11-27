const getCelcius = require("../getCelcius");

test("Из Фаренгейтов - в Цельсии", () => {
    expect(getCelcius(87)).toBe(30);
});