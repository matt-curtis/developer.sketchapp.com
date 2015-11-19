# developer.sketchapp.com

This repository powers the development site for [Sketch](http://sketchapp.com), that lives at [developer.sketchapp.com](http://developer.sketchapp.com).

## Contribute!

We've made this repository public so you can contribute to it. If you find a typo, or an error, or want to improve the content, feel free to send us a pull request. Also, if there's anything you'd like to see covered or documented, file an issue and we'll do it for you.

We use [Jekyll](http://jekyllrb.com) as our content backend, so make sure to read their docs if you need help understanding how the system works.

## Setup

If you want to get the site working locally, run this:

```
brew instal node # if you don't have it already
sudo npm install -g gulp # if you don't have it already
sudo gem install jekyll pygments.rb
npm install
```

and then run

```
jekyll serve
```

to start the server, and open <http://0.0.0.0:4000> to see the site.