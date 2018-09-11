module.exports = function getZerosCount(number) {
  number -= number % 5;
  const countZeroes = [];

  while (number >= 5) {
    if (number % 5) number -= number % 5;
    countZeroes.push((number /= 5));
  }

  return countZeroes.reduce((sum, num) => sum + num, 0);
};
