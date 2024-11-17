type Difficulties = "medium" | "hard" | "easy";

export const ChallengeDifficulty: Difficulties = "medium"; // You can set "medium", "hard", or "easy" here.
export const ChallengeTitle:string="3254. Find the Power of K-Size Subarrays I";
export const ChallengeDescryption:string="Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.A subarray is a contiguous part of an array.";
export const dataList = [
    {
      title: "Example 1",
      items: ["Input: nums = [1, 2, 3], k = 2", "Output: [2, 3]"],
    },
    {
      title: "Example 2",
      items: ["Input: nums = [1], k = 1", "Output: 1"],
    },
    {
      title: "Example 3",
      items: ["Input: nums = [5, 3, 8], k = 3", "Output: 8"],
    },
    {
        title: "constraints:",
        items: ["1  nums.length  105", "1  nums.length 105"],
      },
  ];
  export const accordings: string[] = [
    "Topics",
    "Companies",
    "Similar Questions",
    "Discussion (129)"
  ];