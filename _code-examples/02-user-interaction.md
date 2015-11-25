---
title: User Input & Feedback
summary: Techniques to show information to users and interact with them.
permalink: /code-examples/user-interaction/
order: 200
---

Making awesome stuff behind the courtains is cool, but sometimes you’ll want to communicate to your users the results of your complex operations.

When that moment arrives, you have some options to interact with users:

## Getting user input

You can call the `askForUserInput` method to (surprise) ask for user input and use it on your plugins. It takes a parameter: `initialValue`, which sets the default value on the input field.

As an example, this is how you’d ask your user for their name:

```JavaScript
var onRun = function(context) {
  var doc = context.document
  var name = doc.askForUserInput_initialValue("What is your name?", "")
}
```

Note that `initialValue` is a required parameter. Use "" if you don’t want to use a default value.

If you need more complex user interactions, you can use the [NSAlert](https://developer.apple.com/library/mac/documentation/Cocoa/Reference/ApplicationKit/Classes/NSAlert_Class/) class in Cocoa.

For example, this is how you create a dropdown menu with options:

```JavaScript
function createSelect(msg, items, selectedItemIndex){
  selectedItemIndex = selectedItemIndex || 0

  var accessory = NSComboBox.alloc().initWithFrame(NSMakeRect(0,0,200,25))
  accessory.addItemsWithObjectValues(items)
  accessory.selectItemAtIndex(selectedItemIndex)

  var alert = NSAlert.alloc().init()
  alert.setMessageText(msg)
  alert.addButtonWithTitle('OK')
  alert.addButtonWithTitle('Cancel')
  alert.setAccessoryView(accessory)

  var responseCode = alert.runModal()
  var sel = accessory.indexOfSelectedItem()

  return [responseCode, sel]
}

var options = ['None', 'One', 'Two', 'Three', 'Four']

var choice = createSelect('Choose an option',options, 1)

log(choice)
```

This is what it looks like when running:

![](/images/developer/select.png)

## Feedback

If you need to display information to your user, you can use two features: `[doc showMessage]` or `[NSApplication displayDialog]`. The first is a lightweight and subtle way of showing information at the bottom center of Sketch’s canvas. The second shows a regular alert dialog.

This is how you’d use `[doc showMessage]`:

```JavaScript
var onRun = function(context) {
  var doc = context.document
  doc.showMessage("The operation is complete")
}
```

If you want a more "in your face" style, you can use:

```JavaScript
var app = NSApplication.sharedApplication()
app.displayDialog_withTitle("The operation is complete", "We’re done")
```

and you’ll get a dialog like this:

![](/images/developer/alert.png)

If you want to use feedback for debugging purposes, we recommend you to take a look at the [Debugging](/code-examples/debugging/) section.
