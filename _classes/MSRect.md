---
title: MSRect
rels:
  - GKRect
  - MSLayer
---

## Overview

Represents a size and position of a layer on the screen. See [MSLayer]({{site.baseurl}}/docs/MSLayer) for more information


## Methods & Attributes

### x, y, width, height

Base attributes. All floats

### addX, addY, addWidth, addHeight, subtractX, subtractY, subtractWidth, subtractHeight

Adding to any of the base attributes

### midX, midX, maxX, minY, midY, maxY

For each axis the minimum, middle and maximum of the rectangle. All floats

### topLeft, topRight, topMiddle, bottomleft, bottomRight, bottomMiddle, middleLeft, middleRight, mid

All point structures, representing a corner each

### expandBy:(CGFloat);

Make the rectangle smaller or larger by adding to each side, or scale the rectangle.

For example, to add 2 pixels around a rectangle, do this (assuming you have a rectangle selected on the canvas):

```objective-j
var rectangle = context.selection[0],
    frame = [rectangle absoluteRect]

[frame expandBy:2]
```

### constrainProportions

### calculateProportions

### proportions

Keeps the width and height proportionally the same. the -constrainProportions returns a boolean. -proportions returns a float and calculateProportions does exactly what it says on the tin.

### GKRect

Returns a [GKRect]({{site.baseurl}}/docs/GKRect) representation of the rectangle
