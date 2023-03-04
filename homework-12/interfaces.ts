// 1
interface UsersInterface {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}

const users: Array<UsersInterface> = [
    {
        name: 'Ilon Mask',
        age: 56,
        occupation: 'Director',
        car: 'Tesla',
        children: 6
    },
    {
        name: 'Max Mirnyi',
        age: 45,
        children: 4,
        occupation: 'Tennis player',
        car: 'BMW',
    },
    {
        name: 'Jessica Alba',
        age: 41,
        occupation: 'Actress',
    }
]
console.log(users)

// 2

interface UserInterface {
    name: string,
    age: number,
    role: string,
}

interface AdminInterface {
    name: string,
    age: number,
    role: string,
}

interface PersonInterface {
    name: string,
    age: number,
    occupation: string
}

type PersonType = UserInterface | AdminInterface | PersonInterface;

const persons: Array<PersonType> = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
]
console.log(persons)

// 3

interface ObjectManipulatorInterface {

    constructor: object,

    set(key: string | number, value: string | number | object): string[] | object,

    get(key: string): string[],

    delete(key: string): Object | string[] | string,

    getObject(): object,

}

export class ObjectManipulator implements ObjectManipulatorInterface {

    constructor(protected obj) {}

    public set(key, value) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key) {
        return this.obj[key];
    }

    public delete(key) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}

//4 

export function map(mapper: Function, input: any) {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: any) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}


 export function filter(filterer: Function, input: any): Function | number[]| string[] {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: any): Function | number[]| string[] {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}


export function add(a: number, b:number): Number | Function {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number): Number | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}

