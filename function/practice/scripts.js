// function Check_even_odd(number){
//     if(number % 2 === 0){
//         return `${number} is even`
//     }
//     else{
//         return `${number} is odd`
//     }
// }
// let result = Check_even_odd(5)
// console.log(result)



function largest_number(n1,n2){
    if(n1===n2){
        return `Both ${n1} and ${n2} are equal`
    }
    else if (n1 > n2 ){
        return `${n1} is greater then ${n2}`;
    }
    else {
        return `${n2} is greater then ${n1}`
    }
}
let result = largest_number(6,2);
console.log(result);