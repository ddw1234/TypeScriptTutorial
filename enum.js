var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANAGER"] = 1] = "MANAGER";
    Role[Role["READONLYUSER"] = 2] = "READONLYUSER";
})(Role || (Role = {}));
console.warn(Role.MANAGER);
