---
title: MSRect
rels:
  - GKRect
  - MSLayer
---

## Overview

Represents a size and position of a layer on the screen. See [MSLayer](/docs/MSLayer) for more information


## Methods & Attributes

### x, y, width, height

Base attributes. All floats

### addX, addY, addWidth, addHeight, subtractX, subtractY, subtractWidth, subtractHeight

Adding to any of the base attributes

### midX, midX, maxX, minY, midY, maxY

For each axis the minimum, middle and maximum of the rectangle. All floats

### topLeft, topRight, topMiddle, bottomleft, bottomRight, bottomMiddle, middleLeft, middleRight, mid

All point structures, representing a corner each

### constrainProportions

### calculateProportions

### proportions

Keeps the width and height proportionally the same. the -constrainProportions returns a boolean. -proportions returns a float and calculateProportions does exactly what it says on the tin.

### GKRect

Returns a [GKRect](/docs/GKRect) representation of the rectangle
