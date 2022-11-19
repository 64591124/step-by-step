function shuffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let random = Math.floor(Math.random() * (len - i)) + i
    console.log(random);
    [arr[i], arr[random]] = [arr[random], arr[i]]
    // let temp = arr[i]
    // arr[i] = arr[random]
    // arr[random] = temp
  }
  return arr
}

console.log(shuffle([1,2,3,4,5,6,7,8]))