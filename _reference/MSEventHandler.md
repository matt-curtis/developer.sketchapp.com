---
title: MSEventHandler
---

## Introduction

```javascript
var handler = context.document.eventHandlerManager().normalHandler();
```

## Methods & Attributes

### scrollOrigin:, setScrollOrigin:(NSPoint)scrollOrigin

### selectToolbarItemWithIdentifier:(NSString)identifier

### writeLayers:(MSLayerArray)layers toPasteboard:(NSPasteboard)pasteboard

### readFromPasteboard:(NSPasteboard)pasteboard

### currentPage:

### copy:(id)sender
### paste:(id)sender
### pasteOverSelection:(id)sender
### pasteHere:(id)sender
### duplicate:(id)sender
### delete:(id)sender

### currentMousePointInCanvasCoordinates:

### (NSArray)duplicateSelectedLayers:(BOOL)fromDrag
### (NSArray)duplicateSelectedLayersInGroup:(NSArray)layers fromDrag:(BOOL)fromDrag
### (MSLayer)duplicateLayer:(MSLayer)layer toIndex:(NSUInteger)index fromDrag:(BOOL)fromDrag

### (NSRect)selectedRect:
### (NSArray)selectedLayers:

### (NSPoint)convertPointFromScreenCoordinates:(NSPoint)mouse inGroup:(MSLayerGroup)group
### (NSPoint)mouseInScreenCoordinates

### (CGFloat)zoomValue

### undo:, redo:

### changeColor:
