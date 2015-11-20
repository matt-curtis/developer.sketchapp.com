---
title: MSBitmapLayer
inherits:
  - MSLayer
rels:
  - MSLayerGroup
  - MSImageData
  - MSImageCollection
---

## Methods & Attributes

### initWithFrame:(NSRect)frame image:(MSImageProxy)image

See [MSImageProxy](/reference/MSImageProxy/)

### reduceImageSize:

Equivalent to the *Layer › Image › Reduce Image Size* menu option.

### hasNineSliceEnabled:

Returns `1` if the bitmap has 9-slice mode enabled, `0` otherwise.

### (NSImage)NSImage:

Returns an NSImage representation of the bitmap.