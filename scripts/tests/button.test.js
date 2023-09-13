/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementById("h1").length).toBe(1)
    });
});