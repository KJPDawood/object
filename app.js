
var students = [
{
name: "John Doe",
semester: 3,
fatherName: "Doe",
isFeePaid: true,
courses: ["Mathematics", "Physics", "Computer Science"]
},
{
name: "Jane Smith",
fatherName: "Smith",
semester: 2,
isFeePaid: true,
courses: ["Biology", "Chemistry", "English"]
},
{
name: "Emily Johnson",
fatherName: "Johnson",
semester: 4,
isFeePaid: false,
courses: ["Economics", "Statistics", "Marketing"]
}
];

var dom = document.getElementById("studentinfo");

for (let i = 0; i < students.length; i++) {
var studentDetails = document.createElement("h3");
studentDetails.textContent = `Index: ${i}, Name: ${students[i].name}, Father's Name: ${students[i].fatherName}, Semester: ${students[i].semester}, Fee Paid: ${students[i].isFeePaid}`;
dom.appendChild(studentDetails);
var courses = document.createElement("ul");
students[i].courses.forEach(course => {
var courseItem = document.createElement("li");
courseItem.textContent = course;
courses.appendChild(courseItem);
});
dom.appendChild(courses);
}
