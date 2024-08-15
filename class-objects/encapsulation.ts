 //public,private ,protected,readOnly
 class user {
    userName: string;
    age : number;

    constructor (userName,age)
    {
        this.userName = userName;
        this.age = age;
    
    }

  display():void
  {
    console.log("hi");
  }
// {
//     console.log(`userName: ${this.userName} , Age : ${
//         this.age
//     }`)
// }


}

// let user1 = new user("samsul arefin",221)
// user1.display()
// let user2 = new user("milen",101)
// user2.display()



class students extends user
{
private studentId:number;

constructor (userName:string,age:number,studentId:number)
    {
         
    super(userName,age);
    this.studentId = studentId;
    }
    display():void
    {
        console.log(`userName: ${this.userName} , Age : ${
            this.age
        } Student Id : ${this.studentId}`)
    }

    setstudentId(studentId:number):void{
        this.studentId = studentId;
    }
    
    getstudentId()
    {
        return this.studentId;
    }

}

let student1 = new students("milen",24,2323232111);
student1.setstudentId(342342432);
console.log(student1.getstudentId());

// student1.display()

let user1 = new user("will",22);
user1.userName = "mike";
// user1.display();
