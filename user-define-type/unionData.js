//union data means more than one data can access in a single variable
var id;
id = "skdfs";
id = 212;
id = true;
// console.log(`id : ${id},${id},${id}`)
function display(userId) {
    console.log(userId);
}
display(212);
display("sdfdf");
