let firstNum = parseInt(prompt("Введите первое число"));

let secondNum = parseInt(prompt("Введите второе число"));

i = Math.min(firstNum, secondNum);


while (firstNum % i !== 0 || secondNum % i !== 0) {
    i--;
}

alert(i);