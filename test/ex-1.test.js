import fs from "fs/promises";

describe("test JS Array Hack Hour", () => {
  test("ex-1: Accessing Colors", async () => {
    const data = await fs.readFile("./ex-1.js");
    const code = `${data} return blueColor`;

    const func = new Function(code);
    const result = func();

    expect(result).toEqual(colors[2]);
  });
});
