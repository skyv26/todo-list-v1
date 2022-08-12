import './index.scss';

const listContainer = document.querySelector('.todo__main-taskContainer');
const refreshButton = document.querySelector('.todo__header-refreshButton');

const todosTaskList = [
  {
    description: 'Morning walk at 5AM with brother',
    completed: false,
    index: 2,
  },
  {
    description: 'Go to GYM for weight loss',
    completed: false,
    index: 3,
  },
  {
    description: 'Buy some groceries from city',
    completed: false,
    index: 1,
  },
];

todosTaskList.sort((a, b) => a.index - b.index);

todosTaskList.forEach((each) => {
  const htmlTemplateLiteral = `
    <li class="space todo__list" id="list-${each.index}" draggable="true" onclick="todoListHandler(event, this)">
      <input class="todo__list-status" type="checkbox" name="todo__task_checkbox" ${each.completed ? 'checked' : ''} id="todo__task_checkbox-${each.index}" aria-label="mark the task as completed or uncompleted" >
      <label for="task-${each.index}" class="todo__task-placeholder" onclick="todoEditHandler(this)">
        <span class="strike">${each.description}</span>
        <input class="update-todo__input" type="text" name="task-${each.index}" id="task-${each.index}" >
      </label>
      <div class="todo__mode">
        <i class="fontawesome-icon fa-solid fa-ellipsis-vertical ellipse" id="todo__mode-${each.index}"></i>
      </div>
    </li>
  `;
  listContainer.insertAdjacentHTML('beforeend', htmlTemplateLiteral);
});

refreshButton.addEventListener('click', () => {
  window.location.reload();
});