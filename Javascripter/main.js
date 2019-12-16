// ARROW FUNCTIONS
//const greet = (greeting = 'Hello', name = 'There') => `${greeting} ${name}`
//console.log(greet('Hi'))

// OOP

// Constructor Function
//function Person(firstName, lastName, dob) {
// Set object properties
//this.firstName = firstName
//this.lastName = lastName
//this.dob = new Date(dob) // Set to actual date object using Date constructor
// this.getBirthYear = function(){
//   return this.dob.getFullYear();
// }
// this.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`
// }
//}

// Built in constructors
const name = new String('Kevin')
console.log(typeof name) // Shows 'Object'
const num = new Number(5)
console.log(typeof num) // Shows 'Object'

// ES6 CLASSES
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear()
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person1 = new Person('John', 'Doe', '7-8-80')
console.log(person1.getBirthYear())

// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById('my-form'))
console.log(document.querySelector('.container'))
// Multiple Element Selectors
console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByTagName('li'))
console.log(document.getElementsByClassName('item'))

const items = document.querySelectorAll('.item')
items.forEach(item => console.log(item))

// MANIPULATING THE DOM

const btn = document.querySelector('.btn')
// btn.style.background = 'red';

// EVENTS

// Mouse Event
//btn.addEventListener('click', e => {
//e.preventDefault()
//console.log(e.target.className)
//document.getElementById('my-form').style.background = '#ccc'
//document.querySelector('body').classList.add('bg-dark')
//document.querySelector('.items').lastElementChild.innerHTML =
//'<h1>Changed</h1>'
//})

// Keyboard Event
//const nameInput = document.querySelector('#name')
//nameInput.addEventListener('input', e => {
//document.querySelector('.container').append(nameInput.value)
//})

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

// Listen for form submit
myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault()

  if (nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error')
    msg.innerHTML = 'Please enter all fields'

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000)
  } else {
    // Create new list item with user
    const li = document.createElement('li')

    // Add text node with input values
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    )

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li)

    // Clear fields
    nameInput.value = ''
    emailInput.value = ''
  }
}
