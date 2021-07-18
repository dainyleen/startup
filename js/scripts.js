/***********
 FETCH CALL
***********/
async function fetchEmployees(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

// API for returning information of 12 random users
url = 'https://randomuser.me/api/?results=12&nat=nz'
const employeeInfo = fetchEmployees(url)
displayEmployeeGallery(employeeInfo)

/****************
 HELPER FUNCTION
****************/

function displayEmployeeGallery(employeeInfo) {
  const gallery = document.getElementById('gallery')
  // Loop through the employee info data
  employeeInfo.then(data => {
    for (let i = 0; i < data.results.length; i++) {
      const profileImage = data.results[i].picture.medium
      const name = data.results[i].name
      const email = data.results[i].email
      const location = data.results[i].location

      // Add HTML to the gallery to be displayed
      const html = `
      <div class="card" id="${i + 1}">
      <div class="card-img-container">
        <img class="card-img" src="${profileImage}" alt="profile picture">
      </div>
      <div class="card-info-container">
        <h3 id="name" class="card-name cap">${name.first} ${name.last}</h3>
        <p class="card-text">${email}</p>
        <p>${location.city}, ${location.country}</p>
      </div>
      </div>`
      gallery.insertAdjacentHTML('beforeend', html)
    }
  })
}

/******
 MODAL
******/

// Listen for a click on an employee card
$('.gallery').on('click', '.card', function(event) {
  employeeNumber = parseInt(event.currentTarget.getAttribute('id') - 1)
  const modalGallery = document.getElementById('gallery')
  employeeInfo.then(data => {
    const employee = data.results[employeeNumber]

    // Employee information will be displayed in the modal view
    const modalHTML = `
    <div class="modal-container">
    <div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
        <img class="modal-img" src=${employee.picture.large} alt="profile picture">
        <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
        <p class="modal-text">${employee.email}</p>
        <p class="modal-text cap">${employee.location.city}</p>
        <hr>
        <p class="modal-text">Mobile: ${employee.cell}</p>
        <p class="modal-text">Address: ${employee.location.street.number} ${employee.location.street.name}, ${employee.location.country}, ${employee.location.postcode}</p>
      </div>
    </div>
    </div>`
    modalGallery.insertAdjacentHTML('beforeend', modalHTML)
  })
})

// Closing the modal
$('.gallery').on('click', '#modal-close-btn', function(event) {
  const modalContainer = document.querySelector('.modal-container')
  modalContainer.remove()
})


