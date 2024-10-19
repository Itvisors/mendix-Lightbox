import { ReactElement, createElement, useEffect, useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export interface LightboxContainerProps {
    slides: SlideImage[];
    onClose: () => void;
}

export function LightboxContainer({ slides, onClose }: LightboxContainerProps): ReactElement {
    const [openState, setOpenState] = useState<"initial" | "open" | "closed">("initial");
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
                // carousel={{ preload }}
                slides={slides}
                carousel={{ finite: true, preload: 5 }}
                plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
                thumbnails={{
                    position: "bottom",
                    width: 120,
                    height: 80,
                    border: 1,
                    borderRadius: 4,
                    padding: 4,
                    gap: 16,
                    showToggle: true
                }}
            />
        </div>
    );
}
