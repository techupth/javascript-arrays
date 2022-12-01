import fs from "fs/promises";

describe("test JS Array Hack Hour", () => {
  test("ex-2: Manipulating Employee Array", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} return updateEmployees.length`;

    const func = new Function(code);
    const result = func();

    expect(result).toEqual(3);
  });
});
