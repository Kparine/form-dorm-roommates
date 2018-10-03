const roommates = require('./roommates/render')
const data = require('./roommates/data')

const roommatesContainer = document.querySelector('#roommates')
roommates.showAll(roommatesContainer)

const newRoommateButton = document.querySelector('#new-roommate-button')
newRoommateButton.addEventListener('click', (event) => { 
  event.preventDefault()
  const sidebar = document.querySelector('#sidebar')
  roommates.showNewForm(sidebar)

let form = document.querySelector('form')  
  form.addEventListener('submit', (event) => {
  event.preventDefault()
  console.log("howdy")
 
  const avatar = document.querySelector('#avatar')
  const username = document.querySelector('#username')
  const faction = document.querySelector('#faction')
  const address = document.querySelector('#street')
  const suite = document.querySelector('#suite')
  const city = document.querySelector('#city')
  const zipcode = document.querySelector('#inputZip')
  
    const newRoomate = {
      "username": username.value,
      "avatar": avatar.value,
      "faction": faction.value,
      "address": {
          "street": address.value,
          "suite": suite.value,
          "city": city.value,
          "zipcode": zipcode.value
      }
  }
console.log(newRoomate)
data.unshift(newRoomate)
roommates.showAll(roommatesContainer)
  })
 
})
