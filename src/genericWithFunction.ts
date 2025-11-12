const createArrWithGeneric = <T>(value: T) => {
    return [value];
};


const arrStr = createArrWithGeneric('apple');
const arrObj = createArrWithGeneric({
    id: 123,
    name: 'Mutasim billah'
});

// console.log(arrObj);

// console.log(arrStr);


/* use generic with tuple */

const createFuncWithTuple = (param1: number, param2: string) => {
    return [param1, param2]
};

const createGenericWithTuple = <X, Y>(param1: X, param2: Y) => {
    return [param1, param2]
};

const tupleNum = createGenericWithTuple(12, 15);
const tupleStr = createGenericWithTuple(12, 'mutasim');
// console.log(tupleNum);
// console.log(tupleStr);

/* use in object */

const addPeopleInCourse = <T>(studentInfo: T) => {
    return {
        course:'authCad Crushed course',
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

const result = addPeopleInCourse(student1)
console.log(result);

