<<<<<<< HEAD
"use strict"

=======
>>>>>>> main
fetch('http://localhost:8081/api/courses')
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById('course-table');

<<<<<<< HEAD
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
=======
    data.forEach(course => {
      const { id, dept, courseNum, courseName, instructor, startDate, numDays } = course;
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${dept}</td>
        <td>${courseNum}</td>
        <td><a href="#" data-course-id="${id}">${courseName}</a></td>
      `;
      table.appendChild(row);

      // Add click event listener to the course link
      const courseLink = row.querySelector('a');
      courseLink.addEventListener('click', event => {
        event.preventDefault();

        // Get the course ID from the data attribute
        const courseId = courseLink.dataset.courseId;

        // Find the selected course
        const selectedCourse = data.find(course => course.id === courseId);

        
        localStorage.setItem('selectedCourse', JSON.stringify(selectedCourse));

        
        window.location.href = 'details.html';
      });
    });
  });
>>>>>>> main
