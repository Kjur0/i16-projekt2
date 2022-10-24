const lr = require("line-reader")

let cnt = 0, frst

lr.eachLine('liczby.txt', (line, last) => {
    if (line.toString().charAt(0) == line.toString().charAt(line.length - 1)) {
        if (cnt++ == 0)
            frst = line
    }
    if (last) {
        console.log(`Znaleziono ${cnt} linii, które spełnioły podany warunek`)
        console.log(`Pierwsza linia spełniająca warunek to: ${frst}`)
    }
})