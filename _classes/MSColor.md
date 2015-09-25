---
title: MSColor
date: 2015-09-25
author: Ale Muñoz
---

## Overview

MSColor is used to represent color instances internally.

## Methods & Attributes

### whiteColor:

Returns a white MSColor instance.

### blackColor:

Returns a black MSColor instance.

### isEqual:(MSColor)color

Returns `1` is both color instances are equal, `0` otherwise.

### colorWithRed:(CGFloat)red green:(CGFloat)green blue:(CGFloat)blue alpha:(CGFloat)alpha

### colorWithHue:(CGFloat)hue saturation:(CGFloat)saturation brightness:(CGFloat)brightness alpha:(CGFloat)alpha

### colorWithNSColor:(NSColor)color

Creates an MSColor instance from an [NSColor](/docs/NSColor/)

```JavaScript
var blackColor = MSColor.colorWithNSColor(NSColor.colorWithGray(0.0))
```

### hexValue:

Returns the hexadecimal value of an MSColor instance:

```javascript
var color = MSColor.colorWithRed_green_blue_alpha(1.0,0.4,0.0,1.0)
log(color.hexValue()) // ff6600, the nicest color ever
```

### hue:, saturation:, brightness:

Each one of these methods returns the corresponding value of a given MSColor:

```JavaScript
var color = MSColor.colorWithRed_green_blue_alpha(1.0,0.4,0.0,1.0)

log(color.hue()) // 0.06666666666666667
log(color.saturation()) // 1
log(color.brightness()) // 1
```

### hexValueForRed:(CGFloat)red green:(CGFloat)green blue:(CGFloat)blue

Returns the hexadecimal value for any given set of RGB components:

```JavaScript
log(MSColor.hexValueForRed_green_blue(1.0,0.4,0.0)) // ff6600
```

### stringValueWithAlpha:(BOOL)includeAlpha

Returns a CSS-friendly string representing the MSColor's values:

```javascript
var color = MSColor.colorWithRed_green_blue_alpha(1.0,0.4,0.0,0.5)

log(color.stringValueWithAlpha(true)) // rgba(255,102,0,0.50)
log(color.stringValueWithAlpha(false)) // #FF6600
```

### fuzzyIsEqual:(MSColor)color

Used to compare two MSColor instances. Returns `1` if both instances are similar (i.e: their color components differ by less than 0.001), `0` otherwise.

```JavaScript
var grayOne   = MSColor.colorWithRed_green_blue_alpha(0.5,0.5,0.5,1.0)
var grayTwo   = MSColor.colorWithRed_green_blue_alpha(0.5,0.500001,0.5,1.0)
var grayThree = MSColor.colorWithRed_green_blue_alpha(0.5,0.6,0.5,1.0)

log(grayOne.fuzzyIsEqual(grayTwo)) // 1
log(grayOne.fuzzyIsEqual(grayThree)) // 0
```

### isWhite:, isBlack:

Return `1` if the color is white/black (or close enough), `0` otherwise.

```JavaScript
var whiteColor = MSColor.colorWithNSColor(NSColor.colorWithGray(0.999999))
var blackColor = MSColor.colorWithNSColor(NSColor.colorWithGray(0.000001))

log(whiteColor.isWhite()) // 1
log(whiteColor.isBlack()) // 0
log(blackColor.isWhite()) // 0
log(blackColor.isBlack()) // 1
```

### colorWithAlpha:(CGFloat)alpha

Returns an MSColor instance, with its alpha set to `alpha`:

```JavaScript
var blackColor = MSColor.colorWithNSColor(NSColor.colorWithGray(0.0))
var alphaBlack = blackColor.colorWithAlpha(0.5)

log(blackColor.stringValueWithAlpha(true)) // #000000
log(alphaBlack.stringValueWithAlpha(true)) // rgba(0,0,0,0.50)
```
