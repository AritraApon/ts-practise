//! Interface and optional (?) | readOnly |literal Types | Intersection

//todo problem - 01 Interface and optional (?) | readOnly
interface Doctor {
    readonly id: string,
    name: string,
    chamberLocation?: string,
}

const doctor: Doctor = {
    id: '123',
    name: 'Hello',
    // chamberLocation: 'Dhaka'
}


// console.log(doctor);

//todo problem - 02 Literal Types

type PaymentMethod = 'stripe' | 'bkash' | 'nagad';

let pay: PaymentMethod = 'stripe';

// console.log(pay)


// todo : problem - 03 Intersection

type BaseTicket = {
    id:string,
    price: number,
}

type tickerDetails = {
    ticketName:string,

}
