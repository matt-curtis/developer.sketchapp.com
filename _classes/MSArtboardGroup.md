---
layout: class
title:  "MSArtboardGroup"
inherits:
  - MSLayerGroup
rels:
  - MSRect
  - MSRulerData
---

## Overview

Since Sketch 2.2, an Artboard is just special kind of layer.

## Methods & Attributes

### frame

An [MSRect](MSRect.html) which determines its position in the canvas.

### layers

To see which layers are inside the Artboard, use the layers property.

### horizontalRulerData & verticalRulerData

Both return the [MSRulerData](MSRulerData.html) object used to store rulers for their respective axes. Note that this data is only used on the artboard itself.

## Examples

### Export current artboard

To export an artboard you can use something like the following code:

    var doc = context.document;
    var artboard = [[[doc currentPage] artboards] firstObject];
    [doc saveArtboardOrSlice:artboard toFile:"~/desktop/test.png"];
