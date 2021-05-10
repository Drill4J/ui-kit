import { Component } from 'react';
export declare class Portal<Props extends {
    rootElementId: string;
}> extends Component<Props> {
    element: HTMLDivElement;
    rootElementById: HTMLElement | null;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): import("react").ReactPortal;
}
