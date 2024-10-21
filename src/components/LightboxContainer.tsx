import { ReactElement, createElement, useEffect, useState } from "react";
import Lightbox, { SlideImage, SlotStyles } from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export interface LightboxContainerProps {
    slides: SlideImage[];
    carouselPreload: number;
    thumbnailPosition: "top" | "bottom" | "start" | "end";
    thumbnailsHidden: boolean;
    thumbnailsShowToggle: boolean;
    thumbnailWidth: number;
    thumbnailHeight: number;
    thumbnailBorder: number;
    thumbnailBorderRadius: number;
    thumbnailPadding: number;
    thumbnailGap: number;
    thumbnailBorderColor: string;
    thumbnailActiveBorderColor: string;
    onClose: () => void;
}

export function LightboxContainer(props: LightboxContainerProps): ReactElement {
    const [openState, setOpenState] = useState<"initial" | "open" | "closed">("initial");
    useEffect(() => {
        if (openState === "initial") {
            setTimeout(() => {
                setOpenState("open");
            }, 100);
        }
    }, [openState]);
    const styles: SlotStyles = {
        root: {
            "--yarl__thumbnails_thumbnail_border_color": props.thumbnailBorderColor,
            "--yarl__thumbnails_thumbnail_active_border_color": props.thumbnailActiveBorderColor
        }
    };
    if (props.slides.length === 1) {
        styles.navigationNext = { color: "transparent" };
        styles.navigationPrev = { color: "transparent" };
    }
    return (
        <div className="lightbox-web-widget">
            <Lightbox
                open={openState === "open"}
                close={() => {
                    setOpenState("closed");
                    props.onClose();
                }}
                // carousel={{ preload }}
                slides={props.slides}
                carousel={{ finite: true, preload: props.carouselPreload }}
                plugins={[Captions, Fullscreen, Thumbnails, Zoom]}
                thumbnails={{
                    position: props.thumbnailPosition,
                    width: props.thumbnailWidth,
                    height: props.thumbnailHeight,
                    border: props.thumbnailBorder,
                    borderRadius: props.thumbnailBorderRadius,
                    padding: props.thumbnailPadding,
                    gap: props.thumbnailGap,
                    hidden: props.thumbnailsHidden,
                    showToggle: props.thumbnailsShowToggle
                }}
                styles={styles}
            />
        </div>
    );
}
