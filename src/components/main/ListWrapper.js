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

  const i = FontAwsome({
    className: 'fontawesome-icon fa-solid fa-ellipsis-vertical ellipse',
    id: `todo__mode-${props.index}`,
    onclick: () => {
      if (i.className.includes('trash')) {
        i.className = 'fontawesome-icon fa-solid fa-ellipsis-vertical ellipse';
        li.remove();
        TodoLib.updateTodo(props.index);
      }
    },
  });

  const label = Label({
    htmlFor: `task-${props.index}`,
    className: 'todo__task-placeholder',
    onclick: (e) => {
      e.preventDefault();
      const childInput = label.children[1];
      const getAllList = document.querySelectorAll('.todo__list');

      getAllList.forEach((each) => {
        each.classList.remove('updateMode');
        each.lastChild.lastChild.className = 'fontawesome-icon fa-solid fa-ellipsis-vertical ellipse';
      });
      childInput.classList.add('update');
      childInput.value = label.textContent.trim();
      childInput.focus();
      li.classList.add('updateMode');
      i.className = 'fontawesome-icon fa-solid fa-trash-can trash';
      i.style.cursor = 'pointer';
    },
  });

  const span = Span({
    className: 'strike',
    textContent: `${props.description}`,
  });

  const textPlaceHolder = Input({
    type: 'text',
    className: 'update-todo__input',
    name: label.htmlFor,
    id: label.htmlFor,
    onkeydown: (e) => {
      if (e.key.toLowerCase() === 'enter') {
        i.className = 'fontawesome-icon fa-solid fa-ellipsis-vertical ellipse';
        li.classList.remove('updateMode');
        textPlaceHolder.classList.remove('update');
      }
    },
    onchange: () => {
      span.textContent = textPlaceHolder.value;
      TodoLib.updateTodo(props.index, { description: span.textContent }, false);
    },
  });

  const checkbox = Input({
    className: 'todo__list-status',
    type: 'checkbox',
    checked: props.completed,
    id: `todo__task_checkbox-${props.index}`,
    ariaLabel: 'mark the task as completed or uncompleted',
    onchange: () => {
      if (checkbox.checked) {
        checkbox.classList.add('uncompleted');
        i.className = 'fontawesome-icon fa-solid fa-ellipsis-vertical ellipse';
        li.classList.remove('updateMode');
        textPlaceHolder.classList.remove('update');
      }
      TodoLib.updateTodo(props.index, { completed: checkbox.checked }, false);
    },
  });

  const div = Wrapper({
    className: 'todo__mode',
  });

  label.append(span, textPlaceHolder);
  div.append(i);
  li.append(checkbox, label, div);
  return li;
};

export default ListWrapper;