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
var Users = /** @class */ (function () {
    function Users() {
        this.userName = "";
        this.age = 0;
    }
    Users.prototype.add = function (userName) {
        return this.userName + " added successfully";
    };
    return Users;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.empName = "";
        return _this;
    }
    Employee.prototype.getName = function () {
        return this.empName;
    };
    return Employee;
}(Users));
var user1 = new Users();
user1.userName = "John";
user1.age = 25;
console.log(user1.add(user1.userName));
var emp1 = new Employee();
emp1.empName = "Smith";
console.log(emp1.add(emp1.userName = "Test"));
console.log(emp1.getName());
