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

person.greet();
person.myAge();
person.butIActLike();
person.favoriteParent();

