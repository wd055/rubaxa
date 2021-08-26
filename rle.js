/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
 function rle(value) {
    if (typeof value !== 'string' || value.length === 0) {
        return '';
    }
    let result = '';
    let count = 0;
    for (let i in value) {
        if (value[i] !== value[Number(i) + 1]) {
            result += value[i] + (count ? count + 1 : '');
            count = 0;
        } else {
            count++;
        }
    }
    return result;
}

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));
