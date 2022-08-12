import TodoLib from './store/TodoLib';
import ListWrapper from './components/main/ListWrapper';

const form = document.querySelector('.todo__main-form');
const listContainer = document.querySelector('.todo__main-taskContainer');
const getAllCheckBox = document.querySelectorAll('.todo__list-status');

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

  getAllCheckBox.forEach((each) => {
    each.addEventListener('change', (e) => {
      const newObj = {};
      if (e.target.checked) {
        newObj.completed = true;
        each.checked = true;
      } else {
        newObj.completed = false;
        each.checked = false;
      }
      this.update(newObj, Number(each.id.split('-')[1]));
    });
  });
};

export default App();
