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
        this.favlanguage = instructorattr.favlanguage;
        this.catchPhrase = instructorattr.catchPhrase;

    }
    demo() {
        return `Today we are learning about ${this.favlanguage}`
    }
    grade() {
        return `${student.name} receives a perfect score on ${this.favlanguage}`
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