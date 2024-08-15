var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//public,private ,protected,readOnly
var user = /** @class */ (function () {
    function user(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    user.prototype.display = function () {
        console.log("hi");
    };
    return user;
}());
// let user1 = new user("samsul arefin",221)
// user1.display()
// let user2 = new user("milen",101)
// user2.display()
var students = /** @class */ (function (_super) {
    __extends(students, _super);
    function students(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    students.prototype.display = function () {
        console.log("userName: ".concat(this.userName, " , Age : ").concat(this.age, " Student Id : ").concat(this.studentId));
    };
    students.prototype.setstudentId = function (studentId) {
        this.studentId = studentId;
    };
    students.prototype.getstudentId = function () {
        return this.studentId;
    };
    return students;
}(user));
var student1 = new students("milen", 24, 2323232111);
student1.setstudentId(342342432);
console.log(student1.getstudentId());
// student1.display()
var user1 = new user("will", 22);
user1.userName = "mike";
// user1.display();
