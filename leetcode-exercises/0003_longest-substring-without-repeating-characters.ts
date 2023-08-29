//leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s: string): number {
  let mp = new Map();
  let i = 0;

  for (let letter of s) {
    if (mp.has(letter)) return i;

    mp.set(letter, i);
    i++;
  }
  return i;
}
