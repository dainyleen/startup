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

