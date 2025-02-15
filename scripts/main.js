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
    let span = document.createElement("span"    );
    span.innerHTML = "х";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (joinup) {
  if (joinup.target.tagName === "LI") {
    joinup.target.classList.toggle("checked");
    saveData();
    checkContainer();
  } else if (joinup.target.tagName === "SPAN") {
    joinup.target.parentElement.remove();
    saveData();
  }
});

function deleteAll() {
  listContainer.innerHTML = "";
  checkContainer();
}
saveData();

function checkContainer() {
  if (listContainer.children.length > 0) {
    secretB.style.display = "block";
  } else {
    secretB.style.display = "none";
  }
}
saveData();

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();