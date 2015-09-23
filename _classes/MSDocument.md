---
title: MSDocument
rels:
  - MSContentDrawView
---

## Overview

MSDocument represents the current document and can be accessed using the `doc` variable defined by the preamble.

## Methods & Attributes

### setZoomValue

Zoom the document. 1.0 represents actual size, 2.0 means 200% etc.

```objective-j
[doc setZoomValue:2.0] // Sets the zoom level to 200%
```

See also [MSContentDrawView]({{site.baseurl}}/docs/MSContentDrawView) if you need more precise zooming control.

### export:

Takes you to the the export tool. Pass nil as the argument.

### exportPDFBook:

A nice method not exposed in the UI at the moment; exports each slice on each page to a multi-page PDF file. Pass nil as the argument.

### showMessage:

Pas a string to be displayed at the top of the canvas momentarily. The same method used for displaying the current zoom level and other tips.

### artboards

Both return an array representing the artboards and slices on the current page. Artboards are of type [MSArtboardGroup]({{site.baseurl}}/docs/MSArtboardGroup) and slices are of [MSSliceLayer]({{site.baseurl}}/docs/MSSliceLayer) type.

### children

Returns an array containing all layers (including slices and artboards) on the current page.

### pages

Returns an array of all pages in the document. Each page is an [MSPage]({{site.baseurl}}/docs/MSPage) object.

### askForUserInput:initialValue:

Asks for user input and returns the value they chosen. The first argument is the label for the dialog panel, the second argument can be used to provide a default value. See the [User Input & Feedback](../02-common-tasks/05.html) section for examples.

### saveArtboardOrSlice:toFile:

Saves an area of the canvas to an image file.
The first argument is a GKRect, MSSliceLayer or MSArtboardGroup and the image gets written to the file specified in the second argument. The file format is derived from the extension.

### currentView

Returns an [MSContentDrawView]({{site.baseurl}}/docs/MSContentDrawView) subclass that represents the visible Canvas.

### addBlankPage

Adds a new [MSPage]({{site.baseurl}}/docs/MSPage) object to the document, inserting it below the current page, copying its grid and ruler position too.

Available as of beta 184 / version 2.2.5

### removePage:

Removes the given page from the document. The argument is an [MSPage]({{site.baseurl}}/docs/MSPage) object.

Available as of beta 184 / version 2.2.5

### allExportableLayers

Returns an array of all exportable layers in the document.
