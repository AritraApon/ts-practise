// Interface and optional (?) | readOnly

interface Doctor {
    readonly id: string,
    name: string,
    chamberLocation?: string,
}

const doctor: Doctor = {
    id: '123',
    name: 'Apon',
    // chamberLocation: 'Dhaka'
}

console.log(doctor);