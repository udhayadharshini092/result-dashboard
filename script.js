function getResult() {

    let reg = document.getElementById("regNo").value;
    let output = document.getElementById("result");

    let student = students.find(s => s.regNo === reg);

    if (student) {

        let status = student.marks >= 50 ? "Pass" : "Fail";
        let color = student.marks >= 50 ? "green" : "red";

        output.innerHTML = `
            <h2>${student.name}</h2>
            <p>Marks: ${student.marks}</p>
            <p style="color:${color}">Status: ${status}</p>
        `;

    } else {
        output.innerHTML = "<p>Student not found</p>";
    }
}