---
title: MSImageProxy
summary: MSImageProxy is designed to hang off model objects that need an image (MSBitmapLayer and MSStyleFill for example). It's designed to not store actual image-data itself unless there's no other option as it's designed to work together with MSImageCollection which holds the real data.
rels:
  - MSImageCollection
  - MSBitmapLayer
  - MSImageData
---

MSImageProxy is designed to hang off model objects that need an image ([MSBitmapLayer](/reference/MSBitmapLayer/) and [MSStyleFill](/reference/MSStyleFill/) for example). It's designed to not store actual image-data itself unless there's no other option as it's designed to work together with [MSImageCollection](/reference/MSImageCollection/) which holds the real data.

Note that MSImageProxy is an immutable class, so making a copy returns itself.

[MSImageCollection](/reference/MSImageCollection/) holds on to a dictionary of sha1 → [MSImageData](/reference/MSImageData/) objects.

MSImageData contains the image, the hash and pre-coded NSData for archiving. MSImageProxy never encodes the imageData it holds on to, it just encodes the sha1, trusting that it can retrieve the MSImageData from the ImageCollection after decoding.

MSImageProxy can be made to work with three distinct use cases:

1. MSImageProxy has a SHA, and will obtain its [MSImageData](/reference/MSImageData/) later from an [MSImageCollection](/reference/MSImageCollection/).
2. MSImageProxy has an NSImage and it will make a corresponding [MSImageData](/reference/MSImageData/) later using an [MSImageCollection](/reference/MSImageCollection/).
3. MSImageProxy has [MSImageData](/reference/MSImageData/) already but the [MSImageCollection](/reference/MSImageCollection/) of the document doesn't know about it yet.

Using `-resolveImageWithCollection:` will put the proxy image in a situation where if it has ImageData and there's a collection that knows about it, when immutable or lightweight copies are made for saving, Sketch resolves automatically, so you never have to do it manually.

## Methods & Attributes


### proxyWithImage:(NSImage)image

### proxyWithHash:(NSData)sha1

### proxyWithImageData:([MSImageData](/reference/MSImageData/))imageData

### proxyWithImage:(NSImage)image convertColorSpace:(BOOL)space collection:([MSImageCollection](/reference/MSImageCollection/))images

### (NSImage)NSImage:

### (NSData)imageHash:

### ([MSImageData](/reference/MSImageData/))imageData:

### (void)resolveImageWithCollection:([MSImageCollection](/reference/MSImageCollection/))images

Resolves the image by adding it to the collection.
