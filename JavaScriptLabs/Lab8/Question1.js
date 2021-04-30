
let student = {
    firstName: 'default',
    lastName: 'default',
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades = newGrade;
    },
    computeAverageGrade: function () {
        return this.grades.reduce((accum, elem) => accum + elem / (this.grades.length), 0);

    },
    display: function () {
        return this.firstName + "  " + this.lastName + " " + 'average grade =' + this.computeAverageGrade();
    }
}
let student1 = Object.create(student);
student1.firstName = 'John';
student1.lastName = 'smith';
student1.inputNewGrade([4, 1]);

let student2 = Object.create(student);
student2.firstName = 'rig';
student2.lastName = 'richard';
student2.inputNewGrade([4, 2]);

let student3 = Object.create(student);
student3.firstName = 'charles';
student3.lastName = 'richard';
student3.inputNewGrade([4, 3]);

let multiple = [student1, student2, student3];
let result = multiple.map(student => student.computeAverageGrade()).reduce((accum, elem, index, array) => accum + elem / multiple.length, 0);
console.log('Total grade average is:' + result);



