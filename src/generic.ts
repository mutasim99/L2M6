//* dynamically generalize;

type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ['Mr.X', 'Mr.Y', 'Mr.Z'];

const regNO: GenericArray<number> = [1, 2, 3, 4];

const isAvailable: GenericArray<boolean> = [true, false, true];

type Coordinates<X, Y, Z> = [X, Y, Z]

const coordinates: Coordinates<string, number, string> = ['abc', 123, 'bcd'];

