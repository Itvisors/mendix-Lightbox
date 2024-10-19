## LightboxWebWidget
Show images in a lightbox with pan/zoom and captions.

This widget is a wrapper around [Yet Another React Lightbox](https://yet-another-react-lightbox.com/)

## Features
- Show one or more images in a lightbox allow the user to navigate between images
- Zoom and pan the image
- Optionally show a title and description for each image

## Limitations
- This widget does not work well in a default layout. Use a layout without scrollcontainer

## Usage
- Place the widget on a separate page
- The page must use a layout without scroll container, create one if necessary
- Configure the onClose action to close the page, or call a microflow/nanoflow that at least closes the current page
- Open the page, the lightbox will appear

