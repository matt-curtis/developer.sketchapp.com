---
title: Debugging
permalink: /code-examples/debugging/
summary: Techniques for making your plugins work when they don’t.
---

Currently there is no built-in debugger for Sketch plugins, so for the most part you will have to fall back to 'printf debugging' -- in other words, logging output to the console from various places in your code, then checking the values to see if they are what you expected.

## Basic Debugging

Whenever you’re running some code, you can use the `log()` feature to show the value of a variable, or check whether an object is defined.

For example, if you want to display the value of a variable called `count`, you’d do:

```JavaScript
log("The value of count is:" + count)
```

To see the output of the `log()` function, you need to open Console.app:

![](/images/developer/console.png)

where you’ll see:

```
10:22:37 My Command (Sketch Plugin): The value of count is 4
```

Which means the value for `count` is 4, but you probably already knew that.

### Filtering Log Messages

Once you start debugging more complex plugins, you’ll probably want to filter log messages in Console.app, as all the system logs are output there. To do that, click on the Filter text field at the top right, and write the name of your plugin command (or "Sketch", if you want to filter for all commands).

If you want to create a permanent filter, click **File › New System Log Query…** and fill the window with these values:

![](/images/developer/console-query.png)

Then click 'Ok', and you’ll have a new section called 'Sketch' on the 'System Log Queries' at the left column.

If you are more of the command line type, you can open a Terminal.app window and run this:

```
$ tail -f /var/log/system.log|grep Sketch
```

## Further Debugging Techniques

Sometimes, when debugging Plugins, you may want to check the output of a command without having to switch to another app. For those cases, you have two options:

1. You can use one of the techniques discussed in [User Input & Feedback](/examples/user-interaction/) (`alert`, `[doc showMessage]` or Cocoa dialogs), or
2. There are some excellent Sketch plugins which improve the plugin development process. For example, try [sketch devtool](https://github.com/turbobabr/sketch-devtools), which includes a persistent log panel you can see without leaving Sketch.
3. Consider using text-to-speech to output information that you can hear. The plugin [Sketch Speaker](https://github.com/marcosvidal/sketch-speaker ) illustrates this technique. They use it for the actual command implementation, but there's nothing to stop you using a similar approach for debugging.
