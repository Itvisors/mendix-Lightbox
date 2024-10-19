import { ReactElement, createElement, useCallback } from "react";
import { LightboxContainer } from "./components/LightboxContainer";

import { LightboxWebWidgetContainerProps } from "../typings/LightboxWebWidgetProps";

import "./ui/LightboxWebWidget.css";

export function LightboxWebWidget(props: LightboxWebWidgetContainerProps): ReactElement {
    const { ds, onCloseAction } = props;
    const onCloseHandler = useCallback(() => {
        if (onCloseAction && onCloseAction.canExecute && !onCloseAction.isExecuting) {
            onCloseAction.execute();
        }
    }, [onCloseAction]);
    if (!ds.items) {
        return <div />;
    }
    return <LightboxContainer dsItems={ds.items} onClose={onCloseHandler} />;
}
