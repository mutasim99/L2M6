const createArrWithGeneric = <T>(value: T) => {
    return [value];
};


const arrStr = createArrWithGeneric('apple');
const arrObj = createArrWithGeneric({
    id:123,
    name:'Mutasim billah'
});

console.log(arrObj);

console.log(arrStr);
