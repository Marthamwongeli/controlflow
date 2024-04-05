// / Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
// 
const numbers=[4,5,7,9,10,38,76,94,2,3];
function array1(numbers){
    numbers.forEach((number,index)=>{
        if (index < 4){
            numbers[index]=number*8;
        }
        else if (index >= numbers.length-2){
            numbers[index]= number+5;
        }
    });
    console.log(numbers);
}
array1(numbers)

// Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9];
let i=0
let loop= (arrNum)=>{
    while (i < arrNum.length){
        if(i==4){
            break;
        }
    }
// }
console.log(loop(arrNum))
}
// Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
// let fruits= ['apple','plum','banana','strawberries','kiwi']
// const str=(fruits)=>{
//     for (let i=o; index<fruits.length; i++){
//         if(i==2){
//             continue;
//         }
//     }
//    return()
// }
// console.log(fruits(str))

// Write a function that accepts an array of strings and console.logs each element using a for loop.
function sort(){
itemArray.forEach(element=>{
    console.log(element);
}) ;
}
let itemArray=["leo","cancer","scorpio","gemini"];
sort()


// Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.