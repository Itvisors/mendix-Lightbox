/**
 * This file was generated from LightboxWebWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, FileValue, ListValue, ListExpressionValue } from "mendix";

export type ImageTypeEnum = "mendixImage" | "url";

export type ThumbnailPositionEnum = "bottom" | "top" | "start" | "end";

export interface LightboxWebWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    ds: ListValue;
    imageType: ImageTypeEnum;
    dsUrl?: ListExpressionValue<string>;
    dsTitleAttribute?: ListExpressionValue<string>;
    dsDescriptionAttribute?: ListExpressionValue<string>;
    startWithImage?: DynamicValue<FileValue>;
    startWithUrl?: DynamicValue<string>;
    onCloseAction?: ActionValue;
    maxZoomPixelRatio: number;
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
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    ds: {} | { caption: string } | { type: string } | null;
    imageType: ImageTypeEnum;
    dsUrl: string;
    dsTitleAttribute: string;
    dsDescriptionAttribute: string;
    startWithImage: string;
    startWithUrl: string;
    onCloseAction: {} | null;
    maxZoomPixelRatio: number | null;
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
