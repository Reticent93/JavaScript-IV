// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak () {
        return `Hello, my name is ${name}, I am from ${location}.`
    }
}

class Instructor extends Person {
    constructor(stuff) {
        super(stuff);
        this.specialty = stuff.specialty;
        this.favLanguage = stuff.favLanguage;
        this.catchPhrase = stuff.catchPhrase;
    }
    demo () {
        return 
    }
}

class Student extends Person {
    constructor(child) {
        this.previousBackground = child.previousBackground;
        this.className = child.className;
        this.favSubjects = child.favSubjects;
    }

}