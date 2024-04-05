//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself and the last two added by 10. Return the array with the new values
function numbers(array){
    let newArray= [];
    let array1 = array.slice(0,4);
    let array2 = array.slice(-2);

    array1.forEach(number => {
     let x = number*number;
        newArray.push(x);
    })

    array2.forEach(number => {
        let y= number +10;
    
        newArray.push(y);
    })

    console.log(newArray);
    return newArray;
}
    numbers([11,17,20,56,27,12,8,9,32,10,4,2]);
     
    
    //Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
    function loop(){
        let arrNum = [1,2,3,4,5,6,7,8,9];
        const a =arrNum .slice(0,5)
        while (a){
            console.log(a);
            break;
        }
    }
       loop()
    
    //Write a function that takes in a an array of strings and use a continue statement when the item is at the second index: let fruits= ['apple','plum','banana','strawberries','kiwi']
    function num(){
        let fruits= ['apple','plum','banana','strawberries','kiwi'];
        let i= 0;
        while (i<4){
            i++;
            if(i==2) continue;
            console.log(fruits[i])
        }
        
    }
      num()
    
   
    //Write a function that accepts an array of strings and console.logs each element using a for loop.
    function iterate(array){
        for ( let i = 0; i< array.length; i++){
            console.log(array[i]);
        }

    }
    iterate(["Leo","Cancer","Gemini","Scorpio","Taurus","Virgo"]);
    
    
    //Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
    
    function reverse(){
        let string= "encyclopaedia"
        let b= string.split(" ").reverse().join("");
        while (b) {
            console.log(b);
            break;
        }
        // reverse("Encyclopaedia")
    }
    reverse()
    
    
    
