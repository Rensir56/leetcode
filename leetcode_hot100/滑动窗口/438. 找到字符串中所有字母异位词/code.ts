// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词
// 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

function findAnagrams(s: string, p: string): number[] {

    function arraysEqual(arr1: number[], arr2: number[]): boolean {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }

    let res: number[] = [];
    let pCount: number[] = new Array(26).fill(0);
    let sCount: number[] = new Array(26).fill(0);

    // 初始化 pCount
    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    // 滑动窗口
    for (let left = 0, right = 0; right < s.length; right++) {
        sCount[s.charCodeAt(right) - 'a'.charCodeAt(0)]++;

        if (right - left + 1 === p.length) {
            if (arraysEqual(sCount, pCount)) {
                res.push(left);
            }
            sCount[s.charCodeAt(left) - 'a'.charCodeAt(0)]--;
            left++;
        }
    }

    return res;
}