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
    return students;
}(user));
var student1 = new students("milen", 24, 2323232111);
student1.display();
