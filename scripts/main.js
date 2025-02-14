const inputBox = document.getElementById("input-box");
let secretB = document.getElementById("discard");
const listContainer = document.getElementById("list-container");

let addTask = document.querySelector(".add");

addTask.addEventListener("click", function () {
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
});

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

let deleteAllBtn = document.querySelector(".udalit");
deleteAllBtn.addEventListener("click", function () {
  listContainer.innerHTML = "";
  saveData();
  checkContainer();
});

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
