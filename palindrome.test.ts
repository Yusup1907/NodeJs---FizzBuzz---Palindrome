import palindrome from "./palindrome";

describe("palindrome", () => {
  test("should be truthy for empty string", () => {
    const result = palindrome('');
    expect(true).toBe(result);
  });
  test("should be falsy for 'asdf' and 'qwer'", () => {
    const results = palindrome('asdf');
    expect(false).toBe(results);
    const result = palindrome('qwer');
    expect(false).toBe(result);
  });
  test("should be truthy for 'a', 'ada' and 'yay'", () => {
    const result = palindrome('a');
    expect(true).toBe(result);
    const results = palindrome('ada');
    expect(true).toBe(results);
    const resultst = palindrome('yay');
    expect(true).toBe(resultst);
  });
  test("should ignore case", () => {
    const result = palindrome('Ada');
    expect(true).toBe(result);
    const results = palindrome('yaY');
    expect(true).toBe(results);
  });
  test("should ignore whitespaces and punctuation", () => {
    const result = palindrome('Race car');
    expect(true).toBe(result);
  });
  test("should print palindrome if receive a multiple of 3 and 5", () => {
    const result = palindrome('Race, car!');
    expect(true).toBe(result);
  });
});