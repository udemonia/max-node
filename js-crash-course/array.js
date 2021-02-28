const myNumbers = [1,2,3,4,5];

const myPeeps = ['Brandon', 'Brae', 'Kal']

for (let peep of myPeeps){
    console.log(peep);
}

const objPeeps = myPeeps.map((peep, index) => {
    return {
        id: index,
        person: peep
    }
})

console.log(objPeeps);

const kids = myPeeps.filter((peep)=>{
    if(peep != 'Brandon'){
        return peep
    }
})
console.log(kids)




