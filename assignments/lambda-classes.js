// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.name;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(instructorattr) {
        super(instructorattr);
        this.specialty = instructorattr.specialty;
        this.favLanguage = instructorattr.favLanguage;
        this.catchPhrase = instructorattr.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${this.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentattr) {
        super(studentattr);
        this.previousBackground = studentattr.previousBackground;
        this.className = studentattr.className;
        this.favSubjects = studentattr.favSubjects;
        
    }
    listsSubjects() {
        for (let i = 0; i< this.favSubjects.length; i++) {
            console.log(`${this.name} ${this.favSubjects[i]}`);
        }
        
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

class ProjectManagers extends Instructor {
    constructor(pmattr) {
        super(pmattr);
        this.gradClassName = pmattr.gradClassName;
        this.favInstructor = pmattr.favInstructor;
    }
    standUp(channel) {
        console.log(`${name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${name} debugs ${this.name}'s code on ${subject}`);
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  
const wilma = new Student({
    name: 'Wilma',
    location: 'LA',
    age: 40,
    gender: 'female',
    previousBackground: 'Customer Service',
    className: 'WEBpt6_sprint03',
    favSubjects: ['HTML', 'CSS', 'JavaScript']
});

const john = new ProjectManagers({
    name: 'John',
    location: 'Yonkers',
    age: 27,
    gender: 'male',
    gradClassName: 'CS5',
    favInstructor: 'Willis',
    favLanguage: 'Elm',
    specialty: 'Front-end',
    catchPhrase: `Down Elm street we go!`
})
  
  fred.speak();
  fred.demo('strings');
  fred.grade('wilma', 'CSS');
  wilma.speak();
  wilma.listsSubjects();
  wilma.PRAssignment('HMTL');
  wilma.sprintChallenge('JavaScript Foundations');
  john.speak();
  john.demo('CSS');
  john.grade('wilma', 'functions vs methods');
  john.debugsCode('wilma', 'classes');
  john.standUp('Code-Newbie');