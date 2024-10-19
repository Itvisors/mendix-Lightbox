/**
 * This file was generated from LightboxWebWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, ListValue, ListExpressionValue } from "mendix";

export interface LightboxWebWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    ds: ListValue;
    dsTitleAttribute?: ListExpressionValue<string>;
    dsDescriptionAttribute?: ListExpressionValue<string>;
    onCloseAction?: ActionValue;
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
}
