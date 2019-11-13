let next;

do {
    let first = prompt("Введите первое число");
    let second = prompt("Введите второе число");
    let operator = prompt("Введите математический оператор");
    let answer = eval(`${first} ${operator} ${second}`);
    alert(answer);
    next = prompt("ЫШО?");
}
while (next !== null) {

}