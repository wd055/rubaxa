// Реализовать создание следующую запись ;]
// ...

const ROMAN_DIGITS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

const fromArabicToRoman = (number) => {
    if (number < 1) {
        return '';
    }

    return Object.entries(ROMAN_DIGITS).reduce(
        (result, [romanDigit, value]) => {
            while (number >= value) {
                result += romanDigit;
                number -= value;
            }
            return result;
        },
        ''
    );
};

// По какое число заполнить методы
const countOfArabicNumbers = 10;

for (let i = 1; i <= countOfArabicNumbers; i++) {
    Object.defineProperty(Number.prototype, fromArabicToRoman(i), {
        get: function () {
            return Array(i - this)
                .fill()
                .map((element, index) => index + this);
        }
    });
}

console.log(0..V); // [0, 1, 2, 3, 4];
console.log(0..VII); // [0, 1, 2, 3, 4, 5, 6];
