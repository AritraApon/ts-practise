// todo: problem-01 => Basic Function with Return Type

const getDoctorFee = (fee:number , doctorName:string):string  =>{
       return `Dr. ${doctorName} fee is ${fee} TK`
}

// console.log(getDoctorFee(100,'Srestro Sarkar'))


// todo: problem-02 => Pre-declared Function Type

type TicketCanceller = (id:string) =>void;

const cancelMovieTicket:TicketCanceller =( id ) =>{
    console.log(`ticket id : ${id}`)
}

// cancelMovieTicket("444323434")

//todo: Problem-3 => Optional & Default Parameters

const calculateInvoice = (basePrice:number , vat:number = 15 , promoCode?:string):string => {
    if(promoCode){
        return `Your promo code is ${promoCode} and your basePrice is now ${basePrice - vat} tk`
    }else{
        return `Total Price ${basePrice + vat} tk`
    }
}

// console.log(calculateInvoice(200, 10 ,'ddd'))
// console.log(calculateInvoice(200))

// todo: Problem 04 => Function with Type Narrowing

const verifyPayment = (id : number | string):string =>{
 if(typeof id === 'string'){
    return `StringCheck:your id is ${id}`
 }else{
    return `NumberCheck: your id is ${id}`
 }
}

// console.log(verifyPayment(1111));
// console.log(verifyPayment('G-333'));