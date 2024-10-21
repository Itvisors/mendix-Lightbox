## LightboxWebWidget
Show images in a lightbox with pan/zoom and captions.

This widget is a wrapper around [Yet Another React Lightbox](https://yet-another-react-lightbox.com/)

## Features
- Show images in a lightbox allow the user to navigate between images
- Zoom and pan the image
- Optionally show a title and description for each image
- Can also be used as a single image viewer, allowing zoom and pan

## Limitations
- This widget does not work in a default layout. Use a layout without scrollcontainer
- The lightbox will always occupy the entire browser view area

## Usage
- Place the widget on a separate page, without any other content, do not use a layout grid
- The page must use a layout without scroll container, create one if necessary
- Configure the datasource, which must result in a list. However, it is perfectly fine to have a list of one image
- When the page receives a single image as parameter, use a nanoflow that creates a list with a single item. This avoids an additional server roundtrip
- Configure the onClose action to close the page, or call a microflow/nanoflow that at least closes the current page
- Open the page, the lightbox will appear

