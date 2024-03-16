const input = document.querySelector("input");
const addBtn = document.querySelector("#add");
const todos = [
  {
    id: 1,
    text: "hello",
    isClick: true,
  },
];
addBtn.addEventListener("click", () => {
  const inputValue = input.value.trim();
  const validateResponse = validate(inputValue);
  if (!validateResponse.success) {
    alert(validateResponse.message);
    return;
  }
  const uniqueResponse = isUnique(todos, inputValue);
  if (uniqueResponse) {
    alert("text onceden daxil olunub");
    return;
  }
  todos.push({
    id: todos.length + 1,
    text: inputValue,
    isClick: false,
  });
  render(todos);
  input.value = "";
});

function validate(value) {
  if (value == "") {
    return {
      success: false,
      message: "bos ola bilmez",
    };
  } else if (value.length < 3) {
    return {
      success: false,
      message: "text min 3 simvoldan ibaret olmalidir",
    };
  } else if (value.length > 20) {
    return {
      success: false,
      message: "text max 20 simvoldan ibaret olmalidir",
    };
  }
  return {
    success: true,
    message: "her sey okdur",
  };
}

function isUnique(data, checkText) {
  return data.find((e) => e.text == checkText) ? true : false;
}

function render(data) {
  const taskList = document.querySelector(".task-list");
  taskList.innerHTML = data.map((todo, index) => {
    return `
    <li class="list">
    <p onclick="lineCenter(${index})" class=${
      todo.isClick ? "line-center" : ""
    }>${todo.text}</p>
    <i onclick="deleteTodo(${index})" class="fa-solid fa-trash-can"></i>
  </li>
    `;
  });
}
render(todos);

function lineCenter(index) {
  if (todos[index].isClick) {
    todos[index].isClick = false;
  } else {
    todos[index].isClick = true;
  }
  render(todos);
}
function deleteTodo(index) {
  todos.splice(index, 1);
  render(todos);
}
