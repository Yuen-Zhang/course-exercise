fetch('http://localhost:8081/api/courses')
  .then(response => response.json())
  .then(data => {
    const table = document.getElementById('course-table');

    data.forEach(course => {
      const { id, dept, courseNum, courseName, instructor, startDate, numDays } = course;
      const row = document.createElement('tr');
      row.innerHTML = `
            
            <td>${dept}</td>
            <td>${courseNum}</td>
            <td>${courseName}</td>
            
            
           
          `;
      table.appendChild(row);
    });
  })
