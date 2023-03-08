let gods = ['Athena', 'Zeus', 'Artemis', 'Hades', 'Apolo'];

// let godsFinder = gods.find(function (currentGod) {
//   return currentGod.length > 5;
// });

let godsFinder = gods.find((currentGod) => {
  return currentGod.length > 5;
});

console.log(godsFinder);