---
title: Working with Selections
summary: Techniques for selecting objects.
permalink: /examples/working-with-selections/
---

One of the first things you’ll probably want to do with a plugin is to modify the current selection.

When your handler is called, it is passed a single `context` parameter. One of the things that Sketch will pass you in the context is the selection, so you can extract it like this:

```JavaScript
var onRun = function(context) {
  var selection = context.selection
  // do something with your selection here
}
```

By default, Sketch populates this variable with an NSArray of the currently selected objects.

If there is no selected objects, `selection.count()` will be 0, so you can use that to check if anything is selected:

```JavaScript
if ( selection.count() == 0 ) {
  // nothing is selected
}
```

To iterate through the selected items, you can use a `for(){}` loop:

```JavaScript
for (var i=0; i < selection.count(); i++){
  var item = selection[i]
  // do something with item
}
```

or an Obj-C style iterator (which is way faster):

```JavaScript
var loop = selection.objectEnumerator()
while (item = loop.nextObject()) {
  // do something with item
}
```

## Clearing the selection

You’ll probably want to clear the selected items in some plugins. The way to do that is to run `[page deselectAllLayers]`. For this, you need access to the document, which is another value given to you in the context.

For example, to unselect everything on the current page, you’d do this:

```JavaScript
var doc = context.document
doc.currentPage().deselectAllLayers()
```

## Selecting items

Once you are comfortable iterating through the selection, you’ll probably want to modify it. To do that, there’s one method in [MSLayer](../03-reference/MSLayer.html) you’ll be using quite a lot: `select:byExpandingSelection`.

As an example, we’ll select all layers named 'Rectangle':

```JavaScript
// First, we’ll unselect everything
var doc = context.document
doc.currentPage().deselectAllLayers()

// Now, let’s iterate through all layers:
var all_layers = doc.currentPage().layers()
for(var i=0; i < all_layers.length(); i++){
  var layer = all_layers.objectAtIndex(i)
  if(layer.name() == "Rectangle")
  // This selects the layer, by adding it to the current selection:
  layer.select_byExpandingSelection(true, true)
}
```

If you want to select something without maintaining the existing selection, just do `layer.select_byExpandingSelection(true,false)`.

If you need to unselect items, you can use `layer.select_byExpandingSelection(false, true)`. Using the inverse of the previous example, imagine you want to remove all items named 'Rectangle' from the current selection:

```JavaScript
var loop = selection.objectEnumerator()
while (layer = loop.nextObject()) {
  if( layer.name() == "Rectangle"){
    layer.select_byExpandingSelection(false, true)
  }
}
```
