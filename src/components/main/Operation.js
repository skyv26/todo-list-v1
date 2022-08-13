import './Operation.scss';

import Button from '../elements/Button';
import Wrapper from '../elements/Wrapper';
import TodoLib from '../../store/TodoLib';

const Operation = () => {
  const div = Wrapper({
    className: 'todo__main-OperationalWrapper',
  });

  const button = Button({
    className: 'todo__main-OperationalWrapper_btn',
    textContent: 'Clear all completed',
    onclick: () => {
      const getAllCheckBox = document.querySelectorAll('.todo__list-status');
      getAllCheckBox.forEach((each) => {
        if (each.checked) {
          const getId = Number(each.id.split('-')[1]);
          const getList = document.querySelector(`#list-${getId}`);
          TodoLib.updateTodo(getId);
          getList.remove();
        }
      });
    },
  });

  div.append(button);
  return div;
};

export default Operation;