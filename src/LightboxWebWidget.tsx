import { ReactElement, createElement, useCallback } from "react";
import { LightboxContainer } from "./components/LightboxContainer";

import { LightboxWebWidgetContainerProps } from "../typings/LightboxWebWidgetProps";

import "./ui/LightboxWebWidget.css";

export function LightboxWebWidget(props: LightboxWebWidgetContainerProps): ReactElement {
    const { onCloseAction } = props;
    const onCloseHandler = useCallback(() => {
        if (onCloseAction && onCloseAction.canExecute && !onCloseAction.isExecuting) {
            onCloseAction.execute();
        }
    }, [onCloseAction]);
    return <LightboxContainer dsItems={props.ds.items} onClose={onCloseHandler} />;
}
