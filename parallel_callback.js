// Параллельные вычисления

const calc = (func, callback) => {
    const a = func(function (inp) {
        callback(inp);
    });
    if (a) {
        callback(a);
    }
};

function parallel(funcs, callback) {
    let result = Array(funcs.length);
    let count = 0;

    for (let i in funcs) {
        const n = i;
        calc(funcs[i], (value) => {
            result[n] = value;
            count++;
            if (funcs.length === count) {
                callback(result);
            }
        });
    }
}

parallel(
    [
        function (resolve) {
            setTimeout(function () {
                resolve(10);
            }, 50);
        },
        function () {
            return 5;
        },
        function (resolve) {
            setTimeout(function () {
                resolve(0);
            }, 10);
        }
    ],
    function (results) {
        console.log(results); // [10, 5, 0]
    }
);
