"use strict"

fetch('http://localhost:8081/api/courses')
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById('course-table');

   data.forEach(course => {



      const { id, dept, courseName } = course;
      const row = document.createElement('tr');
      row.innerHTML = `
      <td><a href="details.html?id=${id}">${id}</a></td>
             <td>${id}</td>
            <td>${dept}</td>
            <td>${courseName}</td
          `;
      table.appendChild(row);


    });
  })
