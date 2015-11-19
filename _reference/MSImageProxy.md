---
title: MSImageProxy
rels:
  - MSImageCollection
  - MSBitmapLayer
  - MSImageData
---

## Description

MSImageProxy is designed to hang off model objects that need an image ([MSBitmapLayer](/docs/MSBitmapLayer/) and [MSStyleFill](/docs/MSStyleFill/) for example). It's designed to not store actual image-data itself unless there's no other option as it's designed to work together with [MSImageCollection](/docs/MSImageCollection/) which holds the real data.

Note that MSImageProxy is an immutable class, so making a copy returns itself.

[MSImageCollection](/docs/MSImageCollection/) holds on to a dictionary of sha1 -> [MSImageData](/docs/MSImageData/) objects. 

MSImageData contains the image, the hash and pre-coded NSData for archiving. MSImageProxy never encodes the imageData it holds on to, it just encodes the sha1, trusting that it can retrieve the MSImageData from the ImageCollection after decoding.

MSImageProxy can be made to work with three distinct use cases:

1. MSImageProxy has a SHA, and will obtain its [MSImageData](/docs/MSImageData/) later from an [MSImageCollection](/docs/MSImageCollection/).
2. MSImageProxy has an NSImage and it will make a corresponding [MSImageData](/docs/MSImageData/) later using an [MSImageCollection](/docs/MSImageCollection/).
3. MSImageProxy has [MSImageData](/docs/MSImageData/) already but the [MSImageCollection](/docs/MSImageCollection/) of the document doesn't know about it yet.

Using `-resolveImageWithCollection:` will put the proxy image in a situation where if it has ImageData and there's a collection that knows about it, when immutable or lightweight copies are made for saving, Sketch resolves automatically, so you never have to do it manually.

## Methods & Attributes


### proxyWithImage:(NSImage)image

### proxyWithHash:(NSData)sha1

### proxyWithImageData:([MSImageData](/docs/MSImageData/))imageData

### proxyWithImage:(NSImage)image convertColorSpace:(BOOL)space collection:([MSImageCollection](/docs/MSImageCollection/))images

### (NSImage)NSImage:

### (NSData)imageHash:

### ([MSImageData](/docs/MSImageData/))imageData:

### (void)resolveImageWithCollection:([MSImageCollection](/docs/MSImageCollection/))images

Resolves the image by adding it to the collection.