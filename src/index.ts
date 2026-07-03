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
type messageType = string | {
    text: string,
    code: number,
}

function showAlert(message : messageType){
       if(typeof message === 'string'){
        return `Alert : ${message}`;
       }else if('code' in message){
        return `Error ${message.code} : ${message.text}`;
       }
}

// console.log(showAlert("Your session is expiring!"));
// console.log(showAlert({ text: "Page Not Found", code: 404 }));

type User =
  | {
      role: "admin";
      permissions: string[];
    }
  | {
      role: "user";
      email: string;
    };

function getUserInfo(user: User) {
  // todo admin হলে permissions return করবে
  // todo user হলে email return করবে
  if(user.role === 'admin'){
    return `${user.permissions}`;
  }
  else{
    return user.email;
  }

}
// console.log(getUserInfo({role:'admin',permissions: ['read','write']}));

type Shape =
  | {
      type: "circle";
      radius: number;
    }
  | {
      type: "rectangle";
      width: number;
      height: number;
    };

function getArea(shape: Shape) {
  //todo circle হলে π × r²
  //todo rectangle হলে width × height

  if(shape.type === 'circle'){
    return Math.PI * shape.radius**2
  }
  else{
    return shape.width * shape.height
  }


}