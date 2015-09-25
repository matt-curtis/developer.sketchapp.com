---
title: MSDocument
date: 2015-09-25
author: Ale Muñoz
rels:
  - MSContentDrawView
---

## Overview

MSDocument represents a document object. The current document can be accessed using the `context.document` variable defined by the preamble.

## Methods & Attributes

### MSDocument.currentDocument()

Returns the current document. It is equivalent to `context.document`.

### selectedLayers()

Returns an NSArray of selected layers in the document. To get the selection in the current document, it's easier to just use `context.selection`, but if you need to work with selected layers in multiple documents, `selectedLayers` is the way to go:

```JavaScript
// Assume currentDoc and anotherDoc are defined elsewhere
var currentDocSelection = currentDoc.selectedLayers()
var anotherDocSelection = anotherDoc.selectedLayers()

if (currentDocSelection.count() == anotherDocSelection.count()) {
  // Do something if the number of selected layers on each doc is the same
}
```

See also [MSContentDrawView](/docs/MSContentDrawView) if you need more precise zooming control.

### currentPage:

Returns an [MSPage](/docs/MSPage/) object, representing the current page.

### findCurrentArtboardGroup:

Returns an [MSArtboardGroup](/docs/MSArtboardGroup/) object, representing the current Artboard.

### export:

Takes you to the the export tool. Pass nil as the argument.

### showMessage:

Pas a string to be displayed at the top of the canvas momentarily. The same method used for displaying the current zoom level and other tips.

### artboards

Both return an array representing the artboards and slices on the current page. Artboards are of type [MSArtboardGroup](/docs/MSArtboardGroup) and slices are of [MSSliceLayer](/docs/MSSliceLayer) type.

### children

Returns an array containing all layers (including slices and artboards) on the current page.

### pages

Returns an array of all pages in the document. Each page is an [MSPage](/docs/MSPage) object.

### askForUserInput:initialValue:

Asks for user input and returns the value they chosen. The first argument is the label for the dialog panel, the second argument can be used to provide a default value. See the [User Input & Feedback](../02-common-tasks/05.html) section for examples.

### saveArtboardOrSlice:toFile:

Saves an area of the canvas to an image file.
The first argument is a GKRect, MSSliceLayer or MSArtboardGroup and the image gets written to the file specified in the second argument. The file format is derived from the extension.

### currentView:

Returns an [MSContentDrawView](/docs/MSContentDrawView) subclass that represents the visible Canvas.

### toolbar:

Returns an MSToolbar object.

### scrollOrigin:

Returns an NSPoint with the current page's scroll origin.

### setScrollOrigin:(NSPoint)origin

Sets the scroll origin of the current page.

### zoomValue:

Returns a CGFloat representing the document's zoom value (1.0 = 100%, 2.0 = 200%, etc…)

### setZoomValue:(CGFloat)zoomValue

Zoom the document to the specified zoomValue.

```JavaScript
context.document.setZoomValue(2.0) // Sets the zoom level to 200%
```

### selectedLayersOfClass:(Class)className

Returns an NSArray of selected layers of class `className`:

```JavaScript
// Get all bitmap layers in the selection
context.document.selectedLayersOfClass(MSBitmapLayer)
```

### allExportableLayers:

Returns an NSArray of all the exportable layers in the document (this includes slices and layers & Artboards set to export).

### exportPDFBook:

Equivalent to the File › Export Artboards as PDF menu item. Exports a multipage PDF, with a page for each artboard in all pages. Requires a `nil` argument. If you want to export just some pages, you can use:

```JavaScript
MSPDFBookExporter.exportPages(pageArray)
```

### addBlankPage

Adds a new [MSPage](/docs/MSPage/) object to the document, inserting it below the current page, copying its grid and ruler position too.

### removePage:(MSPage)page

Removes the given page from the document. The argument is an [MSPage](/docs/MSPage) object.

### addLayer:(MSLayer)layer

Adds `layer` to the document.

### close()

Closes the document immediately, without asking for user confirmation. Keep in mind that all unsaved changes will be lost!
