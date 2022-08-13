import Element from '../../utils/Element';

const Button = (props) => Element({
  component: 'button',
  ...props,
});

export default Button;