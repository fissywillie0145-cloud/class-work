

let students = [];
function addStudent() {

    let id = Number(document.getElementById("studentId").value);
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let age = Number(document.getElementById("age").value);
    let course = document.getElementById("course").value;
    const searchResult =document.getElementById("searchResult")

    if (!id || !name || !email || !age || !course) {
        // alert("Please fill in all fields");
        searchResult.innerHTML = "Please fill in all fields";
        return;
    }

    // Check if ID already exists
    let existingStudent = students.find(student => student.id === id);

    if (existingStudent) {
        // alert("Student ID already exists");
        searchResult.innerHTML = "Student ID already exists";
        return;
    }

    // Create student object
    let student = {
        id: id,
        name: name,
        email: email,
        age: age,
        course: course
    };

    // Add student to array
    students.push(student);
  searchResult.innerHTML = "Student added successfully!";
    // alert("Student added successfully!");

    // Clear input fields
    document.getElementById("studentId").value = "";
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";

    displayStudents();
}


// Function to display all students
function displayStudents() {

    let output = "";

    students.forEach(function(student) {

        output += `
            <div>
                <h3>${student.name}</h3>
                <p>ID: ${student.id}</p>
                <p>Email: ${student.email}</p>
                <p>Age: ${student.age}</p>
                <p>Course: ${student.course}</p>

                <button onclick="updateStudent(${student.id})">
                    Update
                </button>

                <button onclick="deleteStudent(${student.id})">
                    Delete
                </button>
            </div>
            <hr>
        `;

    });

    document.getElementById("studentList").innerHTML =
        output || "No students registered yet.";
}


// Function to search for a student
function searchStudent() {

    let id = Number(document.getElementById("searchId").value);

    let student = students.find(function(student) {
        return student.id === id;
    });

    if (student) {

        searchResult.innerHTML = `
            <h3>Student Found</h3>
            <p>Name: ${student.name}</p>
            <p>ID: ${student.id}</p>
            <p>Email: ${student.email}</p>
            <p>Age: ${student.age}</p>
            <p>Course: ${student.course}</p>
        `;

    } else {

        document.getElementById("searchResult").innerHTML =
            "Student not found.";

    }
}


// Function to update student information
function updateStudent(id) {

    let student = students.find(function(student) {
        return student.id === id;
    });

    if (student) {

        let newName = prompt("Enter new name:", student.name);
        let newEmail = prompt("Enter new email:", student.email);
        let newAge = prompt("Enter new age:", student.age);
        let newCourse = prompt("Enter new course:", student.course);

        if (newName && newEmail && newAge && newCourse) {

            student.name = newName;
            student.email = newEmail;
            student.age = Number(newAge);
            student.course = newCourse;
             searchResult.innerHTML = `Student updated successfully!`;
                   
            // alert("Student updated successfully!");

            displayStudents();

        }

    }

}


// Function to delete a student
function deleteStudent(id) {

    let confirmDelete = confirm("Are you sure you want to delete this student?");

    if (confirmDelete) {

        students = students.filter(function(student) {
            return student.id !== id;
        });

        document.getElementById("searchResult").innerHTML = "Student deleted successfully!";
        // alert("Student deleted successfully!");

        displayStudents();

    }

}
