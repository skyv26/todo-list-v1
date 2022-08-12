import LocalStore from './LocalStore';

const TodoLib = () => {
  class Todo extends LocalStore {
    constructor() {
      super();
      this.todoListArray = this.getLocalStorageData() ?? [];
      this.listSize = 0;
    }

    getUniqueId() {
      return this.todoListArray.length + 1;
    }

    createTodoObj(text) {
      return { description: text, completed: false, index: this.getUniqueId() };
    }

    addTodo(todoString) {
      this.todoListArray.push(this.createTodoObj(todoString));
      this.setLocalStorageData(this.todoListArray);
      const temp = this.todoListArray.map((each, indx) => {
        each.index = indx + 1;
        return each;
      });
      this.todoListArray = temp;
      this.todoListArray.sort((a, b) => a.index - b.index);
    }
  }

  return new Todo();
}

export default TodoLib();