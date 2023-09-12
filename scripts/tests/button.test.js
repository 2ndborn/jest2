/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
})

describe("DOM tests", () => {
    test("Expects p content to change", () => {
        buttonClick();
        expect(getElementById("par").innerHTML).toEqual("You Clicked");
    });
});