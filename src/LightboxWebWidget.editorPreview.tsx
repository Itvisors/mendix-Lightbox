import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { LightboxWebWidgetPreviewProps } from "../typings/LightboxWebWidgetProps";

export function preview({ sampleText }: LightboxWebWidgetPreviewProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText} />;
}

export function getPreviewCss(): string {
    return require("./ui/LightboxWebWidget.css");
}
