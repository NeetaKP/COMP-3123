//Exercise 1
var gretter = (myArray, counter) => {
    const greetText = 'Hello ';
    for(let ma of myArray){
        console.log(greetText + ma);
    }

}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'],3);

//Exercise 2:
const capitalize = ([a,...rest])=> {
    let retv = a.toUpperCase();
    for(i of rest){
        retv += i.toLowerCase();    
    }
    return retv;    
}

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

//Exercise 3:
const colors = ['red','green', 'blue']
let capitalizeColors = colors.map((n) => capitalize(n));

console.log(capitalizeColors);


//Exercise 4:
var values = [1, 60, 34, 30, 20, 5]
var filterLessThan20 =  values.filter((val)=>val<20)
console.log(filterLessThan20)

//Exercise 5:
var array = [1, 2, 3, 4]
const calculateSum = array.reduce((n,m) => n + m);
const calculateProduct = array.reduce((n,m) => n * m);

console.log(calculateSum);
console.log(calculateProduct);


//Exercise 6:
class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    setModel(n) {this.model = n};
    getModel(){return this.model}; 

    setYear(m){this.year = m}
    getYear(){return this.year}

    details(){
        var detail = "Model: "+ this.model + " "+ this.year;
        return detail;
    }
}
class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }
    
    info(){
        var inf = this.model + " has a balance of $" + this.balance.toFixed(2) 
        return inf;
    }
 
}


const car2 = new Car('Pontiac Firebird' , 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());