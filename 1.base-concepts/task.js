'use strict';

// Задача №1
function solveEquation(a, b, c) {
  let arr = [];
  let D = (b ** 2 - 4 * a * c);
  
  if (D >= 0) {
    let x1 = (- b + Math.sqrt(D)) / (2 * a);
    let x2 = (- b - Math.sqrt(D)) / (2 * a);
    arr = D === 0 ? [x1] : [x1, x2];;
  }
  return arr;
}

// Задача №2
function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(+percent)) {
   return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  const restoredPercent = parseFloat(percent);

  if (isNaN(+contribution)) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  }
  const restoredСontribution = parseFloat(contribution);
  
  if (isNaN(+amount)) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
  }
  const restoredAmount = parseFloat(amount);

  const S = restoredAmount - restoredСontribution;
 
  const P = (restoredPercent * 1 / 12) / 100;

  let startDate = new Date();
  let finalDate = new Date(date);
  let n = (finalDate.getFullYear() * 12 + finalDate.getMonth()) - (startDate.getFullYear() * 12 + startDate.getMonth());
  
  let payment = S * (P + P / (Math.pow( 1 + P, n) - 1));
 
  let totalAmount = payment * n;

  console.log(+totalAmount.toFixed(2));

  return +totalAmount.toFixed(2);
}
