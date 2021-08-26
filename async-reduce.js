/**
 * Асинхронный reduce
 * @param  {any[]}    input
 * @param  {Function} iterator
 * @param  {any} initialValue
 * @return {Promise}
 */
function asyncReduce(input, iterator, initialValue) {
    const len = input.length;
    let count = 0;
    let result = initialValue;
    let tmpReslut = [];
    
    return new Promise((resolve) => {
        if (len === 0) {
            resolve(result);
        }
        for (var i in input) {
            let n = i;
            input[i]().then((value) => {
                tmpReslut[n] = value;
                count++;
                if (len === count) {
                    for (var j in input) {
                        result = iterator(result, tmpReslut[j]);
                    }
                    resolve(result);
                }
            });
        }
    });
}

let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => new Promise((resolve) => setTimeout(() => resolve('c'), 100));

asyncReduce([a, c, b], (acc, value) => [...acc, value], ['d']).then(
    (results) => {
        console.log(results); // ['d', 'a', 'c', 'b'];
    }
);
