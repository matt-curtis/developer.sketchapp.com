---
title: MSContentDrawView
rels:
  - MSDocument
---

## Overview

This object is canvas view. You can get to it via `[MSDocument currentView]`.
Many of the standard Cocoa actions work here as expected such as `cut:, copy:, paste:`

Each of these take argument that is not used further, so just supply `nil`.

## Methods & Attributes

### frame:

Returns a CGRect of the current view.

### zoomIn:, zoomOut:

Zooms in by 2x or out by the same amount.

For example, if your document is currently displayed at a 100% zoom, this will set the zoom to 200%:

```javascript
var view = context.document.currentView()
view.zoomIn()
```

### actualSize:

Zooms back to 100%.

```javascript
view.actualSize()
```

### centerRect:(NSRect)rect

Centers an arbitrary NSRect in the canvas.

To center the view on the selected object (equivalent to hitting the <kbd>⌘3</kbd> shortcut):

```javascript
var selected_object = context.selection[0],
    view = context.document.currentView()
view.centerRect(selected_object.rect())
```

### zoomToFitRect:(NSRect)rect

Zooms the canvas in or out and scrolls to fit supplied NSRect argument in the view.

As an example, if you want to fit the view to the selected object, you’d do:

```javascript
var selected_object = context.selection[0],
    view = context.document.currentView()
view.zoomToFitRect(selected_object.rect())
```

### refresh:

Refreshes the entire canvas, both the content and overlays.
