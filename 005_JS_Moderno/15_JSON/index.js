const str = `{"name": "Guilherme",
  "age": 20,
  "job": "Software Engineer",
  "friends": ["HTML", "CSS", "JavaScript"],
  "working": true,
  "website": null
}`

console.log(str)

const obj = JSON.parse(str)
const str2 = JSON.stringify(obj)

console.log(obj)
console.log(str2)
