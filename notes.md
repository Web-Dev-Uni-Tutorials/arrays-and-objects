## Arrays
* An array is a special type of variable that can store multiple pieces of data.
* We can think of an array as being a bit like a list of information.
* Each item in the list is numbered so it can be distinguished from the others.

```javascript
const shopping = ["Tea","Bread","Milk","Cheese","Flour"];
console.log(shopping[0]); //Tea
console.log(`Do you like ${shopping[3]}`); // Do you like Cheese
console.log(`I need to buy some ${shopping[1]} and ${shopping[2]} today.`); // I need to but some Bread and Milk today.
```
We can add items to an array using the push method:
```javascript
let like=[]; //an empty array
like.push("Vanilla");
like.push("Strawberry");
like.push("Chocolate");
console.log(like); // Array ["Vanilla", "Strawberry", "Chocolate"]
```
### Looping over arrays

#### forEach Loop
Typically we will use a forEach loop to efficiently loop over an array's values. The following example will display each country in turn:

```javascript
const countries=["China","India","USA","Indonesia","Brazil","Pakistan"];
countries.forEach(function(country){
	console.log(country);
});
```
The output will be:
```
China
India
USA
Indonesia
Brazil
Pakistan
```
#### map
Map is used to create a new array using an existing array. The function is applied to each element of the array and the results are returned as a new array. Here's an example:

```javascript
const countries=["China","India","USA","Indonesia","Brazil","Pakistan"];

const upperCountries = countries.map(function(country){
	return country.toUpperCase();
});

upperCountries.forEach(function(country){
	console.log(country);
});
```
The output will be
```
CHINA
INDIA
USA
INDONESIA
BRAZIL
PAKISTAN
```
#### filter
The filter method is used to create a new array that only features the elements that pass a test. Here's an example:

```javascript
const stuScores=[45,66,34,89,21,65,45];
const passingScores = stuScores.filter(function(score){
	if(score>=40){
		return true;
	}
	return false;
})

passingScores.forEach(function(score){
	console.log(score);
})
```
The output will be
```
45
66
89
65
45
```

## Objects
An object is simply a collection of variables (we call these properties) and functions (we call these methods) that we group together. Here's an example:
```javascript
const employee={
    name: "Jane",
    wage: 8,
    payBonus: true,
    dept: "Marketing"
}
```
To work with an object we use dot-notation syntax, *objectName.property*. Here are some examples:

```javascript
console.log(`${employee.name} earns ${employee.wage} an hour.`); //Jane earns 8 pounds an hour.
console.log(`${employee.name} works in ${employee.dept}.`); //Jane works in Marketing.

if(employee.payBonus === true){
	console.log(`${employee.name} gets a bonus.`); //Jane gets a bonus.
}
```


## Objects and Arrays
We often store a collection of objects in an array. Here's an example:

```javascript
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
];

console.log(`${countries[2].capital}`); // Washington
console.log(`${countries[0].name} has a population of ${countries[0].population}`); // England has a population of 53000000
```
## Arrays of Objects and Array Methods
The same forEach, map and filter methods apply for arrays of objects.

### forEach example
```javascript
const countries=[
    {name : "England", capital : "London", continent : "Europe", population: 53000000},
    {name : "France", capital : "Paris", continent : "Europe", population: 67000000},
    {name : "USA", capital : "Washington", continent : "N. America", population: 325000000}
];
countries.forEach(function(country){
  console.log(`${country.name}`);
})
```
Outputs
```
England
France
USA
```
### filter example
``` javascript
const europeanCountries = countries.filter(function(country){
    if(country.continent === "Europe"){
      return true;
    }
    return false;
})
europeanCountries.forEach(function(country){
    console.log(`${country.name}`);
})
```
Outputs
```
England
France
```
