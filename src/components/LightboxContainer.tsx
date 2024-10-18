import { ReactElement, createElement, useState } from "react";
import { ObjectItem } from "mendix";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";

export interface LightboxContainerProps {
    dsItems?: ObjectItem[];
    onClose: () => void;
}

export function LightboxContainer({ dsItems, onClose }: LightboxContainerProps): ReactElement {
    const [open, setOpen] = useState(false);

    if (!dsItems) {
        return <div />;
    }
    const slides = [];
    for (const dsItem of dsItems) {
        const url = "/file?guid=" + dsItem.id;
        slides.push({ src: url });
    }
    if (!open) {
        return (
            <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button>
        );
    }
    return (
        <div>
            <Lightbox
                open={open}
                close={() => {
                    setOpen(false);
                    onClose();
                }}
                slides={slides}
                plugins={[Captions, Fullscreen, Zoom]}
            />
        </div>
    );
}
