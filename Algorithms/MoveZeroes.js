/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;
    let pointer = index + 1;
    while(pointer < nums.length) {
        if(nums[index] != 0) {
            index ++;
            pointer ++;
        } else {
            if(nums[pointer] != 0) {
                [nums[index], nums[pointer]] = [nums[pointer], nums[index]];
                index ++;
            }
            pointer ++;
        }
    }
};