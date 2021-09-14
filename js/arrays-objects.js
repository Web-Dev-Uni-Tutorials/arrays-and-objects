/*
1. The following code declares a new array. Using this array attempt the following:
a) Output the text 'Tuesday'.
b) Output the text 'Monday is the first day of the week'.
c) Output the text 'Friday and Saturday are my favourite days'.
d) Output the entire contents of the array using a forEach loop.
*/

const daysOfTheWeek= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/*
2. The following code declares an array. Using this array attempt the following:
a) Output the entire contents of the array using a forEach loop.
b) Use a filter to generate an array of countries that contain the letter 'n'. Have a look at using indexOf() (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf).  Save the resulting array and output its contents using a forEach loop.
c) Modify your program from (2b) so that you ask the user for a search term and then display the countries that match the search term e.g. if the user enters 'i', China, India, Indonesia, Brazil and Pakistan should be displayed.
*/

const countries=["China","India","USA","Indonesia","Brazil","Pakistan"];


/*
This question is less important, but feel free to attempt it if you'd like some more practice.
*/

/*
3. The following code declares an array of numbers. Using this array attempt the following:
a) Output the entire contents of the array using a forEach loop
b) Use a map to double each element in the array. Save the resulting array as doubleNums and output its contents using a forEach loop
c) Use a filter to generate an array of positive numbers based on nums. Save the resulting array as positiveNums and output its contents using a forEach loop
d) Instead of using a 'hard-coded' array of numbers, use a for loop to repeatedly ask the user for a number. Each time the user answers with a number, store the answer in the nums array. Using this array output the double of each element, and all the positive numbers that were entered.
e) Use the reduce function to get the total of all the numbers entered.
f) Use reduce to get the largest of the numbers that have been entered.
*/

const nums = [23,-1,250,10,-5,2];


/* Objects */

/*
4. The following code declares an object literal.
a) Write a line of code that will display the name property of this object in a console message. i.e. it should output 'England'.
b) Write a line of code that will display additional properties of this object in a console message. e.g. it should output 'England is a country in Europe. The capital city of England is London.'
c) Add another property to store the population of England (53000000). Test this works using a console.log message.
*/


const country={
  name : "England",
  capital : "London",
  continent : "Europe"
}

/*
5. The following code creates an array of objects. Using this array output the following information using a console.log.
a) Using this array and a console.log output the capital of USA. 
b) Using this array and a console.log output 'England has a population of 53000000'. 
c) Add another country object to the array
d) Use a forEach loop to output the name of each country in the array. 
e) Use the filter method to create a new array that only contains countries from Europe. 
*/

const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "Germany", capital : "Berlin", continent : "Europe", population: 80000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
]

/*
6. Write a program that will prompt the user for the name of a continent. The program should then output the countries from that continent. 
*/

/*
7. Modify question 6 so that the program also prompts for a minimum population. The program should then output the countries that match both the specified continent and minimum population e.g. if the user enters 'Europe' and 60000000 only France and Germany should be displayed.
*/
