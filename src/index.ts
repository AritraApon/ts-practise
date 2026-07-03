function greet(name: string):string{
    return `Hello ${name}!`
}
const userName = 'Aritro Mazumdar Apon';
// console.log(greet(userName));

//! union type----------------------------------------->
// *----------------------------------------------------------
let subs : number | string = 1;
subs = '2M';

// console.log(subs);

let status :'pending' | 'accepts' | 'reject' = 'pending';

status = 'reject' ;

let orders: (string | number)[] = ['20','30','40','50'];

let currentOrder:string | number | undefined = undefined;

for(let order of orders){
    if(order === '30'){
        currentOrder = order;
        break;
    }
    // currentOrder = '101';
}

// console.log(currentOrder);



//!type Narrowing ---------------------------------------->
//* ---------------------------------------------------------------
//todo: problem 01
function formatePrice(price:number | string){
    if (typeof price === 'number'){
        return `$${price.toFixed(2)}`;
    }else{
        return `$${price}`
    }
}

// console.log(formatePrice(20));
// console.log(formatePrice('20'));

//todo: Problem 02
function welcomeUser(user: string | string[]){
    if(typeof user ==='string'){
        return `Hello ${user}`;
    }else{
         return `Hello ${user.join(',')}!`;
    }
}

// console.log(welcomeUser('Aritro'));
// console.log(welcomeUser(['Aritro','Apon']));

//todo: Problem 3 :
type massageType = string | {
    text: string,
    code: number,
}

function showAlert(massage : massageType){
       if(typeof massage === 'string'){
        return `Alert : ${massage}`;
       }else if('code' in massage){
        return `Error ${massage.code} : ${massage.text}`;
       }
}

// console.log(showAlert("Your session is expiring!"));
// console.log(showAlert({ text: "Page Not Found", code: 404 }));

