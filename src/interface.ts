//*Interface and optional (?) | readOnly |literal Types | Intersection |implements

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
     setTime: string,
}

type FullTicketInfo = BaseTicket & tickerDetails ;

let ticket:FullTicketInfo ={
   id:'1234',
   price:220,
   ticketName:'Dhaka Express',
   setTime: '10 july , 2026 at 5pm',

}

// console.log(ticket)

//todo problem - 04 OOP- implements

interface NotificationSender {
    send(message: string): void;
}

class SMSNotification implements NotificationSender{
    send(message: string): void {
        console.log(`Sending ${message}`)
    }
}

const smsApp = new SMSNotification()
smsApp.send("Your ticket booking is confirmed! ")
