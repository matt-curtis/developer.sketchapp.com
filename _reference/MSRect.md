---
title: MSRect
rels:
  - GKRect
  - MSLayer
---



Represents a size and position of a layer on the screen. See [MSLayer](/docs/MSLayer/) for more information


## Methods & Attributes

### rectWithX:(CGFloat)x1 y:(CGFloat)y1 width:(CGFloat)w1 height:(CGFloat)h1

Returns an MSRect with the given attributes.

### rectWithUnionOfRects:(NSArray)rects

Returns an MSRect that is the union of an NSArray of MSRects.

### initWithRect:(NSRect)rect

Returns an MSRect from an [NSRect](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Miscellaneous/Foundation_DataTypes/index.html#//apple_ref/c/tdef/NSRect).

### width, setWidth:(CGFloat)newWidth

Get / set the width of the MSRect.

### height, setHeight:(CGFloat)newHeight

Get / set the height of the MSRect.

### x, setX:(CGFloat)x

Get / set the x position of the MSRect.

### y, setY:(CGFloat)y

Get / set the y position of the MSRect.

### makeOriginIntegral:

Rounds the x & y positions of the MSRect so that they are integer numbers.

### makeRectIntegral:

Rounds the x & y positions and the width & height of the MSRect so that they are integer numbers.

### size, setSize:(NSSize)size

Get / set the [NSSize](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Miscellaneous/Foundation_DataTypes/#//apple_ref/c/tdef/NSSize) of the MSRect.

### origin, setOrigin:(NSPoint)point

Get / set an NSPoint with the x & y coordinates of the MSRect.

### scaleBy:(CGFloat)scale

Returns an MSRect, scaled by the `scale` factor.

### containsPoint:(NSPoint)point

Returns `1` if `point` is inside MSRect, `0` otherwise.

### constrainProportions, setConstrainProportions:(BOOL)newConstrainProportions

Get / set the constrainProportions property, which controls whether the width and height are scaled proportionally.

### GKRect

Returns a [GKRect](/docs/GKRect/) representation of the rectangle
