"use strict"

fetch('http://localhost:8081/api/courses')
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById('course-table');

   data.forEach(course => {



      const { id, dept, courseName } = course;
      const row = document.createElement('tr');
      row.innerHTML = `
      <td><a id = "myLink" href="details.html?id=${id}">${id}</a></td>
             <td>${id}</td>
            <td>${dept}</td>
            <td>${courseName}</td
          `;
      table.appendChild(row);
      


    });
  })
 
  

  // Step 1: Select the hyperlink element
const link = document.getElementById('myLink');

// Step 2: Add the event listener
link.addEventListener('click', handleClick);

// Step 3: Define the event handler function
function handleClick(event) {
  // Prevent the default behavior of the hyperlink
  event.preventDefault();

  // Add your custom logic here
  alert("stored")
  console.log('Link clicked!');
  // You can perform other actions or navigate to a different page
}
