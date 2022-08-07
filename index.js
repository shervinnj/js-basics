
// const first=[1,2,3]
// const second=[4,5,6]

// const result=first.concat(second);

// console.log(result.);


// const corse=[
//     {id:1,name:"Node.Js"},
//     {id:2,name:"JavaScript"}
// ]


// corse.sort(function(a,b){
//     if(a.name<b.name)return -1
//     if(a.name>b.name)return 1
//     return 0
// })

// console.log(corse);






// const numbers=[1,-1,2,3];

// const filtered=numbers.filter(function(value){
//     return value >=0;
// });

// console.log(filtered);



// const fil=numbers.filter()


// const number=[1,2,3,4]

// let num=number.map(function (n){
//   return obj={
//     value:n
//   }
    
// })
// console.log(num);



// const array=[1,2,3,4,5,6]

// let sum=0
// for(let n of array){
//     sum=sum+n

// }

// console.log(sum );


// function arrayFromRange(min,max){
//     outPut=[]
//     for(let i=min;i<=max;i++){
//         outPut.push(i);
//     }
//     return outPut
// }


// console.log(arrayFromRange(-10,-4)); 




// const array=[1,2,3,4,5]

// function includes(array,searchElement){

//         for (let i of array)
//           if(i===searchElement)
//             return true;
          
//         return false
    
// }

// console.log(includes(array,6));



// const array=[1,2,3,4];

// function except(array,excluded){
//     const arr=[];
//     for(let i of array){
//         if(i!==excluded)
//         arr.push(i)
       
//     }
//     return arr
// }

// console.log(except(array,3));




// const number=[1,2,3,4];

// function move(array,index,offset){
//    const outPut=[...array]
//    const element=outPut.splice(index,1)[0];
//    outPut.splice(index + offset , 0 , element);
//    return outPut
            
       
// }


// console.log(move(number,0,0));

// const numbers=[3,4];
// numbers.splice(numbers.length,0,"a","b")
// console.log(numbers);
// console.log(numbers.indexOf(""));




// const courses=[
//    {id:1,name:"a"},
//    {id:2,name:"b"},

// ]

// const search=courses.find(function(x){
//     return x.name==="a"
// })


// console.log(search);






// let course=[
//     {id:1,name:"a"},
//     {id:2,name:"b"},    
// ]
// const search=course.findIndex(function(x){
//     return x.name==="b"
// })
//     console.log(search);



// let first=[1,2,3,4,5,6];
// let second=[7,8,9,10,11];


// let result=[...first,...second].forEach(function(x){
//     console.log(x);
// })


// console.log(result);
 





// let string="This Is a First Message from a java";

// const part=string.split(" ")


// let result=part.join("-")
// console.log(result);




// const number=[1,2,3,4,5,-5,2]


// const result=number.some(function(x){
//    return x>0
// })
// console.log(result);


// const number=[1,-1,1,2,3,5]


// const filtered=number.filter(function(x){
//     return x>=0
// })


// const item=filtered.map(function(x){

// const obj={value:x};
// return obj


// })
// console.log(item);


// let array=[1,2,3,4]


// let sum=0;
// for (let key of array){
//     sum=sum+key
// }
// console.log(sum);


// const name= array.reduce(function(x,y){
//     return x+y

// });
// console.log(name);






// function range(min,max){
//     const arr=[]
//     for(let i=min;i<=max;i++){
//         arr.push(i)
//     }
//     return arr
// }
// console.log(range(-10,-4));


// const number=[1,2,3,4,5];

// function includes(array,searchElement){
    
//     for(let i of array){
//         if(i===searchElement){
//             return true
//         }
//     }return false
    
// }

// console.log(includes(number,5));


// const number=[1,2,3,4,5]


//     function expect(array,excluded){
//         const input=[]
//         for (let x of array){
//             if(!excluded.includes(x)){
//                 input.push(x)
//             }
//         }
//         return input
//     }



// console.log(expect(number,3));


// const number=[1,2,3,4,5];

// function move(array,index,offset){
//     const outPut=[...array];
//     const element=outPut.splice(index,1)[0];
//     outPut.splice(index + offset,0,element)
//     return outPut
// }
// console.log(move(number,0,1));


// const number=[1,2,5,3,4,4,9];

// function maxFinder(array){
//     if(array.length===0){
//         return undefined;
//     }
//     let max=array[0];
//     for(let i=1;i<array.length;i++){
//         if(array[i]>max){
//             max=array[i]
//         }
//     }return max
// }

