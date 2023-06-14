fetch('http://localhost:8081/api/courses')
    .then(response => response.json())
    .then(data => {
        const table = document.getElementById('course-table');
        const selectedCourse = JSON.parse(localStorage.getItem('selectedID'));
        console.log(selectedCourse);            
        const row = document.createElement('tr');

        data.forEach(course => {
            const { id, dept, courseNum, courseName, instructor, startDate, numDays } = course;
            if (selectedCourse == id) {
                row.innerHTML = `
                                <td>${id}</td>
                                <td>${dept}</td>
                                <td>${courseNum}</td>
                                <td>${courseName}</td>
                                <td>${instructor}</td>
                                <td>${startDate}</td>
                                <td>${numDays}</td>
                            `;

            }
            table.appendChild(row);



            console.log(selectedCourse);
        });
    });

