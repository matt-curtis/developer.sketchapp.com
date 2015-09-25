---
title: Sharing Code
summary: How to share code between commands and plugins.
permalink: /examples/sharing-code/
---

## Sharing Code Between Commands

With the new [plugin bundle format](/introduction/plugin-bundles/), you have a way to group similar commands together into a single package which users can install.

Once your collection of commands starts growing, you’ll probably want to split them up into separate script files, and reuse functions between some of them.

You can do this by using the `@import` feature in your scripts.

This feature lets you include other files in your plugin. The syntax is simple:

```JavaScript
@import 'path/to/your/file'
```

Please note:

- the included file can have any extension. Usually it’s .js, but you can use anything you like.
- you need to use single quotes.

## Sharing Code Between Plugins

You can also use the `@import` command to pull in items from outside your plugin's bundle.

If you supply a relative path, Sketch will search for it. The search path for an imported file is:

- folder containing the script file
- parent of that folder, then parent's parent, and so on until
- plugins root folder

You can also specify an absolute path, such as:

```JavaScript
@import '/usr/local/share/mystuff/mylibrary.js'
```

Doing this sort of thing isn't generally recommended though. Your plugin will be installed by the user and/or copied into place by Sketch, and you have no guarantees about what other plugins or files are available on the system.

Furthermore, even if you are able to reliably find an external library, you will have no guarantees about which version of it is present.

If your plugin requires third-party libraries, we generally recommend that you include a copy of them inside your plugin bundle (subject to the relevant licensing restrictions).

This will make your plugin a little bit larger, but it ensures that you know the relative path to the library, and you know that you have a compatible version.
