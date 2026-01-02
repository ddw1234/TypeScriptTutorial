"use strict";
let role = ['admin', 'user', 1, 2];
role.push(true); // optional element
console.log(`Role: ${role[1]}`);
role[2] = 42;
