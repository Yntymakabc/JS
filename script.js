// console.log('hello world')
// console.log(1)
// console.log(3, 'aibek')
// console.log('aibek', 3)

// this is a command
/*hello*/


//22.04.2025

let name = 'yntymak'
//console.log(name)
name = 'aku'
//sconsole.log(name)


const age = 12
//age = 5 
//console.log(age)

const name1 = 'yntymak', 
age1 =20, 
isGood = true

//always have to use let or const
//const can't be changed since it's constant variable
//var is old one, almost doesn't used 

/////////////////////////////////////////////////////////////////


const phone = "samsung"
let pen = 'black'
const age4 = 3


const a = 1
let b = 2
//console.log(`${a} and he is ${a+b}`)


const country = "russion"
//console.log(typeof country)//no parenheses

const c = '3'
//console.log(typeof Number(c))

//console.log(4 == '4')
//console.log(5 === '5') false


const q = 2020
const message = q===2020 ? 'this is the mans world' : 'thsi is womans world'
//console.log(message)


/*const year = 3000;

const message = year === 2024
  ? 'Начинаю учиться!'
  : year === 3000
    ? 'Нейросети победили'
    : 'Неизвестный год :/';

console.log(message);
*/


//console.log(true&false)

//////////OROPERATION
//const e = 15;
//const withParend = false
//if(e > 16 || withParend){
//    console.log('you can enter the bar')
//}
//else(
//    console.log('go and come next year')
//)

// || - or operation, && - and operation, ! - not(!true === false )

const f = null
const g = 8
const result2 = f ?? g
//console.log(result2)

//“If the first value is not null or undefined, return it.
//Otherwise, return the second value.”


// let ab = 3
// do{
//   console.log("she said yes")
//   ab++
// }while (ab >90)


// for(let i=0; i <10; i++){
//   alert(i)
// }

/////////////////////////////////////////////////

//alert("this is alert button")


//const pro = prompt("waht is your name", "ytnymak")
//console.log("his name is: " + pro)



//confirm("Are you sure you want to leave this browser?")


// const pro = prompt("write you age!")
// switch(prompt){
//   case 0: {
//     console.log("you age is 0 you are too young")
//     break
//   }
//   case 17:{
//     console.log("almost adult")
//     break
//   }
//   default:{
//     console.log("your age is:" + pro)
//   }
// }



// const arr= [1,2,3,,5]
// for(let i=0; i<arr.length; i++){
//   switch(i){
//     case 0:{
//       console.log("this number is zero")
//       break
//     }
//     case 1:{
//       console.log("this number is two ")
//       break
//     }
//     case 2:{
//       console.log('this number is 2')
//       break
//     }
//     default: {
//       console.log('this is default value')


//     }
//   }
// }


// function summ(whom, a){
//   console.log(whom + a)
// }

// summ("yntmyak", 12)

//to put underfined it's better to put it at the beggining since you have to write undefined till the one if it's in the end
// function abcd(num, num1 =2, num2 = 5){
//   console.log(num1+num2)
// }
// abcd(undefined,9)



// const arr = [2,3,5,67]
// function findsum(arr){
//   let sm = 0
//   for(let i = 0; i < arr.length; i++){
//     sm += arr[i]  
//   }
//   return sm
// }

// console.log(findsum(arr))




// function fun(num){
//   switch(num){
//     case 1:{
//       console.log("this is on")
//       break
//     }
//     default:{
//       console.log('any number')
//     }
//   }
// }

// fun(1)

//!!!!!!!!!!!!!!!DON"T KNOW WHy
// function arg(){
//   console.log(arguments)
// }

// arg("hrllo" ,3, true)




// const gg = function(){
//   console.log("this is the good")
// }
// gg()




// const gg = function(a,b){
//   return a + b
// }
// console.log(gg(1,2))


// const addSum = (a,b) => {
//   return a+b
// }

// console.log(addSum(23,2))


