console.log("nodeJs tutorial")

const os = require("os")
const path = require("path")
const {add , subtract ,  multiply , divide}= require("./math")

console.log(add(8,9))
console.log(multiply(8,9))
console.log(divide(8,9))
console.log(subtract(8,9))

/* some core modules


console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))*/