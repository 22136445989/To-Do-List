const inputBox = document.getElementById("input-box");
let secretB = document.getElementById("discard");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "х";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
  checkContainer();
}

listContainer.addEventListener("click", function (joinup) {
  if (joinup.target.tagName === "LI") {
    joinup.target.classList.toggle("checked");
    saveData();
    checkContainer();
  } else if (joinup.target.tagName === "SPAN") {
    joinup.target.parentElement.remove();
    saveData();
    checkContainer();
  }
});

function deleteAll() {
  listContainer.innerHTML = "";
}
saveData();
checkContainer();

function checkContainer() {
  if (listContainer.children.length > 0) {
    secretB.style.display = "block";
  } else {
    secretB.style.display = "none";
  }
}
saveData();
checkContainer();

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
checkContainer();

// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");
// let secretB = document.getElementById("discard");

// function addTask() {
//     if (inputBox.value === '') {
//         alert("Write something!");
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "х";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
//     checkContainer(); // Добавлено: вызов после добавления задачи
// }

// listContainer.addEventListener("click", function(event) { // Изменено: joinup -> event
//     if (event.target.tagName === "LI") {
//         event.target.classList.toggle("checked");
//         saveData();
//     } else if (event.target.tagName === "SPAN") {
//         event.target.parentElement.remove();
//         saveData();
//         checkContainer(); // Добавлено: вызов после удаления задачи
//     }
// });

// function deleteAll() {
//     listContainer.innerHTML = "";
//     saveData();
//     checkContainer(); // Добавлено: вызов после очистки списка
// }

// function checkContainer() {
//     if (listContainer.children.length > 0) {
//         secretB.style.display = "block"; // Изменено: auto -> block
//     } else {
//         secretB.style.display = "none";
//     }
// }

// function saveData() {
//     localStorage.setItem("data", listContainer.innerHTML);
// }

// function showTask() {
//     listContainer.innerHTML = localStorage.getItem("data") || ""; // Обработка случая пустого localStorage
//     checkContainer(); // Добавлено: вызов после загрузки данных
// }

// showTask();
