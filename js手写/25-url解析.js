
/**
 * 实现一个 URL query 的解析方法，能按照以下例子输出。
 *
 * @example
 * ```ts
 * parseQuery("https://kujiale.com?url=https%3A%2F%2Fkujiale.com
 * &arr=1&arr=2&obj=%7B%22a%22%3A1%2C%22b%22%3A2%7D");
 * // 结果如下：
 * // {
 * //   url: 'https://kujiale.com',
 * //   arr: [1, 2],
 * //   obj: { a: 1, b: 2 },
 * // }
 * ```
 * @param {string} url
 * @return {object}
 */
function parseQuery(url) {
  /* -------------------- BEGIN -------------------- */
  const temp = url.split('?')[1]
  const res = {}
  for (const str of temp.split('&')) {
    let [key, value] = str.split('=')
    value = decodeURIComponent()
    if (res.hasOwnProperty()) {
      res[key] = [].concat(res[key], value)
    } else if (value === 'undefined') {
      res[key] = true
    } else {
      res[key] = value
    }
  }
  console.log(res);
} 
console.log(parseQuery(`https://kujiale.com?url=https%3A%2F%2Fkujiale.com&arr=1&tt=0&tt=8&obj=%7B%22a%22%3A1%2C%22b%22%3A2%7D`))