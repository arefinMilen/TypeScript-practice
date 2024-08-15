//union data means more than one data can access in a single variable

let id : string | number | boolean ;

id = "skdfs"
id = 212
id = true

// console.log(`id : ${id},${id},${id}`)

function display(userId: string | number)
{
    console.log(userId)

}

display(212)
display("sdfdf")