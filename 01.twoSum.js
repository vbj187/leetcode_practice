var twoSum = function (nums, target) {
    let one = 0;
    let two = 1;
    while (two < nums.length) {
        let numOne = nums[one];
        let numTwo = nums[two];
        if (numOne + numTwo == target) {
            return [one, two]
        } else if (two == nums.length - 1) {
            one = one + 1;
            two = one + 1;
        } else {
            two += 1;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 2, 3], 6));
console.log(twoSum([1, 2, 3, 4, 5, 6, 7], 9));
console.log(twoSum([1, 2, 3, 4, 5], 5));
console.log(twoSum([2, 5, 5, 11], 10));