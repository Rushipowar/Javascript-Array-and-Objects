const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Min and Max ages
ages.sort()
let minage = ages[0]
let maxage = ages[ages.length - 1]
console.log(minage)
console.log(maxage)

//Middle Age
let medianAge;
const midIndex = Math.floor(ages.length / 2);
medianAge = ages[midIndex];
console.log(medianAge)

//Avarage Age
let sum = ages.reduce((acc, age) => acc + age, 0)
let avarage = sum / ages.length
console.log(avarage)

//Range of Ages
let range = minage - maxage
console.log(range)

//Compare
let minAverage = Math.abs(minage - avarage)
let maxAverage = Math.abs(maxage - avarage)
console.log(minAverage)
console.log(maxAverage)