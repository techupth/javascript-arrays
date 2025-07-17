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
let alex = employees[1];
let alexHobbies = alex.hobbies;
let alexAndJamesAge = employees[0].age + employees[1].age; // 40 + 25 = 65

console.log(alex);
console.log(alexHobbies);
console.log(alexAndJamesAge); // Output: 65
