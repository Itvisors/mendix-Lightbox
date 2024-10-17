import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { LightboxWebWidgetContainerProps } from "../typings/LightboxWebWidgetProps";

import "./ui/LightboxWebWidget.css";

export function LightboxWebWidget({ sampleText }: LightboxWebWidgetContainerProps): ReactElement {
    return <HelloWorldSample sampleText={sampleText ? sampleText : "World"} />;
}
