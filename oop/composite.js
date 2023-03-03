class Vegetables {
    getName() {
        return this.name;
    }

    getGrams() {
        return this.grams || 0;
    }

    getCalories() {
        return this.calories || 0;
    }

    setName(name) {
        this.name = name;
    }
    setGrams(grams) {
        this.grams = grams;
    }

    setCalories(calories) {
        this.calories = calories;
    }
}

class Cucumber extends Vegetables {
    constructor() {
        super();
        this.setName('Cucumber');
        this.setGrams(150);
        this.setCalories(19);
    }
}

class Tomato extends Vegetables {
    constructor() {
        super();
        this.setName('Cherri');
        this.setGrams(200);
        this.setCalories(38);
    }
}

class Pepper extends Vegetables {
    constructor() {
        super();
        this.setName('Sweet Red Pepper');
        this.setGrams(100);
        this.setCalories(35);
    }
}

class Onion extends Vegetables {
    constructor() {
        super();
        this.setName('Red Onion');
        this.setGrams(90);
        this.setCalories(7);
    }
}

class Latuk extends Vegetables {
    constructor() {
        super();
        this.setName('Salad');
        this.setGrams(45);
        this.setCalories(10);
    }
}

class Salt extends Vegetables {
    constructor() {
        super();
        this.setName('Sea Salt');
        this.setGrams(3);
        this.setCalories(0);
    }
}

class Oil extends Vegetables {
    constructor() {
        super();
        this.setName('Olive Oil');
        this.setGrams(5);
        this.setCalories(44);
    }
}

class Composite extends Vegetables {
    constructor() {
        super();
        this.vegetables = [];
    }

    add(part) {
        this.vegetables.push(part);
    }

    getCalories() {
        return this.vegetables
            .map(part => part.getCalories())
            .reduce((a, b) => a + b)
    }

    getSort() {
        this.vegetables.sort(function compareVegetables(a, b) {
            return a.grams - b.grams;

        })
        console.log('Sorting vegetables for salad based on one of the parameters (name/grams/calories)', this.vegetables)
    }

    getFilter() {
        const filteredVegetables = [];
        for (let i = 0; i < this.vegetables.length; i++)
            if (this.vegetables[i].grams <= 90 && this.vegetables[i].calories <= 30) {
                filteredVegetables.push(this.vegetables[i]);
            }
        console.log('Search values by range (grams or/and calories):', filteredVegetables)
    }
}

class Salad extends Composite {
    constructor() {
        super();
        this.setName('Vitamin spring salad');
    }
}

let vegetables = new Salad();
vegetables.add(new Cucumber());
vegetables.add(new Tomato());
vegetables.add(new Pepper());
vegetables.add(new Onion());
vegetables.add(new Latuk());
vegetables.add(new Salt());
vegetables.add(new Oil());

console.log(`The ${vegetables.getName()} is done`)
console.log(`The calorie content of the ${vegetables.getName()} is ${vegetables.getCalories()} cCal`)
console.log(`${vegetables.getSort()}`)
console.log(`${vegetables.getFilter()}`)


