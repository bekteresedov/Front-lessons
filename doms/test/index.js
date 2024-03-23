const inp = document.querySelector("input");
const btn = document.querySelector("button");

todos = [
  {
    id: 1,
    text: "alma",
    isClick: true,
  },
];

let validate = (value) => {
  if (value == "") {
    return {
      success: false,
      message: "Bos ola bilmez",
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
  } else
    return {
      success: true,
      message: "Her sey qaydasindadir",
    };
};

let isUnique = (data, check) => {
  return data.find((e) => e.text == check) ? true : false;
};

let render = (data) => {
  const taskList = document.querySelector(".taskList");
  taskList.innerHTML = data
    .map((todo, index) => {
      return `
        <li class="list">
            <p onclick="lineCenter(${index})" class=${
        todo.isClick ? "xett" : ""
      }>${todo.text}</p>
            <i onclick="deleteTask(${index})" class="fa-solid fa-trash-can">
            </i>
        </li>
        `;
    })
    .join("");
};

btn.addEventListener("click", () => {
  const inpValue = inp.value.trim();
  const validateResponse = validate(inpValue);
  if (!validateResponse.success) {
    alert(validateResponse.message);
    return;
  }

  const uniqueResponse = isUnique(todos, inpValue);
  if (uniqueResponse) {
  }

  todos.push({
    id: todos.length + 1,
    text: inpValue,
    isClick: false,
  });

  render(todos);
  inp.value = "";
});

let lineCenter = (index) => {
  if (todos[index].isClick) {
    todos[index].isClick = false;
  } else {
    todos[index].isClick = true;
  }

  render(todos);
};

let deleteTask = (index) => {
  todos.splice(index, 1);
  render(todos);
};
