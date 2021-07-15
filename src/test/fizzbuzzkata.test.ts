import { fizzBuzz } from "../main/fizzbuzzkata";

describe('Fizzbuzz Kata', () => {
  it("should return the number as a string", () => {
    expect(fizzBuzz(1)).toEqual("1");
  });
});
