const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here
employees[0].hobbies.push("Watching basketball");

console.log(employees[0].hobbies); // Output: { name: "Alex", age: 25, hobbies: ["Cryptocurrency", "Social media", "Watching basketball"] }
