// TypeScript string array examples

// 1) Simple array syntax
const fruits: string[] = ['apple', 'banana', 'cherry'];

// 2) Generic array syntax
const names: Array<string> = ['Alice', 'Bob', 'Charlie'];

// Add an item
fruits.push('date');

// Iterate and log
fruits.forEach((f, i) => console.log(`fruit ${i}: ${f}`));
names.forEach((n, i) => console.log(`name ${i}: ${n}`));

export { fruits, names };

