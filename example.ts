export let twoSum = function (nums: number[], target: number) {
  for (let i = 0, n = nums.length; i < n; ++i) {
      for(let j = i + 1; j < n; ++j){
          if(nums[i] + nums[j] === target) return [i, j]
      }
  }
};
