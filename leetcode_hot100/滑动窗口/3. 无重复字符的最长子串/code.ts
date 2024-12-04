// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串的长度。

//思路 1.滑动窗口
function lengthOfLongestSubstring1(s: string): number {
    if(s.length == 0)
        return 0;

    let start:number = 0;
    let cur:number = 0;
    let max_len:number = 1; 
    while (cur < s.length){
        cur++;
        for(let i:number = start; i < cur; i++){
            if(s[i] == s[cur]){
                max_len = Math.max(max_len,cur - start);
                start = i+1;
            }
        }
    }
    max_len = Math.max(max_len,cur - start);
    return max_len;
};

//思路 2.哈希表
function lengthOfLongestSubstring2(s: string): number {
    const seen = Array(128).fill(false); // 128 表示所有可打印 ASCII 字符
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen[s.charCodeAt(right)]) {
            seen[s.charCodeAt(left)] = false;
            left++;
        }
        seen[s.charCodeAt(right)] = true;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}