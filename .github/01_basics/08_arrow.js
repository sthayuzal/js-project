const user = {
    username: "Yuzal",
    price: 999,

    welcome: function (){
        console.log(`${this.username}, welcome to website`);
        

    }
}

// user.welcome()

// user.username = 'Sam'
// user.welcome()

console.log(this)