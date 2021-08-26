// Реализоватьсвойство `size`  у всех массивов,
// которое работало бы точно так же, как и `length`.

Object.defineProperty(Array.prototype, 'size', {
    get: function () {
        let count = 0;
        this.forEach(() => {
            count++;
        });
        return count;
    },
    set: function (newSize) {
        this = [];
        this.splice(newSize);
    }
});

// #1
console.log([0, 1].size); // 2

// #2
var arr = [0, 1, 2];
arr.size = 0;
console.log(arr); // []
