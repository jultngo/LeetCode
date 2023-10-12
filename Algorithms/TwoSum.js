/** https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numToIndex = new Map();

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];

        if(numToIndex.has(difference)) {
            return [numToIndex.get(difference), i]
        }

        numToIndex.set(nums[i], i);
    }

    throw new Error("no solution")
};