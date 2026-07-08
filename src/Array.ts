//* today : Array , Enums , tuples :

// todo: Problem 01 => Array of Objects

type Movie = {
    id: number,
    title:string,
    genres: string[],
}

const MovieList : Movie[] = [
    {
    id:123,
    title: 'Abc' ,
    genres:['abc' , 'bcd' , 'dcb']
} ,

 {
    id:1234,
    title: 'Abcd' ,
    genres:['abcd' , 'bcdd' , 'dcbd']
} ,



]

// console.log(MovieList)

// todo : problem : 02 =>Readonly Array & Multi-dimensional Array

const readonlyGrid : readonly number[][] = [
    [1,2,1],
    [2,1,2],
    [3,2,1]
];

// readonlyGrid.push([1,1,1])
// console.log(readonlyGrid)


//todo: Problem -03 => Tuples

const appointmentToken : [number , string , boolean?] =[ 1, "sk ", true];
// console.log(appointmentToken)



//todo: Problem 04 => String Enum

enum TransactionStatus {
     success = "SUCCESS",
     failed = 'FAILED',
     pending ='PENDING',
}

const checkTransaction = (status : TransactionStatus) =>{

    if(status === TransactionStatus.success){
        console.log('Transaction Success')
    }
    else if(status === TransactionStatus.failed){
        console.log('Transaction Failed')
    }
    else if(status === TransactionStatus.pending){
        console.log('Transaction Pending')
    }


}

// checkTransaction(TransactionStatus.success)J
// checkTransaction(TransactionStatus.failed)
// checkTransaction(TransactionStatus.pending)