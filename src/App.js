import Sortable from 'sortablejs';

import TodoLib from './store/TodoLib';
import ListWrapper from './components/main/ListWrapper';
import Operation from './components/main/Operation';

const form = document.querySelector('.todo__main-form');
const listContainer = document.querySelector('.todo__main-taskContainer');
const main = document.querySelector('.todo__main');

const App = () => {
  form.addEventListener('submit', function formHandler(e) {
    e.preventDefault();
    const description = this.querySelector('.todo__main-form_taskInput').value;
    TodoLib.addTodo(description);
    listContainer.textContent = '';
    TodoLib.todoListArray.forEach((each) => {
      listContainer.appendChild(ListWrapper(each));
    });
    this.reset();
  });

  if (TodoLib.todoListArray.length) {
    TodoLib.todoListArray.forEach((each) => {
      listContainer.appendChild(ListWrapper(each));
    });
  }

  Sortable.create(listContainer);

  const operation = Operation();
  main.appendChild(operation);
};

export default App;
