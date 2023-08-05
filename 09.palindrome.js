/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    };

    if (x < 10) {
        return true
    };

    let numStr = x.toString();
    let i = 0;
    let j = numStr.length - 1;

    while (j > (numStr.length - 1) / 2) {
        if (numStr[i] != numStr[j]) {
            return false
        } else {
            i += 1;
            j -= 1;
        }
    }

    return true;
};

console.log(isPalindrome(1221));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(0));
console.log(isPalindrome(1000));
console.log(isPalindrome(1221221));