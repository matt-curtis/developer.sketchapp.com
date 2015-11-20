---
title: MSArtboardGroup
summary: Since Sketch 2.2, an Artboard is just special kind of layer.
inherits:
  - MSLayerGroup
rels:
  - MSRect
  - MSRulerData
---



Since Sketch 2.2, an Artboard is just special kind of layer.

## Methods & Attributes

### setName:(NSString)name

Sets the name of the Artboard.

### rulerBase:, setRulerBase:(NSPoint)rulerBase

Get / set the ruler base for an Artboard (that is, the position where the (0,0) point of the ruler is, in canvas coordinates). Since the rulers can be dragged in Sketch, the (0,0) point is not necessarily the same as the (0,0) point of an Artboard.

If an Artboard is on x:100, y:100 on the canvas, `rulerBase` would be a point at (100,100):

```JavaScript
var doc = context.document
var artboard = doc.currentPage().currentArtboard()

log(artboard.rulerBase()) // CGPoint { x = 100, y = 100 }
```

### hasGuides:

Returns `1` if the Artboard has guides, `0` otherwise.

### slice:

Returns an [MSSliceLayer](/docs/MSSliceLayer/) for the Artboard.

### frame

An [MSRect](/docs/MSRect/) which determines its position in the canvas.

### layers

To see which layers are inside the Artboard, use the layers property.

### horizontalRulerData & verticalRulerData

Both return the [MSRulerData](/docs/MSRulerData/) object used to store rulers for their respective axes. Note that this data is only used on the artboard itself.

## Examples

### Export current artboard

To export an artboard you can use something like the following code:

```JavaScript
var doc = context.document
var artboard = doc.currentPage().artboards().firstObject()
doc.saveArtboardOrSlice_toFile(artboard,"~/desktop/test.png")
```
