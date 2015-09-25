---
title: NSColor
date: 2015-09-23
author: Ale Muñoz
rels:
  - MSColor
---

## Overview

Sketch uses [MSColor](/docs/MSColor/) instances to represent colors internally, but NSColor is used in some places. On top of the default [NSColor methods](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/ApplicationKit/Classes/NSColor_Class/), Sketch adds the following methods:

## Methods & Attributes

### colorWithGray:(float)gray

Creates a new color with a gray component (0 is black, 1 is white):

```objective-j
var grayColor = NSColor.colorWithGray(0.5)
```

### colorWithGray:(float)gray alpha:(float) alpha

Creates a new color with a gray component, with alpha:

```objective-j
var grayColor = NSColor.colorWithGray_alpha(0.5, 0.2)
```

### fuzzyIsEqual:(NSColor)color

Used to compare two NSColor instances. Returns `1` if both instances are similar (i.e: their color components differ by less than 0.001), `0` otherwise.

```JavaScript
var grayOne = NSColor.colorWithGray(0.8)
var grayTwo = NSColor.colorWithGray(0.8001)

log(grayOne.fuzzyIsEqual(grayTwo)) // 1
```

### isWhite

Returns `1` if the color is white (or close enough), `0` otherwise.

```objective-j
var whiteColor = NSColor.colorWithGray(1.0)
var blackColor = NSColor.colorWithGray(0.0)

log(whiteColor.isWhite()) // 1
log(blackColor.isWhite()) // 0
```
