// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500s = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(bornIn1500s);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const birthdates = inventors.sort((a, b) => a.year - b.year);
console.log(birthdates);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

// // Solution 1
// const ages = inventors.map(inventor => inventor.age = inventor.passed - inventor.year);
// const totalYears = ages.reduce((accumulator, currentvalue) => accumulator + currentvalue)
// console.log(ages, totalYears);

// Solution 2
const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log(totalYears);

// 5. Sort the inventors by years lived

// // Solution 1
// const yearsOrder = inventors.sort((a, b) => b.age - a.age);
// console.log(yearsOrder);

// Solution 2
const yearsOrder = inventors.sort((a, b) => {
    const lastPerson = a.passed - a.year;
    const nextPerson = b.passed - b.year;
    return lastPerson > nextPerson ? -1 : 1;
});
console.log(yearsOrder);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')]; // Array.form(category.querySelectorAll('a'));
// const de = links
//     .map(link => link.textContent)
//     .filter(name => name.includes('de'));
// console.log(de);

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortByLastName = people.sort((last, next) => {
    const [aLast, aFirst] = last.split(', ');
    const [bLast, bFirst] = next.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(sortByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
// // Solution 1
// const types = data.reduce((allTypes, type) => {
//     if (type in allTypes) allTypes[type]++;
//     else allTypes[type] = 1;
//     return allTypes;
// }, {});
// Solution 2
const types = data.reduce((allTypes, type) => {
    if (!allTypes[type]) allTypes[type] = 0;
    allTypes[type]++;
    return allTypes;
}, {});
console.log(types);