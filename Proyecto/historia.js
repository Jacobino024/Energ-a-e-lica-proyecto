document.addEventListener("DOMContentLoaded", function() {
    fetch("informacion.csv")  // Cargar archivo CSV de la carpeta
        .then(response => response.text())
        .then(data => processCSV(data))
        .catch(error => console.error("Error al cargar CSV:", error));
    });

function processCSV(csv) {
    const rows = csv.split("\n").map(row => row.split(",")); // Separar filas y columnas
    const tableHead = document.getElementById("tableHead");
    const tableBody = document.getElementById("tableBody");

    tableHead.innerHTML = ""; // Limpiar encabezado
    tableBody.innerHTML = ""; // Limpiar cuerpo de la tabla 

    if (rows.length === 0) return;

    // Crear encabezado
    let headerRow = document.createElement("tr");
    rows[0].forEach(col => {
        let th = document.createElement("th");
        th.textContent = col.trim();
        headerRow.appendChild(th);
    });
    tableHead.appendChild(headerRow);

    // Crear filas de la tabla
    rows.slice(1).forEach(row => {
        let tr = document.createElement("tr");
        row.forEach(col => {
            let td = document.createElement("td");
            td.textContent = col.trim();
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

// funcion para filtrar la tabla
function filterTable() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let rows = document.getElementById("tableBody").getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let rowText = rows[i].textContent.toLowerCase();
        rows[i].style.display = rowText.includes(input) ? "" : "none";
    }
}
