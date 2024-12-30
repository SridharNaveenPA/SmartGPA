let n = 0;
let numerator = 0;
let cred_sum = 0;

function fun() {
    n = parseInt(document.getElementById("n").value);
    const container = document.getElementById("field");
    numerator = 0;
    cred_sum = 0;

    container.innerHTML = "";

    for (let i = 0; i < n; i++) {
        container.innerHTML += `
            <input type="number" id="input${i}" placeholder="Enter GP SUB ${i + 1}"><br>
            <input type="number" id="cred${i}" placeholder="Enter Credit SUB ${i + 1}"><br><br>
        `;
    }

    container.innerHTML += `<button type="button" onclick="calculateCGPA()">Calculate CGPA</button>`;
}

function calculateCGPA() {
    numerator = 0;
    cred_sum = 0;
    const container = document.getElementById("field");

    for (let i = 0; i < n; i++) {
        const point = parseInt(document.getElementById(`input${i}`).value) || 0;
        const credit = parseInt(document.getElementById(`cred${i}`).value) || 0;
        numerator += point * credit;
        cred_sum += credit;
    }

    let cgpa = (cred_sum > 0) ? (numerator / cred_sum).toFixed(2) : 0;
    container.innerHTML += `<p>CGPA is: ${cgpa}</p>`;
}
