var users;
users = [];
var users1;
users1 = {
    name: "samsul", id: 221
};
users.push(users1);
var users2;
users2 = {
    name: "arefin", id: 15
};
users.push(users2);
var getRequest;
getRequest = "POST";
function requestHandler(requesType) {
    console.log(requesType);
}
requestHandler("POST");
