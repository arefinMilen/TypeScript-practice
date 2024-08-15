//properties,method ,constractor
var user = /** @class */ (function () {
    function user(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    user.prototype.display = function () {
        console.log("userName: ".concat(this.userName, " , Age : ").concat(this.age));
    };
    return user;
}());
var user1 = new user("samsul arefin", 221);
user1.display();
var user2 = new user("milen", 101);
user2.display();
