import './Operation.scss';

import Button from '../elements/Button';
import Wrapper from '../elements/Wrapper';
import TodoLib from '../../store/TodoLib';
import ListWrapper from './ListWrapper';

const Operation = () => {
  const div = Wrapper({
    className: 'todo__main-OperationalWrapper',
  });

  const button = Button({
    className: 'todo__main-OperationalWrapper_btn',
    textContent: 'Clear all completed',
    onclick: (e) => {
      e.preventDefault();
      const listContainer = document.querySelector('.todo__main-taskContainer');
      const completedTaskArr = [];
      if (listContainer.children < 1) {
        return;
      }
      const getAllCheckBox = document.querySelectorAll('.todo__list-status');
      getAllCheckBox.forEach((each) => {
        if (each.checked) {
          const getId = Number(each.id.split('-')[1]);
          completedTaskArr.push(getId);
        }
      });

      TodoLib.completedTaskDeleteHandler(completedTaskArr);
      listContainer.textContent = '';
      TodoLib.todoListArray.forEach((each) => {
        listContainer.appendChild(ListWrapper(each));
      });
    },
  });

  div.append(button);
  return div;
};

export default Operation;