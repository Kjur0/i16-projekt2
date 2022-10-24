const lr = require("line-reader")

function rozklad(n) {
    let out = [],
        k = 2

    while (n > 1) {
        while (n % k == 0) {
            out.push(k)
            n /= k
        }
        k++
    }
    return out
}

let num1, len1 = 0, num2, len2 = 0

lr.eachLine('liczby.txt', (line, last) => {
    let tmp = rozklad(line),
        len = tmp.length,
        unique = tmp.filter((element, index) => { return tmp.indexOf(element) === index }).length

    if (len > len1) {
        num1 = line
        len1 = len
    }
    if (unique > len2) {
        num2 = line
        len2 = unique
    }
    if (last) {
        console.log(`Liczba, która ma najwięcej czynników pierwszych to ${num1}. Ma ona ${len1} czynników pierwszych`)
        console.log(`Liczba, która ma najwięcej różnych czynników pierwszych to ${num2}. Ma ona ${len2} różnych czynników pierwszych`)
    }
})
