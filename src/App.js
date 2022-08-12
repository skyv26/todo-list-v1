import TodoLib from "./store/TodoLib.js";

TodoLib.addTodo({
  description: 'hello',
});

const App = () => {
  console.log(TodoLib.listSize);
  return true;
}

export default App();
