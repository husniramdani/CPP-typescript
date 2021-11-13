"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSum = void 0;
var twoSum = function (nums, target) {
    for (var i = 0, n = nums.length; i < n; ++i) {
        for (var j = i + 1; j < n; ++j) {
            if (nums[i] + nums[j] === target)
                return [i, j];
        }
    }
};
exports.twoSum = twoSum;
