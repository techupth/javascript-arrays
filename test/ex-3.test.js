import fs from "fs/promises";

describe("test JS Array Hack Hour", () => {
  test("ex-3: Array of Orders", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} return totalPurchaseOfDary`;

    const func = new Function(code);
    const result = func();

    expect(result).toEqual(934902);
  });
});
