class Student {
    constructor(studentId) {
        this.studentId = studentId;
        this.answers = [];
    }
    addAnswer(question) {
        this.answers.push(question);
    }
}
class Question {
    constructor(qid, answer) {
        this.qid = qid;
        this.answer = answer;
    }
    checkAnswer(answer) {
        return this.answer === answer;
    }
}
class Quiz {
    constructor(questions = [], students = []) {
        this.questions = new Map();
        questions.forEach(q => this.questions.set(q.qid, q.answer));
        this.students = students;
    }

    scoreStudentBySid(sid) {
        const student = this.students.filter(stud => stud.studentId === sid)[0];
        return student.answers.reduce((sum, currentQuestion) => {
            if (currentQuestion.checkAnswer(this.questions.get(currentQuestion.qid))) {
                sum = sum + 1;
            }
            return sum;
        }, 0);
    }

    getAverageScore() {
        return this.students.reduce((accum, student, index, array) => {
            return accum + this.scoreStudentBySid(student.studentId) / array.length;
        }, 0);
    }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));

const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));

const students = [student1, student2];

const questions = [
    new Question(1, 'b'),
    new Question(2, 'a'),
    new Question(3, 'b')];

const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3

let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2

let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
