let num = prompt("Введите число ");

let sliceNum = prompt("Введите число на которое хотите сдвинуть ");

if (isNaN(num) || isNaN(sliceNum)) {
    alert("ошибка !!!!");
} else {
    alert(`Ваш результат ${num.slice(sliceNum) + num.slice(0, sliceNum)}`);
}