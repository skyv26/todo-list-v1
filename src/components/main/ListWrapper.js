import './ListWrapper.scss';

import List from '../elements/List';
import Input from '../elements/Input';
import Label from '../elements/Label';
import Span from '../elements/Span';
import Wrapper from '../elements/Wrapper';
import FontAwsome from '../elements/FontAwsome';
import TodoLib from '../../store/TodoLib';

const ListWrapper = (props) => {
  const li = List({
    className: 'space todo__list',
    draggable: true,
    id: `list-${props.index}`,
  });

  const checkbox = Input({
    className: 'todo__list-status',
    type: 'checkbox',
    checked: props.completed,
    id: `todo__task_checkbox-${props.index}`,
    ariaLabel: 'mark the task as completed or uncompleted',
    onchange: () => {
      if (checkbox.checkbox) {
        checkbox.classList.add('uncompleted');
      }
      TodoLib.updateTodo(props.index, { completed: checkbox.checked }, false);
    },
  });

  const label = Label({
    htmlFor: `task-${props.index}`,
    className: 'todo__task-placeholder',
    onclick: () => {
      const getTaskModeElement = document.querySelector(`#todo__mode-${props.index}`);
      const childInput = label.children[1];
      const getAllList = document.querySelectorAll('.todo__list');
      const getTodoInput = document.querySelectorAll('.update-todo__input');
      const getAllFontAwesomeIcon = document.querySelectorAll('.fontawesome-icon');

      getAllList.forEach((each) => each.classList.remove('updateMode'));
      getTodoInput.forEach((each) => each.classList.remove('update'));
      getAllFontAwesomeIcon.forEach((each) => {
        each.className = 'fontawesome-icon fa-solid fa-ellipsis-vertical ellipse';
      });
      childInput.classList.add('update');
      childInput.value = label.textContent.trim();
      childInput.focus();
      li.classList.add('updateMode');
      getTaskModeElement.className = 'fontawesome-icon fa-solid fa-trash-can trash';
      getTaskModeElement.style.cursor = 'pointer';
    },
  });

  const span = Span({
    className: 'strike uncompleted',
    textContent: `${props.description}`,
  });

  const textPlaceHolder = Input({
    type: 'text',
    className: 'update-todo__input',
    name: label.htmlFor,
    id: label.htmlFor,
    onkeydown: (e) => {
      const getTaskModeElement = document.querySelector(`#todo__mode-${props.index}`);
      if (e.key.toLowerCase() === 'enter') {
        getTaskModeElement.className = 'fontawesome-icon fa-solid fa-ellipsis-vertical ellipse';
        li.classList.remove('updateMode');
        textPlaceHolder.classList.remove('update');
      }
    },
    onchange: () => {
      span.textContent = textPlaceHolder.value;
      TodoLib.updateTodo(props.index, { description: span.textContent }, false);
    },
  });

  const div = Wrapper({
    className: 'todo__mode',
  });

  const i = FontAwsome({
    className: 'fontawesome-icon fa-solid fa-ellipsis-vertical ellipse',
    id: `todo__mode-${props.index}`,
    onclick: () => {
      if (i.className.includes('trash')) {
        li.remove();
        TodoLib.updateTodo(props.index);
      }
    },
  });

  label.append(span, textPlaceHolder);
  div.append(i);
  li.append(checkbox, label, div);
  return li;
};

export default ListWrapper;