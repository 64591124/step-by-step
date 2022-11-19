/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s
 * 判断字符串是否有效。
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let len = s.length;
  if (len % 2 === 1) {
    return false;
  }
  let stack = [];
  let map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < len; i++) {
    let val = s.charAt(i);
    if (val in map) {
      stack.push(val);
    } else {
      let top = stack.pop();
      if (map[top] !== val) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
