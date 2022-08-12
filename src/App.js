import TodoLib from './store/TodoLib';
import ListWrapper from './components/main/ListWrapper';

const form = document.querySelector('.todo__main-form');
const listContainer = document.querySelector('.todo__main-taskContainer');

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
};

export default App();
