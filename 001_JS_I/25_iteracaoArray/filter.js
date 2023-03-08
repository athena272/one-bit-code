let gods = ['Athena', 'Zeus', 'Artemis', 'Hades', 'Apolo'];

// let godsFilter = gods.filter(function (currentGod) {
//   return currentGod.length > 5;
// });

let godsFilter = gods.filter((currentGod) => {
  return currentGod.length > 5;
});

console.log(godsFilter);