let gods = ['Athena', 'Zeus', 'Artemis', 'Hades', 'Apolo'];

let godsMap = gods.map(function(currentGod) {
  let godUpper = currentGod.toUpperCase();
  return godUpper;
});

console.log(godsMap);