
const kgToGmConverter = (input: string | number) => {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === 'string') {
        const [value] = input.split(' ');
        return `converted output is:${Number(value * 1000)}`
    };
};

const result1 = kgToGmConverter('2 kg');
const result2 = kgToGmConverter(5);
console.log(result2);

