//student object
const student = {
    name : "Jay",
    age: 22,
    passed: true
}

//preventExtensions
let preventExt = Object.preventExtensions(student);

// Check is isExtensible
let isExt = Object.isExtensible(student)

//teacher object
const teacher = {
    subject: "Math"
}

//seal the teacher object
let sealObj = Object.seal(teacher)

//Update the Value
sealObj.subject = "Hindi"
console.log(sealObj)

//Delete Object
delete sealObj.subject // Cannot delete the seal objects
console.log(sealObj)

//checked sealed or not
let isSealed = Object.isSealed(sealObj)

//Printing preventExtensions and isSealed
console.log(isExt)
console.log(isSealed)