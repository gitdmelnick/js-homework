function convertNumberToBase() {
  let number = prompt("Введите первое значение (число)");
  let base = prompt("Введите значение системы счисления (число от 2 до 32)");

  const isNumericString = (str) =>
    !isNaN(str) && !isNaN(parseFloat(str)) && !/\s/.test(str);
  const isValidRangeString = (str) => /^(?:[2-9]|[1-2][0-9]|3[0-2])$/.test(str);

  if (isNumericString(number) && isValidRangeString(base)) {
    let result = (+number).toString(+base);
    console.log(result);
  } else {
    console.log("Некорректный ввод!");
  }
}

function logSumAndQuotient() {
  const isNumericString = (str) =>
    !isNaN(str) && !isNaN(parseFloat(str)) && !/\s/.test(str);

  let a = prompt("Введите первое значение");
  if (!isNumericString(a)) {
    console.log("Некорректный ввод!");
    return;
  }

  let b = prompt("Введите второе значение");
  if (!isNumericString(b)) {
    console.log("Некорректный ввод!");
    return;
  }

  const decimalPlaces = (str) => {
    if (str.includes(".")) {
      let fractions = str.split(".").pop();
      return fractions.length;
    }
    return 0;
  };

  const powerOfTen = (times) => 10 ** decimalPlaces(times);

  let sum = Number(a) + Number(b);
  let quotient =
    (((Number(a) * powerOfTen(a)) / Number(b)) * powerOfTen(b)) /
    (powerOfTen(a) * powerOfTen(b));

  console.log(`Ответ: ${sum}, ${quotient}.`);
}
