var role = ['admin', 'user', 1, 2];
role.push(true); // optional element
console.log("Role: ".concat(role[2]));
role[2] = 42;
console.log("Role: ".concat(role[2]));
