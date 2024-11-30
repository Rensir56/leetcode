//给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
//字母异位词 是由重新排列源单词的所有字母得到的一个新单词。


function groupAnagrams(strs: string[]): string[][] {
    // 创建一个哈希表，用于存储分组后的结果
    const map: { [key: string]: string[] } = {};
    // 遍历输入的字符串数组
    for (const str of strs) {
        // 对当前字符串进行排序，得到升序字符串
        const sortedStr = str.split('').sort().join('');
        // 检查哈希表中是否已经存在该键
        if (map[sortedStr]) {
            // 如果存在，将当前字符串添加到对应的列表中
            map[sortedStr].push(str);
        } else {
            // 如果不存在，创建一个新的列表，并将当前字符串添加到该列表中
            map[sortedStr] = [str];
        }
    }
    // 将哈希表中的所有值（即分组后的字符串列表）返回
    return Object.values(map);
}