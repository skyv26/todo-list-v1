import './index.scss';
import App from './App';

App();
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

// todosTaskList.forEach((each) => {
//   listContainer.appendChild(ListWrapper(each));
// });

refreshButton.addEventListener('click', () => {
  window.location.reload();
});