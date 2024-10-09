//Selectors
const form = document.querySelector("#form");
const submit = document.getElementById("submit");
const inputItem = document.getElementById("input");
const allList = document.getElementById("bazar-list");
const list = document.getElementById("list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!inputItem.value) {
    alert("please insert an item");
    return;
  }

  //creating a div
  const listDiv = document.createElement("div");
  //adding  a class
  listDiv.classList.add("list");

  //creating a input tag
  const input = document.createElement("input");
  //adding value to the new element (input)
  input.value = inputItem.value;
  //adding a class
  input.classList.add("list-item");
  //set Attribute
  input.setAttribute("readonly", "readonly");

  //adding input to the list div
  listDiv.appendChild(input);

  //adding the new input to the list div
  allList.appendChild(listDiv);
  console.log(listDiv);

  //creating a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerText = "Delete";
  listDiv.appendChild(deleteBtn);

  //createing a edit button
  const edit = document.createElement("button");
  edit.classList.add("edit");
  edit.innerText = "Edit👩";
  listDiv.appendChild(edit);

  //edit a field
  edit.addEventListener("click", (e) => {
    //console.log(e.target.innerText);
    if (e.target.innerText === "Edit👲") {
      input.removeAttribute("readonly");
      edit.innerText = "Save";
      input.focus();
    } else {
      edit.innerText = "Edit👩‍🦳";
      input.setAttribute("readonly", "readonly");
    }
  });
  deleteBtn.addEventListener("click", () => {
    //console.log(list);
    allList.removeChild(listDiv);
    // e.target.parentElement.remove();
  });
  inputItem.value = "";
});
