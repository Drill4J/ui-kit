import { Component } from 'react';
import { createPortal } from 'react-dom';

export class Portal<Props extends { rootElementId: string }> extends Component<Props> {
  public element: HTMLDivElement;

  public rootElementById: HTMLElement | null;

  constructor(props: Props) {
    super(props);
    this.element = document.createElement('div');
    this.rootElementById = document.getElementById(props.rootElementId);
  }

  public componentDidMount() {
    if (this.rootElementById) {
      this.rootElementById.appendChild(this.element);
    }
  }

  public componentWillUnmount() {
    if (this.rootElementById) {
      this.rootElementById.removeChild(this.element);
    }
  }

  public render() {
    const { children } = this.props;
    return createPortal(children, this.element);
  }
}
