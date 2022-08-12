class Element {
  constructor(componentName, className) {
    this.component = document.createElement(componentName);
    this.className = className;
  }

  getComponent(withAriaLabel = false) {
    this.component.className = this.className;
    if (withAriaLabel) {
      this.component.ariaLabel='';
    }
    return this.component;
  }
}

export default Element;