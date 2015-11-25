---
title: MSDocument
date: 2015-09-25
author: Ale Muñoz
summary: MSDocument represents a document object. The current document can be accessed using the <code>context.document</code> variable defined by the preamble.
rels:
  - MSContentDrawView
---

MSDocument represents a document object. The current document can be accessed using the `context.document` variable defined by the preamble.

## Methods & Attributes

### currentDocument:

Returns the current document. It is equivalent to `context.document`.

### selectedLayers:, setSelectedLayers:(NSArray)selectedLayers

Gets / sets an NSArray of selected layers in the document. To get the selection in the current document, it's easier to just use `context.selection`, but if you need to work with selected layers in multiple documents, `selectedLayers` is the way to go:

```JavaScript
// Assume currentDoc and anotherDoc are defined elsewhere
var currentDocSelection = currentDoc.selectedLayers()
var anotherDocSelection = anotherDoc.selectedLayers()

if (currentDocSelection.count() == anotherDocSelection.count()) {
  // Do something if the number of selected layers on each doc is the same
}
```

See also [MSContentDrawView](/reference/MSContentDrawView/) if you need more precise zooming control.

### close:

Closes the document. No warnings are displayed to the user, so don't use it on unsaved documents!.

### (NSWindow)window:

Returns an instance of MSDocumentWindow, which is a subclass of [NSWindow](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/ApplicationKit/Classes/NSWindow_Class/).

### currentPage:, setCurrentPage:(MSPage)page

Get / set an [MSPage](/reference/MSPage/) object, representing the current page.

### findCurrentArtboardGroup:

Returns an [MSArtboardGroup](/reference/MSArtboardGroup/) object, representing the current Artboard.

### export:

Takes you to the the export tool. Pass nil as the argument.

### showMessage:

Pass a string to be displayed at the top of the canvas momentarily. The same method used for displaying the current zoom level and other tips.

### artboards:

Returns an NSArray representing the artboards and slices on the current page. Artboards are of type [MSArtboardGroup](/reference/MSArtboardGroup/) and slices are of [MSSliceLayer](/reference/MSSliceLayer/) type.

### children

Returns an array containing all layers (including slices and artboards) on the current page.

### (NSArray)pages:

Returns an array of all pages in the document. Each page is an [MSPage](/reference/MSPage/) object.

### askForUserInput:(NSString)label initialValue:(NSString)defaultString

Asks for user input and returns the value they chosen. The first argument is the label for the dialog panel, the second argument can be used to provide a default value. See the [User Input & Feedback](/code-examples/user-interaction/) section for examples.

### saveArtboardOrSlice:toFile:

Saves an area of the canvas to an image file.
The first argument is a GKRect, MSSliceLayer or MSArtboardGroup and the image gets written to the file specified in the second argument. The file format is derived from the extension.

### (MSContentDrawView)currentView:

Returns an [MSContentDrawView](/reference/MSContentDrawView/) subclass that represents the visible Canvas.

### toolbar:

Returns an MSToolbar object.

### (NSPoint)scrollOrigin:

Returns an NSPoint with the current page's scroll origin.

### setScrollOrigin:(NSPoint)origin

Sets the scroll origin of the current page.

### (CGFloat)zoomValue:

Returns a CGFloat representing the document's zoom value (1.0 = 100%, 2.0 = 200%, etc…)

### setZoomValue:(CGFloat)zoomValue

Zoom the document to the specified zoomValue.

```JavaScript
context.document.setZoomValue(2.0) // Sets the zoom level to 200%
```

### (NSArray)selectedLayersOfClass:(Class)aClass

Returns an NSArray of selected layers of class `className`:

```JavaScript
// Get all bitmap layers in the selection
context.document.selectedLayersOfClass(MSBitmapLayer)
```

### (NSArray)allExportableLayers:

Returns an NSArray of all the exportable layers in the document (this includes slices and layers & Artboards set to export).

### exportSliceLayers:(NSArray)sliceLayers

Exports the slices in the `sliceLayers` array.

### exportPDFBook:

Equivalent to the File › Export Artboards as PDF menu item. Exports a multipage PDF, with a page for each artboard in all pages. Requires a `nil` argument. If you want to export just some pages, you can use:

```JavaScript
MSPDFBookExporter.exportPages(pageArray)
```

### (BOOL)hasArtboards:

Returns `1` if the document has any artboard, `0` otherwise.

### toggleAlignmentGuides:

Requires a `nil` argument. Toggles the "Show Smart Guides" option in the View › Canvas menu.

### togglePixelLines:

Requires a `nil` argument. Toggles the "Show Pixels Grid" option in the View › Canvas menu.

### toggleArtboardShadow:

Requires a `nil` argument. Toggles the "Show Artboard Shadow" option in the View › Canvas menu.

### toggleSelection:

Requires a `nil` argument. Toggles the "Show Selection Handles" option in the View › Canvas menu.

### toggleLayerHighlight:

Requires a `nil` argument. Toggles the "Show Layer Highlight" option in the View › Canvas menu.

### toggleLayerInteraction:

Requires a `nil` argument. Toggles the "Show/Hide Layers in the List" option in the Layer List.

### toggleSliceInteraction:

Requires a `nil` argument. Toggles the "Show or Hide Slices in the List and the Document" option in the Layer List.

### currentHandler:

Returns an [MSEventHandler](/reference/MSEventHandler/) object.

### (MSRulerData)currentHorizontalRulerData:

Returns an [MSRulerData](/reference/MSRulerData/) object for the horizontal rulers.

### (MSRulerData)currentVerticalRulerData:

Returns an [MSRulerData](/reference/MSRulerData/) object for the vertical rulers.

### addBlankPage:

Adds a new [MSPage](/reference/MSPage/) object to the document, inserting it below the current page, copying its grid and ruler position too.

### removePage:(MSPage)page

Removes the given page from the document. The argument is an [MSPage](/reference/MSPage/) object.

### addLayer:(MSLayer)layer

Adds `layer` to the document.

### deleteArtboards:(NSArray)array

Deletes the given `array` of [MSArtboardGroup](/reference/MSArtboardGroup/) objects from the page.

### reloadInspector:

It, well, reloads the inspector :)

### gridSettings:

Requires a `nil` argument. Opens the 'View › Canvas › Grid Settings…' sheet.

### layoutSettings:

Requires a `nil` argument. Opens the 'View › Canvas › Layout Settings…' sheet.

### copyStyle:

Requires a `nil` argument. Copies the style of the currently selected layer.

### pasteStyle:

Requires a `nil` argument. Pastes a copied style to the currently selected layer.

### copyCSSAttributes:

Requires a `nil` argument. Copies the CSS attributes of the selected object to the clipboard.

### toggleRulers:

Toggles rulers on and off.

### isRulersVisible:

Returns `1` if rulers are visible, `0` otherwise.

### colorMagnifierAction:

Requires a `nil` argument. Equivalent to choosing the 'Edit › Pick Color' menu option.

### toggleLayerListVisibility:

Requires a `nil` argument. Toggles the visibility of the Layer List on the left.

### toggleInspectorVisibility:

Requires a `nil` argument. Toggles the visibility of the Inspector on the right.

### toggleLayersAndInspectorVisibility:

Requires a `nil` argument. Toggles the visibility of both the Layer List and the Inspector.
