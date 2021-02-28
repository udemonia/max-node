

// object

const person = {
    name: "Braelynn Lambert",
    age: 16,
    parent: "Brandon Lambert",
    greet: function(){
        console.log('Hi, I am ' + this.name);
    },
    myAge: function(){
        console.log('I am '+ this.age + ' years old!');
    },
    butIActLike: function(){
        console.log('But I act like I\'m ' + this.age / 2 + ' years old sometimes! 👶')
    },
    favoriteParent() {
        console.log('My Favorite Parent is ' + this.parent)
    }
}

const printName = (personData) => {
    console.log(personData.name)
}

printName(person);

const myPersonName = ({ name, age }) => {
    console.log(name)
}

myPersonName(person);