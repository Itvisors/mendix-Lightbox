/**
 * This file was generated from LightboxWebWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, ListValue, ListExpressionValue } from "mendix";

export type ThumbnailPositionEnum = "bottom" | "top" | "start" | "end";

export interface LightboxWebWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    ds: ListValue;
    dsTitleAttribute?: ListExpressionValue<string>;
    dsDescriptionAttribute?: ListExpressionValue<string>;
    onCloseAction?: ActionValue;
    showThumbnails: boolean;
    thumbnailsShowToggle: boolean;
    thumbnailPosition: ThumbnailPositionEnum;
    thumbnailWidth: number;
    thumbnailHeight: number;
    thumbnailBorder: number;
    thumbnailBorderRadius: number;
    thumbnailPadding: number;
    thumbnailGap: number;
    thumbnailBorderColor: string;
    thumbnailActiveBorderColor: string;
    carouselPreload: number;
}

export interface LightboxWebWidgetPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    ds: {} | { caption: string } | { type: string } | null;
    dsTitleAttribute: string;
    dsDescriptionAttribute: string;
    onCloseAction: {} | null;
    showThumbnails: boolean;
    thumbnailsShowToggle: boolean;
    thumbnailPosition: ThumbnailPositionEnum;
    thumbnailWidth: number | null;
    thumbnailHeight: number | null;
    thumbnailBorder: number | null;
    thumbnailBorderRadius: number | null;
    thumbnailPadding: number | null;
    thumbnailGap: number | null;
    thumbnailBorderColor: string;
    thumbnailActiveBorderColor: string;
    carouselPreload: number | null;
}
