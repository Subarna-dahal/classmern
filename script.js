// // const gender = "M";
// // gender == "M" ? alert("true") : gender == "F" ? alert("hello") : alert("how");

// const grade=prompt('enter the number')
// switch(true){
//     case grade>90:
//     alert('grade A');
//     break;
//     case grade>50&&grade<60:
//     alert("grade B");
//     break;
//     default:
//     alert("grade c");

// }

// const username=prompt('enter the username:');
// const password=prompt('enter the password');

// if(username=="subarna"&&password=="subarna"){
//     alert('welcome to the project');
// }
// else{
//     alert('icorrect data');
// }

//multilication table
// const value = prompt("Enter the value");
// let i = 1;

// while (i <= 10) {
//   console.log(`${value} * ${i} = ${value * i}`);
//   i++;
// }

// let data=prompt("enter the number:");
// // let i=1;
// // do{
// // console.log(`${data}*${i}=${data*i}`);
// // i++;
// // }
// // while(i<=10)

// for(let i=1; i<=10;i++){
// console.log(`${i}*${data}=${data*i}`);
// }

//  let name = "subarna";
//  let second = "dahal";

//  let final =
//    name.charAt(0).toUpperCase() +
//    name.slice(1).concat(" ", second.charAt(0).toUpperCase() + second.slice(1));
//  console.log(final);

// let inputdata=Number(prompt('enter the value:'));
// const data=inputdata.toLocaleString('en-Us');
// console.log(data);



// function factorial(n){
//     if(n==1||n==0)
//         return 1;
//     else 
//     return n*factorial(n-1);

// }
// console.log(factorial(5));



// function say(name){
//     alert(`hello,${name}`);
// }

// say("subarna");

// const sum=(a,b)=>{
//     return a+b;
// };
// console.log(sum(110,20));


//default function
// const paging =(num=5) => {
//     console.log(num);
// };
// paging();

// iife
// (()=>{
//     console.log("hello");
// })();

//


    // const reverseString=(str)=> Number(str.split("").reverse().join(""));
    
    // console.log(reverseString("124444"));



    // const convert = () =>{

    //     const value = Number(prompt(" enter value?"));
    //     const change=(value-32)*5/9;
    //    console.log(change);


    // };
    // convert(140);

//     const laptop = {
//         model: "Apple",
//         name: "Mac",
//         year: 2021,
//         age: () =>{
            
//         },
//         fullname: function(){

//         },

//     };

//     const{ model, fullname,...rest}=laptop
//    console.log(rest);


// let prod={
//     name:'headphones',
//     price:130,
//     discout:'7%'
// };

// const price=(product)=>{
//    const{price,discout,...rest}=product;
//    const discoutamount= price>100? 0.1*price:price-0.08*price;
//    rest.price=price-discoutamount;
//    rest.discout=price>100? "10%":"7%";
//    return rest;
// }
// console.log(price(prod));



const fruits=['Apple','Banana','Mango'];
const Like=['strawberry','pineapple','Apple'];


const similarfruit=(frut,chose)=>frut.filter(a=>chose.includes(a));

 console.log(similarfruit(fruits,Like));