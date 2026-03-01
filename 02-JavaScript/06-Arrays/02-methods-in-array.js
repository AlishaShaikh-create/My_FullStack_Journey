//METHODS OF ARRAY :
//  push/pop
//  shift/unshift

//push : add the element at the end of the array
// pop : remove the element from the start and return it
//unshift : add the element to the start of the array
// shift : remove the element from the start and return it

//shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

//PUSH AND POP EXAMPLE:
let array=['apple','mango','banana','grapes'];
array.push('pineapple')
console.log(array);
//OUTPUT:
//[ 'apple', 'mango', 'banana', 'grapes', 'pineapple' ]
console.log(array.pop())
//OUTPUT:
//pineapple

//UNSHIFT AND SHIFT :
array.unshift(1);
console.log(array);
//OUTPUT
//[ 1, 'apple', 'mango', 'banana', 'grapes' ]

//INTERNAL OF ARRAY
//An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.

//They extend objects providing special methods to work with ordered collections of data and also the length property. But at the core it’s still an object.


let num=[1,2,3,4,5];
let arr=num;
console.log(num);
console.log(arr);
console.log(num==arr);//
//OUTPUT
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]
// true


let newarr=[];//created an empty array
newarr[555]=25;//first 554 elements are empty and 555 element will be 25
console.log(newarr);
//OUTPUT:check output in terminal
newarr.age=25;//even this is possible in array as arrays are objects internally
console.log(newarr);

//ARRAY OF OBJECTS:
let student=[
    {
        name:"John",
        roll:"50",
        percentage:98,
    },
      {
        name:"abc",
        roll:"225",
        percentage:75,
    }
]
console.log(student[0]);
console.log(student[1]);
//OUTPUT:
//{ name: 'John', roll: '50', percentage: 98 }
//{ name: 'abc', roll: '225', percentage: 75 }
console.log(student[0].name);
//OUTPUT:
//John

//OBJECTS OF ARRAY:
let score={
    rohit:[10,20,30,400],
    virat:[30,400,50,100],
}
//ACCESSING THE ARRAY OF THE OBJECT:
console.log(score.rohit);
//OUTPUT:
//[ 10, 20, 30, 400 ]


//ACCESSING THE ELEMENT OF THE ARRAY:
console.log(score.virat[3]);
//OUTPUT:
//100

// indexOf: To return the index of the particular element
let name=['alisha',1,true]
console.log(name.indexOf(1)) 
// Output:1
console.log(name.indexOf(true))
//Output:2

// concat : To join the 2 array
let num1=[1,2,3]
let num2=[10,20,30]
let num3=num1.concat(num2)
console.log(num3) // [ 1, 2, 3, 10, 20, 30 ] 

// reverse:To reverse the element of the array
console.log(num1.reverse()) // [ 3, 2, 1 ]

// sort: To sort the character or string in the alphabetical order

// The sort method is only used to sort the letter or character it does not sort the number 
let str=['c','a','d','z','e']
console.log(str.sort()) // [ 'a', 'c', 'd', 'e', 'z' ] 
console.log(num3.sort())  // [ 1, 10, 2, 20, 3, 30 ] 

// includes : this is used to check if the element is present in the array or not ; if persent -> return true or else return false 
let ali=['alisha','john','perter']
console.log(ali.includes('alisha')) // true
console.log(ali.includes("tohid")) // false 

