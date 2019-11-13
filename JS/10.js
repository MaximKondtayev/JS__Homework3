const n = 0;

const m = 100;

let start = n;

let end = m;

while (true) {
    let num = Math.floor((start + end) / 2);
    let answear = prompt(num + ` Это то число которое вы загодали ? - y (yes), - b (bigger), - l (lower)`);

    if (answear == 'y') {
        alert(`Да это оно!!!`);
        break;
    }
    if (answear == 'l') {
        end = num - 1;
    }
    if (answear == 'b') {
        start = num + 1;
    }
}
