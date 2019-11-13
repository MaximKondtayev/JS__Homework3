let number = parseInt(prompt("Введите число"));

let i = number;

while (i >= 1) {
    number % i;
    if (number % i == 0) {
        alert(i);
    }
    i--;
}