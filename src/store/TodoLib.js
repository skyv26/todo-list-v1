import LocalStore from './LocalStore';

const TodoLib = () => {
  class Todo extends LocalStore {
    constructor() {
      super();
      this.todoListArray = this.getLocalStorageData() ?? [];
      this.listSize = 0;
    }

    completedTaskDeleteHandler(completedTaskObj) {
      let temp;
      let raw = [...this.todoListArray];
      completedTaskObj.forEach((eachNum) => {
        temp = raw.filter((each) => each.index !== eachNum);
        raw = temp;
      });
      this.todoListArray = temp.map((each, indx) => {
        each.index = indx + 1;
        return each;
      });
      this.setLocalStorageData(this.todoListArray);
    }

    updateTodo(todoId, dataObj = {}, removable = true) {
      let temp;
      if (removable) {
        temp = this.todoListArray.filter((eachTodo) => eachTodo.index !== todoId);
        this.todoListArray = temp.map((each, indx) => {
          each.index = indx + 1;
          return each;
        });
      } else {
        temp = this.todoListArray.filter((eachTodo) => {
          if (eachTodo.index === todoId) {
            Object.keys(dataObj).forEach((key) => {
              eachTodo[key] = dataObj[key];
            });
          }
          return eachTodo;
        });
        this.todoListArray = temp;
      }
      this.setLocalStorageData(this.todoListArray);
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
};

export default TodoLib();