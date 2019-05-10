// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.name;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(instructorattr) {
        super(instructorattr);
        this.specialty = instructorattr.specialty;
        this.favLanguage = instructorattr.favLanguage;
        this.catchPhrase = instructorattr.catchPhrase;
        this.name = instructorattr.name;
    }
    demo() {
        return `Today we are learning about ${this.favLanguage}`
    }
    grade() {
        return `${this.name} receives a perfect score on ${this.favLanguage}`
    }
}

class Student extends Person {
    constructor(studentattr) {
        super(studentattr);
        this.name = studentattr.name;
        this.previousBackground = studentattr.previousBackground;
        this.className = studentattr.className;
        this.favSubjects = studentattr.favSubjects;
        
    }
    listsSubjects() {
        return `${this.favSubjects}`
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.favSubjects}`
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${this.favSubjects}`
    }
}

class ProjectManagers extends Instructor {
    constructor(pmattr) {
        super(pmattr);
        this.gradClassName = pmattr.gradClassName;
        this.favInstructor = pmattr.favInstructor;
    }
    standUp() {
        return `${this.name} announces to ${this.gradClassName}, standy times!`;
    }
    debugsCode() {
        return `${this.name} debugs ${this.name}'s code on ${this.favSubjects}`
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

//   const wilma = new Instructor({
//       name: 'wilma',
//       favLanguage: 'Python',
//   });
  
const wilma = new Student({
    name: 'Wilma',
    previousBackground: 'Customer Service',
    className: 'WEBpt6_sprint03',
    favSubjects: ['HTML', ' CSS', ' JavaScript']
});
  

  
  
  
  
  
  console.log(fred.speak());
  console.log(fred.demo());
  console.log(fred.grade());
  console.log(wilma.listsSubjects());
  console.log(wilma.PRAssignment());