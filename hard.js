let num = 266219
num = String(num)
let numLength = (num.length)
let result = 1
let strDegree
let degree = 1
let arr = num.split("")

for (let i = 0; i < numLength; i++)
  result *= Number(num[i])

for (let t = 0; t < 3; t++)
  degree *= result
  

console.log(arr)
console.log(result)
console.log(degree)
strDegree = String(degree)
console.log(strDegree[0], strDegree[1])