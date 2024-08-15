let users : object[]
users=[]
let users1:{name:string,id:number};
users1 = {
    name:"samsul",id:221
};
users.push(users1);

let users2: {name:string,id:number};
users2= {
    name:"arefin", id:15
}
users.push(users2)


// console.log(users);

type requesType = "GET" | "POST" ;
let getRequest : requesType ;
getRequest = "POST";


function requestHandler (requesType : requesType)
{
    console.log(requesType)
}
requestHandler("POST")