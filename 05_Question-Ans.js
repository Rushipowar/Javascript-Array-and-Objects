const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
}

for (let property in student) {
    if (student.hasOwnProperty(property)) {
       
        console.log(`${property}: ${student[property]}`);

        if (property === 'Alice') {
            console.log('Alice:');
            for (let i = 0; i < student[property].length; i++) {
                console.log(`  ${i + 1}. ${student[property][i]}`);
            }
        } else if (property === 'age' && student[property] >= 18) {
            console.log('This student is eligible for voting.');
        }
    }
}