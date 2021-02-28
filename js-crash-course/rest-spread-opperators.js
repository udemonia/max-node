

//*                                  immutability

//* avoid errors by not editing existing object, instead we copy and create a new one with
//* values added


//? A Better Way to Add The Spread Operator

//? Spread takes all the elements and assigns to an array one by one - used to copy an array

//? Rest - used to pass in any # of arguments into a function

const brandon = [{
    age: 39,
    sex: "Male",
}]

const copiedBrandon = brandon.slice() //!       without args, copies the whole thing

console.log(copiedBrandon)  //!           [ { age: 39, sex: 'Male' } ]

const newArrayCopyBrandon = [brandon]

console.log(newArrayCopyBrandon) //!      [ [ { age: 39, sex: 'Male' } ] ]

//? passing the array inside of an array will produce a nested array 

//* instead we can use the SPREAD operator ...

const spreadCopiedBrandon = [...brandon];

console.log(spreadCopiedBrandon); //!     [ { age: 39, sex: 'Male' } ]

// we lose the nested array with the spread operator, pull out the values 1 by 1
// and add them to the new array 


const toArray = (arg1, arg2, arg3) => {
    return [arg1,arg2,arg3]
};

console.log(toArray(1,3,5))


const restToArray = (...args) => {
    return args
}

