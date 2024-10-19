import { ReactElement, createElement, useCallback, useMemo } from "react";
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

    const { ds, dsTitleAttribute, dsDescriptionAttribute } = props;
    const slides = useMemo(() => {
        const result = [];
        if (ds.items) {
            for (const dsItem of ds.items) {
                const url = "/file?guid=" + dsItem.id;
                result.push({
                    src: url,
                    title: dsTitleAttribute?.get(dsItem)?.value,
                    description: dsDescriptionAttribute?.get(dsItem)?.value
                });
            }
        }
        return result;
    }, [ds.items, dsDescriptionAttribute, dsTitleAttribute]);

    if (slides.length === 0) {
        return <div />;
    }
    return <LightboxContainer slides={slides} onClose={onCloseHandler} />;
}
