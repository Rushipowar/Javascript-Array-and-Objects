const students = [
    { id: 1, firstname: "John", lastname: "Doe", age: 20, grade: "A"},
    { id: 2, firstname: "Jen", lastname: "Smith", age: 22, grade: "B"},
    { id: 3, firstname: "Bob", lastname: "Johnson", age: 19, grade: "A"}
]

function addNewStd(){
    let newStd = { id: 4, firstname: "Jess", lastname: "Rev", age: 21, grade: "A"}
    students.push(newStd)
    console.log(students)
}
addNewStd()

function updateStd(){
    let findIndex  = students.findIndex((obj => obj.id === 1))
    students[findIndex].firstname = "Sam"
    console.log(students)
}
updateStd()

function deleteStd(){
    // delete students[3] 

    students.splice(3)
    console.log(students)
}
deleteStd()