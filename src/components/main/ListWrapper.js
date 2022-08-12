import List from '../elements/List';
import Input from '../elements/Input';
import Label from '../elements/Label';
import Span from '../elements/Span';
import Wrapper from '../elements/Wrapper';
import FontAwsome from '../elements/FontAwsome';

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
  });

  const label = Label({
    for: `task-${props.index}`,
    className: 'todo__task-placeholder',
  });

  const span = Span({
    className: 'strike',
    textContent: `${props.description}`,
  });

  const textPlaceHolder = Input({
    type: 'text',
    className: 'update-todo__input',
    name: label.for,
    id: label.for,
  });

  const div = Wrapper({
    className: 'todo__mode',
  });

  const i = FontAwsome({
    className: 'fontawesome-icon fa-solid fa-ellipsis-vertical ellipse',
    id: `todo__mode-${props.index}`,
  });

  label.append(span, textPlaceHolder);
  div.append(i);
  li.append(checkbox, label, div);
  return li;
};

export default ListWrapper;