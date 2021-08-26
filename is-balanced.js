/**
 * Проверка на сбалансированность фигурных скобкок
 * @param  {string}  input
 * @return {boolean}
 */
function isBalanced(input) {
    let count = 0;
    for (let ch of input) {
        switch (ch) {
            case '{':
                count++;
                break;

            case '}':
                count--;
                break;

            default:
                break;
        }
        if (count < 0) {
            return false;
        }
    }
    return count === 0;
}

console.log('balanced:', isBalanced('{{}{}}{}')); // true
console.log('not balanced:', isBalanced('{}{{}')); // false
