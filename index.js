// create a function that takes an array of drivers and a string as argument 

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
console.log(findMatching(drivers, 'Bobby'));

// create a function that takes an array of drivers and a string as argument
//returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, letters) {
    
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}
console.log(fuzzyMatch(drivers, 'Sa'));
console.log(fuzzyMatch(drivers, 'y'));
console.log(fuzzyMatch(drivers, 'mm'));

// create a function that takes an array of drivers and a string as argument
//takes  two properties: name and hometown
function matchName(drivers2, string) {
  return drivers2.filter(function(driver) {
    return driver.name === string;
  });
}

const drivers2 = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];

      console.log(matchName(drivers2, 'Bobby'));




