import { leapyear } from "../main/leapyearkata";

describe('Leap Year kata', () => {
  it('it returns true if the year is a leap year', () => {
    expect(leapyear(2000)).toBe(true);
  })

  it('returns false if the year is a common year', () => {
    expect(leapyear(1900)).toBe(false);
  })
})
