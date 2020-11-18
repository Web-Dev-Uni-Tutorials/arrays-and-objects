/*
1. The following code declares a new array. Using this array attempt the following (slides 5-8):
a) Output the text 'Tuesday'. (slides 5-8)
b) Output the text 'Monday is the first day of the week'. (slides 5-8)
c) Output the text 'Friday and Saturday are my favourite days'. (slides 5-8)
d) Output the entire contents of the array using a forEach loop. (slides 14-15)
*/

// const daysOfTheWeek= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// (a)
// console.log(daysOfTheWeek[1]);

// (b)
// console.log(`${daysOfTheWeek[0]} is the first day of the week.`);

// (c)
// console.log(`${daysOfTheWeek[4]} and ${daysOfTheWeek[5]} are my favourite days.`);

// (d)
// daysOfTheWeek.forEach(function(day){
//     console.log(day);
// })

/*
2. The following code declares an array. Using this array attempt the following:
a) Output the entire contents of the array using a forEach loop. (slides 14-15)
b) Use a filter to generate an array of countries that contain the letter 'n'. Have a look at using indexOf() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf).  Save the resulting array and output its contents using a forEach loop (slides 18(for filtering) and 21(for indexOf))
c) Modify your program from (2b) so that you ask the user for a search term and then display the countries that match the search term e.g. if the user enters 'i', China, India, Indonesia, Brazil and Pakistan should be displayed.
*/

// const countries=["China","India","USA","Indonesia","Brazil","Pakistan"];

// (a)
// countries.forEach(function(country){
//     console.log(country);
// })

// (b)
// const countriesWithLetterN = countries.filter(function(country){
//     if(country.indexOf("n") === -1){
//         return false;
//     }
//     return true;
// })
//
// // The \n means newline. It adds a new line in the console message.
// console.log("\nThe following countries contain the letter 'n'.")
// countriesWithLetterN.forEach(function(country){
//     console.log(country);
// })

// (c)
// const searchTerm = prompt("Enter a search term");
// const matchingCountries = countries.filter(function(country){
//     if(country.indexOf(searchTerm) === -1){
//         return false;
//     }
//     return true;
// })
//
// console.log(`\nThe following countries contain the letter '${searchTerm}'.`)
// matchingCountries.forEach(function(country){
//     console.log(country);
// })

/*
3. The following code declares an object literal.
a) Write a line of code that will display the name property of this object in a console message. i.e. it should output 'England'. (slide 24)
b) Write a line of code that will display additional properties of this object in a console message. e.g. it should output 'England is a country in Europe. The capital city of England is London.' (slides 25)
c) Add another property to store the population of England (53000000). Test this works using a console.log message. (slide 24)
*/


const country={
  name : "England",
  capital : "London",
  continent : "Europe",
  population: 53000000
}

//a)
// console.log(country.name);

//b)
// console.log(`${country.name} is a country in ${country.continent}. The capital city of ${country.name} is ${country.capital}.`);
//c)
// console.log(`${country.population}`);

/*
4. The following code creates an array of objects. Using this array output the following information using a console.log.
a) Using this array and a console.log output the capital of USA. (slide 28)
b) Using this array and a console.log output 'England has a population of 53000000'. (slide 28)
c) Add another country object to the array
d) Use a forEach loop to output the name of each country in the array. (slide 28)
e) Use the filter method to create a new array that only contains countries from Europe. (slide 31)
*/

const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "Germany", capital : "Berlin", continent : "Europe", population: 80000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000},
    {name : "Japan", capital : "Tokyo", continent : "Asia", population: 127000000}
]

//a)
// console.log(`${countries[2].capital}`)

//b)
// console.log(`${countries[0].name} has a population of ${countries[0].population}`)

//d)
// countries.forEach(
//   function(country){
//     console.log(`${country.name}`);
//   }
// )

// e)
// const europeanCountries = countries.filter(
//   function(country){
//     if(country.continent === "Europe")
//     {
//       return true;
//     }
//     return false;
//   }
// )

// console.log("\nThe following countries are in Europe:")
// europeanCountries.forEach(
//   function(country){
//     console.log(`${country.name}`);
//   }
// )

/*
5. Write a program that will prompt the user for the name of a continent. The program should then output the countries from that continent. (slide 32)
*/

// const contChoice = prompt("Enter the name of a continent");
// const matchingCountries = countries.filter(function(country){
//     if(country.continent === contChoice){
//       return true;
//     }
//     return false;
//   }
// )

// console.log(`\nThe following countries are in ${contChoice}:`)
// matchingCountries.forEach(
//   function(country){
//     console.log(`${country.name}`);
//   }
// )


/*
6. Modify question 5 so that the program also prompts for a minimum population. The program should then output the countries that match both the specified continent and minimum population e.g. if the user enters 'Europe' and 60000000 only France and Germany should be displayed.
*/

// const contChoice = prompt("Enter the name of a continent");
// const popChoice = parseInt(prompt("Enter a minimum value for population"));

// const matchingCountries = countries.filter(
//   function(country){
//     if(country.continent === contChoice && country.population >= popChoice)
//     {
//       return true;
//     }
//     return false;
//   }
// )

// console.log(`\nThe following countries are in ${contChoice} and have a population of at least ${popChoice}.`)
// matchingCountries.forEach(
//   function(country){
//     console.log(`${country.name}`);
//   }
// )

/*
This question is less important, but feel free to attempt it if you'd like some more practice.
*/

/*
7. The following code declares an array of numbers. Using this array attempt the following:
a) Output the entire contents of the array using a forEach loop
b) Use a map to double each element in the array. Save the resulting array as doubleNums and output its contents using a forEach loop
c) Use a filter to generate an array of positive numbers based on nums. Save the resulting array as positiveNums and output its contents using a forEach loop
d) Instead of using a 'hard-coded' array of numbers, use a for loop to repeatedly ask the user for a number. Each time the user answers with a number, store the answer in the nums array. Using this array output the double of each element, and all the positive numbers that were entered.
e) Use the reduce function to get the total of all the numbers entered.
f) Use reduce to get the largest of the numbers that have been entered.
*/

//const nums = [23,-1,250,10,-5,2];

// (d)
// const userNum = parseInt(prompt("How many numbers would you like to enter?"))
// const nums = []
// for(i=1;i<=userNum;i++){
//   const num = parseInt(prompt(`Enter number ${i}`))
//   nums.push(num)
// }

// (a)
// nums.forEach(function(num){
//     console.log(num);
// })

// (b)
// const doubleNums=nums.map(function(num){
//     return num*2;
// })
// console.log("The numbers doubled:");
// doubleNums.forEach(function(num){
//     console.log(num);
// })

// (c)
// const positiveNums=nums.filter(function(num){
//     if(num>0){
//         return true;
//     }
//     return false;
// })
// console.log("The numbers filtered:");
// positiveNums.forEach(function(num){
//     console.log(num);
// })

// (e)
// const total = nums.reduce(function(a,b){
//   return a+b;
// })
// console.log(`The total is ${total}.`);

// (f)
// const largest = nums.reduce(function(a,b){
//   if(a>b) {
//     return a;
//   }else{
//     return b;
//   }
// })
// console.log(`The largest number is ${largest}.`);
