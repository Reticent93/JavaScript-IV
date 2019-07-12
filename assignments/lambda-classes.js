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
        super(child)
        this.previousBackground = child.previousBackground;
        this.className = child.className;
        this.favSubjects = child.favSubjects;
    }
    listsSubjects() {
        return
    }
    PRAssignment() {
        return 
    }
}

class ProjectManagers extends Instructor {
    constructor(props) {
        super(props);
        this.gradClassName= props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp() {
        return `${name} announces to ${channel}, @${channel} standy times.`
    }
    debugsCode() {
        return `${name} debugs ${student.name}'/s code on ${subject}.`
    }
}


const fred = new Student({
    previousBackground: 'scientist',
    className: 'WEBPT8',
    favSubjects: 'HTML'
});

const evan = new Student({
    previousBackground: 'singer',
    className: 'WEBPT7',
    favSubjects: 'CSS'
   });

const lori = new Student({
    previousBackground: 'best friend',
    className: 'WEBPT8',
    favSubjects: 'HTML'
});

const joe = new Instructor({
    specialty: 'redux',
    favLanguage: 'Python',
    catchPhrase: 'Do not forget the homies'
});



