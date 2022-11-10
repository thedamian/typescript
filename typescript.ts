function debug(message: any): void {
    console.log( message)
    // no return here
}
debug(222)

//console.log("Hello typescript")

let firstName: string = "Damian"
let age: number = 49
let good: boolean = true

// firstName = 4 // not valid!

let fruits: string[] = [
    "banana",
    "apple"
]

debug(`
 First Name: ${firstName}
 Your Age: ${age}
 you have many ${fruits}
`)


enum taxForm {
    standard = "1040",
    childCredit = "1065",
    SCorp = "1121S",
    CCorp = "1120"
}

debug(`
you need form ${taxForm.CCorp}
`)


// let fruits: string[] = [
//     "banana",
//     "apple"
// ]

function getFruit(bobo: number): string {

    return fruits[bobo]

}



debug("OMG No return")



let chosenFruit: string = getFruit(0)

debug(` you choose an ${getFruit(0)}`)