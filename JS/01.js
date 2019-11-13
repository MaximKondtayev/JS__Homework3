let numStart = i = parseInt(prompt("Задайте начало числового диапазона"));

let numEnd = prompt("Задайте конец числового диапазона");

let sum = 0;

while (i <= numEnd) {
    sum += i;
    i++
}

alert(`сумма всех числе в диапазоне от ${numStart} до ${numEnd} равна ${sum}`);