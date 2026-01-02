"use strict";
// TypeScript string array examples
Object.defineProperty(exports, "__esModule", { value: true });
exports.names = exports.fruits = void 0;
// 1) Simple array syntax
const fruits = ['apple', 'banana', 'cherry'];
exports.fruits = fruits;
// 2) Generic array syntax
const names = ['Alice', 'Bob', 'Charlie'];
exports.names = names;
// Add an item
fruits.push('date');
// Iterate and log
fruits.forEach((f, i) => console.log(`fruit ${i}: ${f}`));
names.forEach((n, i) => console.log(`name ${i}: ${n}`));
