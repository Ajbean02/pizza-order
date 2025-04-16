//1. Create an array with 5 of your favorite foods.
 const favoriteFoods = ["crawfish", "Gumbo", "Quesadilla", "Blue Bell Ice Cream", "Snowballs"]

 //2.Log the first and last food in the array.
console.log("First Food:", favoriteFoods[0]);
console.log("Last food:", favoriteFoods[favoriteFoods.length - 1]);

 //3. Add one more food using .push() and log the new array.
favoriteFoods.push("Boudin");
console.log("Update food list:", favoriteFoods);

//1.Create an array with a list of guests
const guestList = ["Kirsten", "Anthony","Alex", "Camara","Carlton"];

//2. Remove the first guest using .shift()
const removedGuest = guestList.shift();

//3.Add a new guest at the end using .push()
guestList.push ("Fiona"); 
console.log("Updated guest list:", guestList);

//4. Log how many guests are comingm (.length)
console.log("Number of guests coming:", guestList.length);

//Problem 3: Weekend Tasks
//1. Create an array: 
// let tasks = ["laundry","groceries", "coding", "naps"]

let tasks = ["laundry", "groceries", "coding", "naps"];

//2. Write a function called printTasks that loops through the array and logs each tasks

function printTasks() {
    for (let i = 0; i < tasks.length; i++) {
        console.log( '${i + 1}. ${tasks[tasks[i]]}');
    }
}
//Call the function to print the tasks
printTasks();


//Problem 4: Reverse it (Manual Reverse)
//1.Create the array
let numbers = [1, 2, 3, 4, 5];

//2. Manually reverse it using a loop
let reversedNumbers = [];
for (let i = numbers.length - 1; i>= 0; i--) {
    reversedNumbers.push(numbers[i]);
}
//3.Log the results=
console.log("Original array:", numbers);
console.log("Reversed array:", reversedNumbers);
