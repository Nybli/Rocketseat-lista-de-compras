const inputItem = document.querySelector("#input-item");
const addItemButton = document.querySelector("#add-item-btn");
const itemList = document.querySelector("#item-list");
const alert = document.querySelector(".alert");
const closeAlertButton = document.querySelector(".close-alert-btn");

function createListItem(itemText) {
  const newItem = document.createElement("li");

  const checkboxWrapper = document.createElement("div");
  checkboxWrapper.classList.add("checkbox-wrapper");

  const label = document.createElement("label");
  const checkboxImg = document.createElement("div");
  checkboxImg.classList.add("checkbox-img");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  label.appendChild(checkboxImg);
  label.appendChild(checkbox);
  checkboxWrapper.appendChild(label);

  const itemName = document.createElement("span");
  itemName.textContent = itemText;

  const deleteButton = document.createElement("img");
  deleteButton.classList.add("delete-btn");
  deleteButton.src = "assets/trash-can.svg";

  newItem.appendChild(checkboxWrapper);
  newItem.appendChild(itemName);
  newItem.appendChild(deleteButton);

  return newItem;
}

function addItem() {
  const itemText = inputItem.value.trim();

  if (itemText) {
    const newItem = createListItem(itemText);
    itemList.appendChild(newItem);
    inputItem.value = "";
  }
}

addItemButton.addEventListener("click", addItem);
inputItem.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addItem();
  }
});

itemList.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("delete-btn")) {
    const listItem = e.target.closest("li");
    listItem.remove();

    alert.style.display = "flex";
  }
});

closeAlertButton.addEventListener("click", () => {
  alert.style.display = "none";
});
