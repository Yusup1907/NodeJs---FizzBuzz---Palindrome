import fizzbuzz from "./fizzbuzz";

describe("fizzbuzz", () => {
  test("should print 1 if receive 1", () => {
    const result = fizzbuzz(1);
    expect(1).toBe(result);
  });
  test("should print fizz if receive 3", () => {
    const result = fizzbuzz(3);
    expect("fizz").toBe(result);
  });
  test("should print fizz if receive a multiple of 3", () => {
    const result = fizzbuzz(6);
    expect("fizz").toBe(result);
  });
  test("should print buzz if receive 5", () => {
    const result = fizzbuzz(5);
    expect("buzz").toBe(result);
  });
  test("should print buzz if receive a multiple of 5", () => {
    const result = fizzbuzz(10);
    expect("buzz").toBe(result);
  });
  test("should print fizzbuzz if receive a multiple of 3 and 5", () => {
    const result = fizzbuzz(15);
    expect("fizzbuzz").toBe(result);
  });
});