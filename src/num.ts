//Number utils

const u_num = (() => {
  const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);

  const randomIntArray = (min: number, max: number, length: number) =>
    Array.from({ length }, () => randomInt(min, max));

  const sum = (...numbers: number[]) => numbers.reduce((a, b) => a + b);

  const exported = {
    randomInt,
    randomIntArray,
    sum,
  };

  return exported;
})();

export default u_num;
