import { ReactElement, createElement, useEffect, useState } from "react";
import { ObjectItem } from "mendix";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";

export interface LightboxContainerProps {
    dsItems: ObjectItem[];
    onClose: () => void;
}

export function LightboxContainer({ dsItems, onClose }: LightboxContainerProps): ReactElement {
    const [openState, setOpenState] = useState("initial");
    const slides = [];
    if (dsItems) {
        for (const dsItem of dsItems) {
            const url = "/file?guid=" + dsItem.id;
            slides.push({ src: url });
        }
    }
    useEffect(() => {
        if (openState === "initial") {
            setTimeout(() => {
                setOpenState("open");
            }, 100);
        }
    }, [openState]);
    return (
        <div>
            <Lightbox
                open={openState === "open"}
                close={() => {
                    setOpenState("closed");
                    onClose();
                }}
                slides={slides}
                plugins={[Captions, Fullscreen, Zoom]}
            />
        </div>
    );
}
