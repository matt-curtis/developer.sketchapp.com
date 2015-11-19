---
title: MSMaskWithShape
---

## Methods & Attributes

### (MSLayerGroup)createMaskForSingleBitmap:(MSBitmapLayer)bitmapLayer

Creates a new shape, uses it to mask `bitmapLayer`, and groups both, returning the group. For example, to mask a selected bitmap:

```javascript
var bitmap = context.selection[0]
MSMaskWithShape.createMaskForSingleBitmap(bitmap)
```

### (MSLayerGroup)createMaskWithShapeFromMultipleLayers:(MSLayerArray)layers

When passing an array of layers, uses the bottom-most, non-bitmap layer to mask the rest, and groups everything.
