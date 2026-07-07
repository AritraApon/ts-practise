//* Partial, Required, Pick, Omit

//todo : Problem-01 => Structural Typing

type SimplifiedTicket = {
    ticketName: string;
    price: number;
};

function printMovieCard(ticket: SimplifiedTicket) {
    console.log(`Movie: ${ticket.ticketName} | Price: ${ticket.price}TK`);
}

const newTicket = {
    id: "1234",
    ticketName: "Dhaka Express",
    price: 220,
    location:'Dhaka',
};

// printMovieCard(newTicket);

//todo: Problem-02 => Partial | Required

//* Partial ------>
type DoctorProfile = {
    id: string;
    name: string;
    specialty: string;
    hospitalName?: string;
};

const UpdateDoctorDto = (updateInfo : Partial<DoctorProfile> )=>{
    console.log(`Doctor Information : ${updateInfo.name}`)
}

const info = {
    name: 'Gemini Ai'
}

// UpdateDoctorDto(info)

//*Required ------>

type RequiredInfo = Required<DoctorProfile> ;

const doctorInfo : RequiredInfo ={
    id: '2323',
    name: 'Dr. Sree Khanto Sarkar',
    specialty: 'Medicine',
    hospitalName: 'Sk Hospital',
}

// console.log(doctorInfo)


//todo : Problem -03 => Pick

type DetailedBooking = {
    bookingId: string;
    customerName: string;
    movieTitle: string;
    seatNo: string;
    paymentStatus: "paid" | "unpaid";
};

type BookingSummary = Pick<DetailedBooking , 'customerName' | 'paymentStatus' > ;

const BookingInfo : BookingSummary = {
   customerName:'Srestro Sarkar',
   paymentStatus:'unpaid'
}

// console.log(BookingInfo)

//todo: Problem- 03 => Omit

type UserDB = {
    uid: string;
    username: string;
    email: string;
    passwordHash: string;
};

type CleanUserProfile = Omit<UserDB, 'passwordHash'>;

const userinfo : CleanUserProfile ={
    uid:'433',
    username:'Aritro Mazumdar',
    email:'aritro@gmail.com',
}

console.log(userinfo)