interface Anchors {
    childrenTopPosition: number;
    childrenLeftPosition: number;
    childrenWidth: number;
    childrenHeight: number;
    messageHeight: number;
    messageWidth: number;
    offset: number;
}
export declare const getTooltipPosition: (tooltipPositionType: string, anchors: Anchors) => {
    top: string;
    left: string;
};
export {};
