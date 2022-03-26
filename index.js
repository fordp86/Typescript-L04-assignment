"use strict";
let joe = {
    firstName: 'Joe',
    lastName: 'Thiesman',
    age: 54,
    favoriteColor: 'Green',
    toString: function () {
        return `${this.firstName} ${this.lastName} is ${this.age} and his favoriate color is ${this.favoriteColor}`;
    }
};
console.log(joe.toString());
let contact = {
    firstName: 'John',
    lastName: 'Wayne',
    age: 85,
    phoneNumber: '850-777-8888',
    email: 'jwayene@gmail.com',
    toString: function () {
        return `${this.firstName} ${this.lastName} is ${this.age} and his favoriate color is ${this.favoriteColor}`;
    },
    printContactDetails: function () {
        return `${this.firstName} can be reached at ${this.phoneNumber} or ${this.email}`;
    }
};
console.log(contact.toString());
console.log(contact.printContactDetails());
