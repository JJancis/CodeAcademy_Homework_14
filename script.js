var table = document.getElementById("table");
var addNewLine = document.getElementById("add");
var removeFirstLine = document.getElementById("removeFirst");
var removeLastLine = document.getElementById("removeLast");

addNewLine.addEventListener("click", function () {
  var inputName = document.getElementById("name");
  var inputSurname = document.getElementById("surname");
  var inputAge = document.getElementById("age");

  if (!!inputName.value && !!inputSurname.value && inputAge.value > 0) {
    createRow(inputName.value, inputSurname.value, inputAge.value);
    inputName.value = "";
    inputSurname.value = "";
    inputAge.value = "";
  } else {
    alert("Užpildykite visus laukelius 🤨");
  }
});

removeFirstLine.addEventListener("click", function () {
  var rows = document.getElementsByTagName("tr");
  removeRow(1, rows);
});

removeLastLine.addEventListener("click", function () {
  var rows = document.getElementsByTagName("tr");
  removeRow(rows.length - 1, rows);
});

function createRow(name, surname, age) {
  var row = document.createElement("tr");
  var tdName = document.createElement("td");
  var tdSurname = document.createElement("td");
  var tdAge = document.createElement("td");

  tdName.innerHTML = name;
  tdSurname.innerHTML = surname;
  tdAge.innerHTML = age;

  row.append(tdName, tdSurname, tdAge);

  table.children[table.children.length - 1].append(row);
}
function removeRow(line, rows) {
  if (rows.length > 1 && confirm("Ar tikrai?")) {
    rows[line].remove();
  } else {
    alert("Nebėra  jau ką trinti 😯");
  }
}
