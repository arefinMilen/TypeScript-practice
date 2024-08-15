//enum -store constants; duplicate value is not allowed here
//enum type: numeric ,string,hetergenous
//numeric enum
var userRequest;
(function (userRequest) {
    userRequest[userRequest["readData"] = 0] = "readData";
    userRequest[userRequest["saveData"] = 1] = "saveData";
    userRequest[userRequest["deleteData"] = 2] = "deleteData";
})(userRequest || (userRequest = {}));
console.log(userRequest);
//string enum
var stringRequest;
(function (stringRequest) {
    stringRequest["readData"] = "one";
    stringRequest["saveData"] = "two";
    stringRequest["deleteData"] = "three";
})(stringRequest || (stringRequest = {}));
console.log(stringRequest);
//hetergenous enum
var hetergenousRequest;
(function (hetergenousRequest) {
    hetergenousRequest[hetergenousRequest["readData"] = 1] = "readData";
    hetergenousRequest["saveData"] = "two";
    hetergenousRequest[hetergenousRequest["deleteData"] = 3] = "deleteData";
})(hetergenousRequest || (hetergenousRequest = {}));
console.log(hetergenousRequest);
