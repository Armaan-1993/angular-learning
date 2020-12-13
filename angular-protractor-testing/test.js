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
var message;
// let endsWith = (<string>message).endsWith("c");
//this is how we use type assertions since the type of message is any. Hence we tell typescript that its type is string so that we can ler then intellisense to work and givw us suggestions like endsWith
var alternsitve = message.endsWith("c");
console.log(alternsitve);
