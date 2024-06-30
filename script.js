const fruits=['Apple','Banana','Mango'];
const Like=['strawberry','pineapple','Apple'];


const similarfruit=(frut,chose)=>frut.filter(a=>chose.includes(a));

 console.log(similarfruit(fruits,Like));