---
layout: class
title:  "MSPage"
rels:
  - GKRect
  - MSRulerData
inherits:
  - MSLayerGroup
---

## Overview

MSPage is a subclass of [MSLayerGroup](MSLayerGroup.html) that represents a page of the document.
The `frame` parameter of an MSPage is not useful as its not guaranteed to contain all layers on the page.

Hoever do check out MSLayerGroup as there are useful methods in there as well.

## Methods & Attributes

### contentBounds

If you want a rectangle around everything on the canvas, use this. It returns a [GKRect](GKRect.html) object that you can use to export from.

### exportableLayers

Returns an array of all exportable layers in the page. To get an array of just the artboards, use:

### artboards

Returns a readonly array of all artboards on the page. If you want to add a new artboard to a page, use the `addLayer` method.

### addLayer

Adds an [MSLayer](MSLayer.html) to the page. For example, if you want to add an 800x600 artboard to the current page, you'd do this:

    var artboard = [MSArtboardGroup new]
    var frame = [artboard frame]
    [frame setX:0]
    [frame setY:0]
    [frame setWidth:800]
    [frame setHeight:600]
    [[doc currentPage] addLayer:artboard]

### slices

Returns an array of all slices on the page, not including artboards.

### duplicate (deprecated as of Sketch 3.0)

Duplicates the Page, inserts it just below this page. Returns the new page.
Available as of beta 184 / version 2.2.5

**This is no longer working in Sketch 3.0**. If you need to duplicate a page, do this:

	var doc = context.document
    var page = [doc currentPage]
    var newPage = [page copy]

    newPage.setName([page name] + " Copy") // Or anything you like

    [[doc documentData] addPage:newPage]
    [doc setCurrentPage:newPage]


### horizontalRulerData / verticalRulerData

Both return the [MSRulerData](MSRulerData.html) object used to store rulers for their respective axes. Note that this data is only used if there’s no artboard on the page ([MSArtboardGroup](MSArtboardGroup.html) has similar methods for itself).
