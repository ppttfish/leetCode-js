var towSum = function (nums, target) {
  if (nums.length === 2) return [0, 1]
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    let tmp = target - nums[i]
    let found = map[tmp]
    if (found !== undefined) return [found, i]
    else map[nums[i]] = i
  }
}

let arr = [1, 9, 3, 4, 6]
x = 10

console.log(towSum(arr, x))
