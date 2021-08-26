/**
 * Получения массива уникальных значений
 * @param  {number[]} values
 * @return {*}
 */
function uniq(values) {
    return values.filter((item, i) => values.indexOf(item) === i);
}

console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));
