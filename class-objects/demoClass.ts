//properties,method ,constractor

class user {
    userName: string;
    age : number;

    constructor (userName,age)
    {
        this.userName = userName;
        this.age = age;
    
    }

display()
{
    console.log(`userName: ${this.userName} , Age : ${
        this.age
    }`)
}


}

let user1 = new user("samsul arefin",221)
user1.display()
let user2 = new user("milen",101)
user2.display()




