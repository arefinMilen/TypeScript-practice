//enum -store constants; duplicate value is not allowed here
//enum type: numeric ,string,hetergenous

//numeric enum
enum userRequest 
{
    readData ,
    saveData,
    deleteData,
}
console.log(userRequest)

//string enum
enum  stringRequest
{
    readData = "one",
    saveData = "two",
    deleteData = "three"
}
console.log(stringRequest)

//hetergenous enum

enum  hetergenousRequest
{
    readData = 1,
    saveData = "two",
    deleteData = 3
}
console.log(hetergenousRequest)