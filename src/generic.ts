//* dynamically generalize;

type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ['Mr.X', 'Mr.Y', 'Mr.Z'];

const regNO: GenericArray<number> = [1, 2, 3, 4];

const isAvailable: GenericArray<boolean> = [true, false, true];

type Coordinates<X, Y, Z> = [X, Y, Z];

const coordinates: Coordinates<string, number, string> = ['abc', 123, 'bcd'];

/* Array of object in generic type */

const userList: GenericArray<{
    name: string, age: number
}> = [
        {
            name: 'Mr.U',
            age: 25
        },
        {
            name: 'Mr.Y',
            age: 22
        }
    ];