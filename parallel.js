// Параллельные вычисления

const calc = (func) => {
    return new Promise((resolve) => {
        let funcValue;
        new Promise((resolveFunc) => {
            funcValue = func(resolveFunc);
        }).then((value) => {
            resolve(value);
        });
        if (funcValue) {
            resolve(funcValue);
        }
    });
};

function parallel(arr, callback) {
    const len = arr.length;
    let count = 0; 
    let result = [];

    if (len === 0) {
        callback([]);
    }

    for (var i in arr) {
        let n = i;
        calc(arr[i]).then((value) => {
            result[n] = value;
            count++;
            if (count === len) {
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
