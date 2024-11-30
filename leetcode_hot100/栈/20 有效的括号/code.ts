/*
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 */

/*遍历字符串：
如果是左括号 (, {, [，就将其压入栈中。
如果是右括号 ), }, ]，检查栈顶是否是对应的左括号。如果是，弹出栈顶元素；否则，字符串无效。
最后检查栈是否为空，如果栈为空，说明所有括号匹配，否则说明还有未匹配的左括号。
 */

function isValid(s: string): boolean {
    // 定义一个栈用于存放左括号
    const stack: string[] = [];
    // 定义一个映射，右括号对应的左括号
    const matchingBrackets: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    // 遍历字符串中的每个字符
    for (let char of s) {
        // 如果当前字符是左括号，就压入栈
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            // 如果是右括号，检查栈顶元素是否是对应的左括号
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;  // 不匹配则返回 false
            }
        }
    }
    // 最终栈应该为空，如果不为空，说明有未匹配的左括号
    return stack.length === 0;
};