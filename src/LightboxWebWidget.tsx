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

    const { startWithImage } = props;

    const startIndex = useMemo(() => {
        if (!startWithImage || !startWithImage.value?.uri) {
            return 0;
        }
        // uri: http://localhost:8080/file?guid=1407374883553546&changedDate=1729331248956&name=IMG_4355.jpg
        // Grab the guid parameter from it
        const url = new URL(startWithImage.value.uri);
        const startWithGuid = url.searchParams.get("guid");
        if (!startWithGuid) {
            return 0;
        }
        const slideIndex = slides.findIndex(element => element.src.indexOf(startWithGuid) >= 0);
        if (slideIndex > 0) {
            return slideIndex;
        } else {
            return 0;
        }
    }, [slides, startWithImage]);

    if (slides.length === 0) {
        return <div />;
    }

    return (
        <LightboxContainer
            slides={slides}
            index={startIndex}
            onClose={onCloseHandler}
            carouselPreload={props.carouselPreload > 0 ? props.carouselPreload : slides.length}
            thumbnailPosition={props.thumbnailPosition}
            thumbnailWidth={props.thumbnailWidth}
            thumbnailHeight={props.thumbnailHeight}
            thumbnailBorder={props.thumbnailBorder}
            thumbnailBorderRadius={props.thumbnailBorderRadius}
            thumbnailPadding={props.thumbnailPadding}
            thumbnailGap={props.thumbnailGap}
            thumbnailsHidden={!props.showThumbnails}
            thumbnailsShowToggle={props.thumbnailsShowToggle}
            thumbnailBorderColor={props.thumbnailBorderColor}
            thumbnailActiveBorderColor={props.thumbnailActiveBorderColor}
        />
    );
}
