/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
    if (left.length !== right.length) {
        return false;
    }
    let obj = {};
    for (let i = 0; i < left.length; i++) {
        const chL = left[i];
        const chR = right[i];
        if (obj[chL] && obj[chL] !== chR) {
            return false;
        } else {
            obj[chL] = chR;
        }
    }
    return true;
}

console.log('egg -> add:', isIsomorphic('egg', 'add')); // true
console.log('paper -> title:', isIsomorphic('paper', 'title')); // true
