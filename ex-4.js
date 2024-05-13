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
employees.push({
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping", "Reading novels"],
});

employees.push({});
employees[3].name = "Kody";
employees[3].age = 19;
employees[3].hobbies = [];

employees[3].hobbies.unshift("Computer");
employees[3].hobbies.push("Wakeboard");

console.log(employees);
