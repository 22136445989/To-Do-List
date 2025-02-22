const inputBox = document.getElementById("input-box");
let secretB = document.getElementById("discard");
const listContainer = document.getElementById("list-container");
let addTask = document.querySelector(".add");
let deleteAll = document.querySelector(".udalit");

addTask.addEventListener("click", AddTask);

function AddTask() {
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
  checkForListItems();
}

listContainer.addEventListener("click", highLightList);

function highLightList(joinup) {
  if (joinup.target.tagName === "LI") {
    joinup.target.classList.toggle("checked");
    saveData();
    checkForListItems();
  } else if (joinup.target.tagName === "SPAN") {
    joinup.target.parentElement.remove();
    saveData();
    checkForListItems();
  }
}

function checkForListItems() {
  if (listContainer.children.length > 0) {
    secretB.style.display = "block";
  } else {
    secretB.style.display = "none";
  }
}
saveData();

deleteAll.addEventListener("click", discardAll);

function discardAll() {
  listContainer.innerHTML = "";
  checkForListItems();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