// console.log(maxFinder(number));



// const number=[1,2,5,10,3,4,4,9];

// const result=number.reduce(function(a,b){
//     return (a>b)?a:b
// })
// console.log(result);




// const movies=[
//     {title:"a",year:2018,rating:4.5},
//     {title:"b",year:2018,rating:4.7},
//     {title:"c",year:2018,rating:3},
//     {title:"d",year:2017,rating:4.5},
// ];



// const result=movies.filter(function(x){
//     return x.year>=2018 && x.rating>4
// }).sort(function (x,y){
//     x.rating - y.rating
// }).reverse().map(function(e){
//    return e.title
// })



// console.log(result);



// const movies=[
//     {title:"a",year:2018,rating:4.5},
//     {title:"b",year:2018,rating:4.7},
//     {title:"c",year:2018,rating:3},
//     {title:"d",year:2017,rating:4.5},
// ];

// const result=movies.filter(function(x){
//     return x.year>=2018 && x.rating>4
// }).sort(function(x,y){
//     return x.rating - y.rating
// }).reverse().map(function(x){
//     return x.title
// }).toString()


// console.log(result);




// function sum(...args){
//     let total=0
//     for(let i of args){
//         total=total+i
//     }
//     return total

// }

// console.log(sum(1,2,5,8,9));

// calculate total cost of item on shopping card

// function sum (discount,...prices){

//     const total=prices.reduce(function(a,b){
//         return a+b
//     })
//     return total *(1 - discount)
// }

// console.log(sum(0.1,20,30));


// const person={
//     firstName:"mosh",
//     lastName:"hamedani",

//     get fullName(){
//        return `${person.firstName} ${person.lastName}`
//     },

//     set fullName(value){
//         const post=value.split(" ")
//         this.firstName=post[0]
//         this.lastName=post[1]
//     }
// }


// person.fullName="john smith"

// console.log(person.fullName);


// const person={
//     firstName:"mosh",
//     lastName:"hamedani",


//     get fullName(){
//         return `${person.firstName} ${person.lastName}`
//     },

//     set fullName(value){

//         if(typeof value !=="string"){
//             throw new Error("please enter a valid value")
//         }

//         const part=value.split(" ")
//         if(part.length !==2){
//             throw new Error("enter a first and last name")
//         }
//         this.firstName=part[0]
//         this.lastName=part[1]     
//     }
// }


//  try{
//     person.fullName="";

//     }catch(e){
//         alert(e)
//     }
//     console.log(person.fullName);



// const video={
//     title:"a,b",
//     tags:["a","b","c","d"],
    
//     showTags(){
//         const self=this
//         this.tags.forEach(function(x){
//             console.log(self.title,x);
//         })
//     }
// }                or if you use arrow function you don have to use self
// video.showTags()




// function playVideo(){
//     console.log(this);
// }

// playVideo.apply({name:"mosh"})

// playVideo.call({name:"mosh"})




// let video={

// title:"a",
// tags:["a","b","c",],

// showTags(){
//     this.tags.forEach(x=>console.log(this.title,x))
// }
// }

// video.showTags()



// function sum(...args){
//     if(Array.isArray(args))
//     args=[...args[0]]

//     return args.reduce((a,b)=>a+b)
   
// }

// console.log(sum([1,2]));




// const obj={num:2};
// const array=[1,2,3,4,5,8]

// const addToThis=function(...args){

//     const total=args.reduce(function(x,y){
//         return x+y
//     })


//     return this.num+total

// };

// console.log(addToThis.apply(obj,array));






// const array=[1,2,3,4,5]

// function sum(...args){
//     if( Array.isArray(args)){
//      args=[...args[0]]

//     const total=args.reduce(function (a,b){
//         return a+b
//     })
//     return total;
    
//     }else{
//         const total=args.reduce(function(a,b){
//             return a+b
//         })
//         return total
//     }
    
// }
// console.log(sum(array));




// const circle={
//     radius:1,

//     get area(){
//         return Math.PI*this.radius
//     },


//     set area(x){
//        this.radius=x
//     }



// }

// circle.area=4

// console.log(circle.area);



// try{
//     const numbers=[1,2,3,4];
//     const cn = count(null,1)
//     console.log(cn);

// }catch (e){
// console.log(e.message);
// }


// function count(array,searchElement){
//     if(!Array.isArray(array)){
//         throw new Error("not array");
//     }
//     return array.reduce(function(a,b){
//        const check=(b===searchElement)? 1:0;
//        return a+check
//     },0)
    
// }







