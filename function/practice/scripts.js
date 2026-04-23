function Check_even_odd(number){
    if(number % 2 === 0){
        return `${number} is even`
    }
    else{
        return `${number} is odd`
    }
}
let result = Check_even_odd(5)
console.log(result)