---
title: GKRect
date: 2015-09-25
author: Pieter Omvlee
summary: GKRect is nowadays mostly unused in the app, but there are a few places where it can still be set. Using the plain NSRect struct from Foundation is preferred; many objects will have a setRect method which accepts an NSRect, not a GKRect.
rels:
  - MSRect
  - MSLayer
---



GKRect is nowadays mostly unused in the app, but there are a few places where it can still be set. Using the plain NSRect struct from Foundation is preferred; many objects will have a setRect method which accepts an NSRect, not a GKRect.

GKRect is a lightweight rectangle object that is used in some places in Sketch. It has many of the same methods as [MSRect](/reference/MSRect/) but they cannot be used interchangeably.


## Methods & Attributes

### x,y,width,height

Sets or gets the position and size of the rect.
