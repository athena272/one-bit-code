function PhoneNumber(phone) {
    const fixedString = phone.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0]
    // this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")

}

const phone1 = new PhoneNumber('+55 (22) 9 9876-5432')
console.log(phone1)

const phone2 = new PhoneNumber('+1 (555) a555-999-8888')
console.log(phone2)
// console.log(new PhoneNumber('+55 (22) 9 9876-5432'))
// console.log(new PhoneNumber('+1 (555) a555-999-8888'))?