const addfn = require("./app");

test("add functions works", () => {
  expect(addfn(7, 7)).toBe(14);
});
