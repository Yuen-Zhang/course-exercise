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
