let positive = 0;

let negative = 0;

let zero = 0;

let even = 0;

let odd = 0;

for (let i = 1; i <= 10; i++) {

    let num = prompt("Введите число");
    console.log(num);

    if (num > 0) {
        positive++
    }
    if (num < 0) {
        negative++
    }
    if (num == 0) {
        zero++
    }
    if (num % 2 == 0) {
        even++
    }
    if (num % 2 !== 0) {
        odd++
    }
};

console.log(positive);
console.log(negative);
console.log(zero);
console.log(even);
console.log(odd);