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
    for (let i = 0; i < data.results.length) {

    }
  })
}

