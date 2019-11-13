let num = prompt("Задайте число");

if (isNaN(num)) {
    alert(`Ошибка!!!!`)
} else {
    let num1 = num.length;
    alert(`Число длинной в ${num1} символа`);
}