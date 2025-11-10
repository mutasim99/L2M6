type Friends = string[];


interface Ifriends {
    [index: number]: string
}

const friends: Ifriends = ['a', 'b', 'c'];

//* we can use both interface and alias;

type Add = (number1: number, number2: number) => number;

interface IAdd {
    (number1: number, number2: number): number
}

const add: IAdd = (number1, number2) => number1 + number2 
// * also here we can use also both....
// * between this two alias is best but in object we should try to use interface