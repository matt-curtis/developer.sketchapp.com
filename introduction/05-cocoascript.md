---
title: More on CocoaScript
permalink: /introduction/cocoascript/
summary: Some more details on how to use CocoaScript
---

## CocoaScript

Sketch Plugins are made possible by [CocoaScript](https://github.com/ccgus/CocoaScript), a bridge that lets you use Objective-C/Cocoa code from an external script written in JavaScript. The bridge takes care of the translation between JavaScript and Cocoa, so you can concentrate on the important parts (namely, making Sketch do awesome stuff).

From CocoaScript’s README:

> CocoaScript is built on top of Apple’s JavaScriptCore, the same JavaScript engine that powers Safari. So when you write in CocoaScript, you are really writing JavaScript.
>
> CocoaScript also includes a bridge which lets you access Apple’s Cocoa frameworks from JavaScript. This means you have a ton wonderful classes and functions you can use in addition to the standard JavaScript library.

You can use two different styles when writing your scripts: **dot notation** and **bracket notation**.

If you have spent some time writing JavaScript code, you already know about the dot notation:

```JavaScript
var l = a.length()
```

Here, a dot is used to say: “Call the ‘length’ method on the ‘a’ object”.

However, if you come from a Cocoa background, you may be happy to learn that you can also use a bracket notation, very similar to that in Objective-C:

```Objective-C
var l = [a length]
```

You can even mix and match dot and bracket notation:

```Objective-C
var l = [a length].toString()
```

However, it’s probably a good idea to stick with just one style.

## Accessing Cocoa

You can access all Cocoa APIs from CocoaScript. For example, if you want to open a File Picker panel, you can use the [NSOpenPanel](https://developer.apple.com/library/mac/documentation/cocoa/reference/applicationkit/Classes/NSOpenPanel_Class/Reference/Reference.html) class:

```Objective-C
var openPanel = [NSOpenPanel openPanel]
[openPanel setCanChooseDirectories:false]
[openPanel setCanChooseFiles:true]
[openPanel setCanCreateDirectories:false]
[openPanel setDirectoryURL:[NSURL fileURLWithPath:"~/Documents/"]]

[openPanel setTitle:"Choose a file"]
[openPanel setPrompt:"Choose"]
[openPanel runModal]
```

If you need more information about Cocoa, check the [Resources]({{site.baseurl}}/resources/) section.

## Other CocoaScript Syntax Notes

- Semicolons are optional in CocoaScript.
- You can evaluate nullness by using `null` or `nil`
