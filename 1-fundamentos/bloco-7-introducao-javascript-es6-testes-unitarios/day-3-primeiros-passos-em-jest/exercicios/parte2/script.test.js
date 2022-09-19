const myRemove = require("./script.js");

describe("Exrcicio 2", () => {

test('retorna uma cópia desse array sem o elemento item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toContain(1, 2, 4);
  });

  test('retorna uma cópia desse array sem o elemento item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  });

  test('retorna uma cópia desse array sem o elemento item', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toContain(1, 2, 3, 4);
  });
});  