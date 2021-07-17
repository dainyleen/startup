/***********
 FETCH CALL
***********/

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
      <div>
      <div>
      </div>
      <div>
      </div>
      </div>
      `
    }
  })
}

