---
title: MSRulerData
rels:
  - MSPage
  - MSArtboardGroup
---

## Overview

Stores the guides used on its ruler. [MSPage](/docs/MSPage) and [MSArtboardGroup](/docs/MSArtboardGroup) both return their ruler data using `horizontalRulerData` and `verticalRulerData`.

## Methods & Attributes

### addGuideWithValue:

Supply an integer value (measured from the origin of the ruler). Adds a new guide at the given value.

### numberOfGuides

Returns the number of guides on this ruler.

### guideAtIndex:

Returns the integer value of the given guide. The argument is a zero-based index value.

### removeGuideAtIndex:

Remove the guide at the given index.
