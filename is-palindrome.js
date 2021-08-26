/**
 * Является ли строка палиндромом
 * @param  {string}  value
 * @return {boolean}
 */
function isPalindrome(value) {
    let str = value.toLowerCase().replaceAll(' ', '').split('');
    while (str.length) {
        let ch1 = str.splice(0, 1);
        let ch2 = str.splice(-1, 1);
        if (ch1.length + ch2.length === 2 && ch1[0] !== ch2[0]) {
            return false;
        }
    }
    return str.length === 0;
}

console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('A man a plan a canal Panama')); // true
