// Solution for question-1
console.log("Question 1: Sum of all elemets greater than 20:");
const a = [1, 50, 40, 3, 10];
const f = a.filter(function (elem, index, array) {
    return elem > 20
});
const sum = f.reduce((a, b) => a + b, 0);
console.log(sum);


//Solution for question-2:
console.log('Question 2: Strings with length greater than or equal to 5 and includes "a"');
const names = ['maya', 'misgan', 'blen', 'abel', 'abebe'];
let newArray = names.filter((elem, index, array) => (elem.length >= 5) && (elem.includes('a')));
console.log(newArray);


//Solution for question-3:
console.log("Question 3:");
function Employee(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.year = dob.getUTCFullYear();
    this.getAge = function () {
        let diff_ms = Date.now() - dob.getTime();
        let age_dt = new Date(diff_ms);
        let age = age_dt.getUTCFullYear;

        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    this.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}
const e1 = new Employee('misgan', 'asmamaw', new Date('1988-11-11'));
const e2 = new Employee('maya', 'misgan', new Date('2020-11-11'));
const e3 = new Employee('blen', 'abadi', new Date('1990-11-11'));
const emps = [e1, e2, e3];
const newEmps = emps.filter((elem, index, array) => elem.getAge() > 20);
console.log('Older than 20:');
newEmps.forEach((elem, index, array) => console.log(elem.getFullName() + ', Age ' + elem.getAge()));

const bornAfter2000 = emps.filter((elem, index, array) => elem.year > 2000);
bornAfter2000.forEach((elem, index, array) => console.log('Born after 2000: ' + elem.getFullName()));

