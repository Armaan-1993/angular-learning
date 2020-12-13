// let a: number;
// let b :boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,4,5];
// let f : any[] = [1,true,"Stefe"];

// we use : to write the type if we dont know the value  of a variable and so its type cannot be defined then.

// const redColor = 1;
// const greenColor = 2;
// const blueColor = 3; 

// cosnt is written as enum

// enum Color {red = 1, green =4,blue = 5};
// let mycolor = Color.blue;
// console.log(mycolor);

//type assertions

// let message : string;
// let endsWith = (<string>message).endsWith("c");

//this is how we use type assertions since the type of message is any. Hence we tell typescript that its type is string so that we can ler then intellisense to work and givw us suggestions like endsWith

// let alternsitve =( message as string).endsWith("c");
// console.log(alternsitve);

// let log = function(message) {
//     console.log(message);
// }

// let doLog = message => (
//     console.log(message)
// )

//using annotations to drfine many parameters

// let drawPoint = (point: {x:number ,y:number}) => {

// }
// drawPoint({x:1,y:2})

// interface Point {
//     x:number,
//     y:number
//     draw: () => void,
// }

// let drawPoint = (point: Point) => {
//     //
// }

// let getDistance = (pointA: Point ,pointB: Point) => {
//     //
// }

// drawPoint({
//     x:1, y:2
// })

//the above method is used to define many elements in parameters , ie by using interfaces. Interfaces should be used with a capital letter.
//Hence we use it interfaces, and interfaces are used only for decleration

//using class

// class Point {
//     x:number;
//     y:number;
//     draw: () => {
//         //
//     }
//     getDistance : (another: Point) => {

//     }
// }

class Point {
    x:number;
    y:number;
    draw: () => {
        //
    }
    getDistance : (another: Point) => {

    }
}