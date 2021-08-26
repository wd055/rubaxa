/**
 * Получения двумерный массив анаграмм из произвольного массива слов
 * @param   {string[]} list
 * @returns {Array<[string, string]>}
 */
function getAnagrams(list) {
    let obj = {};
    let result = [];

    for (let word of list) {
        let sorted = word.toLowerCase().split('').sort().join('');
        if (!obj[sorted]) {
            obj[sorted] = [];
        }
        obj[sorted].push(word);
    }

    Object.entries(obj).filter(([key, value])=> value.length > 1).forEach(([key, value]) => {
        let tmpStr = value[0];
        value = value.splice(1);
        while(value.length){
            for(let str of value){
                result.push([tmpStr, str])
            }
            tmpStr = value[0]
            value = value.slice(1)
        }
    });

    return result;
}

const inputList = ['кот', 'пила', 'барокко', 'стоп', 'ток', 'кошка', 'липа', 'коробка', 'пост'];

// Проверка (лучше смотреть в консоль)
console.log(getAnagrams(inputList));
// [
//   ['кот', 'ток'],
//   ['пила', 'липа'],
//   ['барокко', 'коробка'],
//   ['стоп', 'пост'],
// ]
