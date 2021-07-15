export const leapyear = (year: number): boolean => {
  return isDivisibleBy(year, 4) && (!isDivisibleBy(year, 100) || isDivisibleBy(year, 400))
}

export const isDivisibleBy = (a: number, b: number): boolean => {
  return a % b === 0
}
