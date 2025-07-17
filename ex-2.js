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
let alexHobbies = employees[1].hobbies;
let alexAndJamesAge = employees[0].age + employees[1].age;

console.log(alex); // Output: { name: 'Alex', age: 25, hobbies: [ 'Cryptocurrency', 'Social media' ] }
console.log(alexHobbies); // Output: [ 'Cryptocurrency', 'Social media'
console.log(alexAndJamesAge); // Output: 65