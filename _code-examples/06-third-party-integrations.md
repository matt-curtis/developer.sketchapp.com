---
title: Third Party Integrations
date: 2015-10-13
permalink: /code-examples/third-party-integrations/
order: 600
---

## Introduction

One of the great things about Sketch is it's extensibility. If you're developing a new app or web service, it's really easy to add Sketch support to it. You can control Sketch from your application using CocoaScript, or you can extract information from .sketch documents using the free [sketchtool](http://sketchapp.com/tool/), either running it on the user's computer, or an OSX server on your data center.

Here are some services and tools that already support Sketch:

- [Avocode](http://avocode.com)
- [Flinto](https://www.flinto.com/mac)
- [Folio for Mac](http://folioformac.com)
- [Invision](http://www.invisionapp.com)
- [Markly](http://marklyapp.com)
- [Marvel](https://marvelapp.com)
- [Origami](http://facebook.github.io/origami/)
- [Pixate](http://www.pixate.com)
- [Pixave](http://www.littlehj.com)
- [Qwikly](http://getqwikly.com)
- [Sympli](http://sympli.io)
- [UXPin](http://www.uxpin.com)
- [Wake](https://wake.io)
- [Zeplin](https://zeplin.io)

Is yours missing? Add it by [editing this page]({{site.github_repo}}/tree/gh-pages/{% if page.relative_path %}{{page.relative_path}}{% else %}{{page.path}}{% endif %}).

## Controlling Sketch using CocoaScript

If you develop a third party app, chances are that you'll want to drive Sketch from it. That's pretty easy to do using CocoaScript and the `runPlugin*` methods documented at [AppController](/reference/AppController/) in combination with `coscript` (the CocoaScript binary, which can be downloaded from [here](/downloads/coscript.zip)).

You can think of `coscript` as the CocoaScript cousin of `osascript`, a command-line tool to run AppleScript code.

`coscript` can do two things:

- work as a [REPL](https://en.wikipedia.org/wiki/Read–eval–print_loop) for CocoaScript
- run CocoaScript code you pass to it from a file

The REPL part is cool, but we really want to play with the second: let's use coscript to drive Sketch!


### Running arbitrary code

Let's make Sketch run some CocoaScript code. For this example, we'll have it show an message, using MSDocument's [showMessage](/reference/MSDocument/#showmessage).

We want Sketch to run this bit of code:

```javascript
context.document.showmessage('Hello, World!')
```

To do that, we'll create a file called `hello.js` with this content

```javascript
var codeToRun = "context.document.showMessage('Hello, World!')"
var sketchApp = COScript.app("Sketch")
sketchApp.delegate().runPluginScript(codeToRun)
```

Now launch Sketch, make sure a document window is open, and run this line of code:

```
coscript hello.js
```

You should see a message in the bottom of your document window.


### Running an installed Plugin

Now let's do something a bit more complex: let's ask Sketch to run a command from an installed Plugin.

To do this, let's download an example Plugin: [Hi](/downloads/plugins/hi.sketchplugin.zip). Install that, and create a new file called `plugin.js`, with this content:

```javascript
var sketchApp = COScript.app("Sketch")
var appSupportPath = NSFileManager.defaultManager().URLsForDirectory_inDomains(NSApplicationSupportDirectory,NSUserDomainMask).firstObject().path()
var pluginFolderPath = appSupportPath.stringByAppendingPathComponent("com.bohemiancoding.sketch3/Plugins/Hi.sketchplugin")
var pluginURL = NSURL.fileURLWithPath(pluginFolderPath)
sketchApp.delegate().runPluginCommandWithIdentifier_fromBundleAtURL('hi',pluginURL)
```

If you now run the code using

```bash
coscript plugin.js
```

you'll get this in your Terminal:

```
Hi, how are you?
```

which is what the Plugin does, so that's a success : )


## Using sketchtool

Coming soon
