
function Student(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;

}
Student.prototype.inputNewGrades = function (newgrade) {
    this.grade = newgrade;
}

Student.prototype.computeAverageGrade = function () {
    return this.grade.reduce((accum, elem) => accum + elem / (this.grade.length), 0);

}
Student.prototype.display = function () {
    return 'the Average grade for ' + this.firstName + " " + this.lastName + " " + this.computeAverageGrade();
}

Array.prototype.mysort = function () {
    let arr = this;
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (arr[j - 1] > arr[j]) {
          let temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  
 

let students = [
    new Student('JOhn', 'chris', [2, 3]),
    new Student('abel', 'charless', [3, 2]),
    new Student('rig', 'charless', [3, 4])
];
let result = students.map(a => a.computeAverageGrade()).reduce((accum, elem) => accum + elem / students.length, 0);
console.log('Total grade average: '+result);

 console.log([7, 5, 2, 4, 3, 9].mysort());



