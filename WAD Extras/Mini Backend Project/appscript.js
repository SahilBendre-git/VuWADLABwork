
        // Our backend URL
        const API_URL = "http://localhost:2556";
        //const API_URL = "http://192.168.31.3:3000"


        // GET /api/students
        async function loadStudents() {

            const status = document.getElementById("status");
            const container = document.getElementById("students");

            status.textContent = "Loading...";
            container.innerHTML = "";

            try {

                const response = await fetch(
                    `${API_URL}/api/students`
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch students");
                }

                const students = await response.json();

                status.textContent =
                    `${students.length} student(s) found`;

                students.forEach(student => {

                    const div = document.createElement("div");

                    div.className = "student";

                    div.innerHTML = `
                        <strong>${student.name}</strong>
                        <span>${student.course}</span>
                    `;

                    container.appendChild(div);
                });

            } catch (error) {

                status.textContent =
                    "Could not connect to the backend.";

                console.error(error);
            }
        }


        // POST /api/students
        async function addStudent() {

            const name =
                document.getElementById("name").value;

            const course =
                document.getElementById("course").value;

            const status =
                document.getElementById("addStatus");


            if (!name || !course) {

                status.textContent =
                    "Please enter both fields.";

                return;
            }


            try {

                const response = await fetch(
                    `${API_URL}/api/students`,
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            name: name,
                            course: course
                        })
                    }
                );


                const data = await response.json();

                status.textContent = data.message;

                document.getElementById("name").value = "";
                document.getElementById("course").value = "";

            } catch (error) {

                status.textContent =
                    "Could not connect to the backend.";
                console.error(error);
            }
        }
