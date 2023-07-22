/**
 * @typedef {Object} Todo
 * @property {number} id
 * @property {string} label
 * @property {boolean} completed
 */

/**
 * @type {Todo[]}
 */
let todoList = [
  { id: 1, label: "일어나기", completed: false },
  { id: 2, label: "아침 먹기", completed: false },
  { id: 3, label: "학교 가기", completed: false },
];

/**
 * 할 일을 생성합니다.
 * @param {Todo['label']} label
 */
const addTodo = (label) => {
  const todo = {
    id: new Date().getMilliseconds(),
    label,
    completed: false,
  };

  todoList = [...todoList, todo];
};

/**
 * 할 일을 제거합니다.
 * @param {Todo['id']} targetId
 */
const deleteTodo = (targetId) => {
  const newTodoList = todoList.filter(({ id }) => id !== targetId);
  todoList = newTodoList;
};

/**
 * 할 일을 완료합니다.
 * @param {Todo['id']} targetId
 */
const completeTodo = (targetId) => {
  const newTodoList = todoList.map((todo) => {
    if (todo.id === targetId) {
      return { ...todo, completed: true };
    }

    return todo;
  });

  todoList = newTodoList;
};

/**
 * Todo 데이터를 화면에 렌더링합니다.
 * @param {Todo} todo
 */
const renderTodo = (todo) => {
  const todoLabel = document.createElement("p");
  todoLabel.className = "todo-label";
  todoLabel.innerText = todo.label;

  const completeButton = document.createElement("button");
  completeButton.classList.add("todo-action");
  completeButton.classList.add("complete");
  completeButton.innerText = "완료";
  completeButton.onclick = () => {
    completeTodo(todo.id);
    renderTodoList();
  };

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("todo-action");
  deleteButton.classList.add("delete");
  deleteButton.innerText = "삭제";
  deleteButton.onclick = () => {
    deleteTodo(todo.id);
    renderTodoList();
  };

  const todoActionWrapper = document.createElement("div");
  todoActionWrapper.className = "todo-action-wrapper";

  if (!todo.completed) {
    todoActionWrapper.appendChild(completeButton);
  }
  todoActionWrapper.appendChild(deleteButton);

  const todoWrapper = document.createElement("div");
  todoWrapper.className = "todo-wrapper";
  todoWrapper.appendChild(todoLabel);
  todoWrapper.appendChild(todoActionWrapper);

  const content = document.getElementById("content");
  content.appendChild(todoWrapper);
};

/**
 * Todo 리스트를 화면에 렌더링합니다.
 * @param {Todo} todo
 */
const renderTodoList = () => {
  // 리스트 렌더링 전 컨텐트를 초기화합니다.
  const content = document.getElementById("content");
  content.innerHTML = "";

  todoList.forEach((todo) => {
    renderTodo(todo);
  });
};

renderTodoList();
