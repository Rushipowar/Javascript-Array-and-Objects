function displayStudentInfo(student) {
    for (let property in student) {
        if (student.hasOwnProperty(property)) {
            console.log(`${property}: ${student[property]}`);
        }
    }
}


const student = {
    name: 'John Doe',
    age: 20,
    grade: 'A',
    courses: ['Math', 'English', 'Science']
};
displayStudentInfo(student);
