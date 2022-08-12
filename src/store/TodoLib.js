import LocalStore from './LocalStore';

const TodoLib = () => {
  class Todo extends LocalStore {
    constructor() {
      super();
      this.todoListArray = [];
      this.listSize = 0;
    }

    getUniqueId() {
      this.listSize += 1;
      return this.listSize;
    }

    createTodoObj(text) {
      return { description: text, completed: false, index: this.getUniqueId() };
    }

    addTodo(todoString) {
      this.todoListArray.unshift(this.createTodoObj(todoString));
      this.setLocalStorageData(this.todoListArray);
      const temp = this.map((each, indx) => {
        each.index = indx + 1;
        return each;
      });
      this.todoListArray = temp;
      this.todoCollector.sort((a, b) => a.index - b.index);
      this.listSize = this.todoCollector.length;
    }
  }

  return new Todo();
}

export default TodoLib;