// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);

let firstString = prompt('Введіть слово або число');
let secondString = prompt('Зробіть це ще раз');
let thirdString = prompt('І ще раз');

alert (`
    Користувач увів наступні дані: ${firstString}, ${secondString}, ${thirdString}
`);