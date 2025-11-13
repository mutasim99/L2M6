//*It donets the conditional type;

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

//? another;

type ReachPeopleVehicle = {
    bike: string;
    car: string;
    ship: string;
    airplane:string;
};

type CheckType<T> = T extends keyof ReachPeopleVehicle ? true : false;

type hasBike = CheckType<'airPlane'>