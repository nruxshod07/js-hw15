// 1clea

// function math() {
//     let a = +prompt()
//     let b = +prompt()
//     alert(`
//     ${a} + ${b} = ${a + b} 
//     ${a} - ${b} = ${a - b} 
//     ${a} / ${b} = ${a / b} 
//     ${a} * ${b} = ${a * b} 
//     ${a} ** ${b} = ${a ** b} 
//     ${a} % ${b} = ${a % b} 
//     `)
// }
// math()

// 2

// let names = ["Alex","George","Michael"]
// function name(a, b, c) {
// return names.reduce((a,b) => (b.length > a.length) ? b : a)
// }
// let longestName = name()
// alert(longestName)

//3


function min(...nums) {
    let minNum = 999999
    alert(minNum)
    for (let items of nums) {
        if (typeof items === 'number') {
            if (items < minNum) {
                   minNum  = items
            }
        } else if (Array.isArray(items)) {
            for (let item of items) {
                if (item < minNum) {
                        minNum = item
                }
            }
        } else if (typeof items === 'object') {
            for (let key in items) {
                if (items[key] < minNum) {
                    minNum = items[key]
                }
            }
        }
    }
    return minNum
}

console.log(min(1, 2));
console.log(min([1, 2]));
console.log(min({ a: 1, b: 2 }));
console.log(min({ a: 1, b: 2 }, { a: -21, b: -112 }));