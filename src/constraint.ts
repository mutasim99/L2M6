//? constraint: set strict rule;

type Student = {
    id: number;
    name: string;
}

const addPeopleInCourse = <T extends Student>(studentInfo: T) => {
    return {
        course: 'authCad Crushed course',
        ...studentInfo,
    }
}

const student1 = {
    id: 123,
    name: 'Mutasim Billah',
    hasCar: false
};

const student2 = {
    id: 234,
    name: 'Mr. Y',
    isMarried: true
};

const student3 = {
    id: 252,
    name: 'Mr. c',
    hasCar: true
}
const student4={
    name:'Mr. D'
}

// const result = addPeopleInCourse(student4)
const result = addPeopleInCourse(student3)
console.log(result);