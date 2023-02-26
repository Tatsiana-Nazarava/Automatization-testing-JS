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
    
    set(key: string, value: object): object,

    get(key: string): Array<typeof key>, 

    delete(key: string): Object | Array<typeof key> | string,

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

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */

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

/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
 export function filter(filterer: Function, input: any): Function | Array<typeof filter> {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: any): Array<typeof subInput> | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}


/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
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