// const good = (name, age) => {
//   return name + age
// }

// const bad = (name, age)=> name + age

// console.log(bad("yntmyak ", 20))



// const combine = (first, second)=>{
//   first()
//   console.log("now it's time for second function")
//   second()
// }

// const first = ()=> console.log('hello it is the first function')
// const second = () => console.log('this is the second function')
// combine(first, second)



// const hasAcess = (age)=>{
//   switch(age){
//     case 1 :{
//       return "you are too young"
//       break
//     }
//     case 2 :{
//       return "this is also yong"
//       break
//     }
//     case 3 :{
//       return "now it's ok"
//       break
//     }
//     default:{
//       return "you can come to kindergarten"
//     }
//   }
// }

// console.log(hasAcess(1))



// const findSum = (n) =>{
//   let sm = 0
//   for(let i=0; i <= n; i++ ){
//     sm+=i

//   }
//   return sm
// }

// console.log(findSum(3))




///////////////////////////////////////OBJECTS


// const person = {
//   name : "yntymak", 
//   age : 12, 
//   'registration date' : "12.12.26", 

// }
//console.log(person.name)
//console.log(person["registration date"])



// const value = "yntymak"
// const name3 = "name"


// const obj = { 
//   [name3]:value
// }
// //console.log(obj)

// const bob  ={
//   name:"yntymak", 
//   age:34
// }
// console.log(bob)



// const obj = {}

// obj.name = 'aibek'
// obj.age = 14
// obj.subject = 'math'
// obj["has girlfriend"] = false
// console.log(obj['has girlfriend'])
// delete obj.name
// console.log(obj)

// let name5 = 'aibek'
// let age5 = 34

// const obj = {
//   name5,
//   age5
// }
// console.log(obj)

///LOOK at this values
// const obj = {
//   doga: "alex", 
//   age :13, 
//   ['isgood']:true
// }

// for(const value in obj){
//   console.log(obj[value])
// }


// const obj = {
//   name: "akmat", 
//   age :12

// }

// const obj2 = Object.assign({}, obj)
// const obj3 = {...obj}
// console.log(obj)
// console.log(obj2)
// console.log(obj3)



// const person = {
//     name : "hayvan", 
//     age :4, 
    // origin:{
    //   city:"naryn", 
    //   vallage: "ak tash"
    // }
//}


//if the origin is exists than it should work if not it gonna continue
// console.log(person.origin?.city)
// console.log("hello world")


// ///IMPORTANT
// const cat = {
//   name7 : "akmat", 
//   age7 : 23, 
//   from7 : "irland",
// }

// const {name7, age7, from7} = cat

// console.log(name7)


//const arr = [1,3,5,43,2,6,5,]
//console.log(Math.min(...arr))
let number = "1234"
// console.log(number)
// console.log(typeof(number))
// console.log(Number(number))
// console.log(typeof(number))



let number2 = "1245dfd"
// console.log(parseInt(number2))


let something = "Yntymak"
//console.log(something.length)

//console.log(something[1])//we can't use with brakents negative values so se use 
//console.log(something.at(-1))


//console.log(arr.indexOf(43))
let sentence = "he was a good persong"
//console.log(sentence.startsWith('he'))

//console.log(sentence.slice(0,6))

sentence = sentence.replace('he', 'she')
//console.log(sentence)

const arr =['aibek', 'hello ', 'world']
arr.push('aku')
arr.unshift("first", 'second')
//arr.pop()
arr.shift()
//console.log(arr.toString())
///console.log(arr.join(', '))


const vari = 'one,two,three,four,seven'
//console.log(vari.split(","))//.join(','))

//console.log(arr2.join(', '))
const arr2 = [1,2,3,44,5,6,4,3]
const arr3 = ["yntymak", 'aku', 'aibek']
const total = [...arr2, ...arr3]
const total2 = arr2.concat(arr3)
//console.log(total2)