
const kgToGmConverter = (input: string | number): string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === 'string') {
        const [value] = input.split(' ');
        return `converted output is:${Number(value) * 1000}`
    };
};

const result1 = kgToGmConverter('2 kg') as string;
const result2 = kgToGmConverter(5) as number;
console.log(result2, result1);

/* we can define a custom error.... */

type CustomError={
    message : string
};

try{

}catch(error){
    console.log((error as CustomError).message);
    
}
