document.addEventListener("DOMContentLoaded", () => {
    let colorChangebtn = document.getElementById("colorChangebtn");
    let outputdiv = document.getElementById("output");
    generateTable();

    colorChangebtn.addEventListener("click", () => {
        let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        outputdiv.style.color = randomColor;

        let newParagraph = document.createElement("h3");
        newParagraph.textContent = "Esto es un testo incrustado";
        outputdiv.appendChild(newParagraph);
        
    });

    function generateTable() {
        let table = document.createElement("table");
        table.border = "1";

        let headTable = table.createTHead();
        let row = headTable.insertRow();
        let cell = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell.textContent = 'Encabezado 1';
        cell2.textContent = 'Encabezado 2';

        for(let i = 0; i < 3; i++){
            let row = table.insertRow();
            let cell = row.insertCell(0);
            let cell2 = row.insertCell(1);

            cell.textContent = 'Fila ' + (i + 1) + ' Celda 1';
            cell2.textContent = 'Fila ' + (i + 1) + ' Celda 2';
        }
        let tableContainer = document.getElementById("tableContainer");
        tableContainer.appendChild(table);
    }
});