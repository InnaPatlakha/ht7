// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

let digit = String(prompt ("Введіть п'ятизначне число"));
let arr1 = digit.split("");
let arr2 = arr1.reverse();
let result = arr2.join(' ');
console.log (result);