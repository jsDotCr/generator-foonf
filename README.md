# What this Yeoman generator is already capable of

* Ask basic questions to the user so it can generate package.json && bower.json files with all the project details
* Creates lint files (both .csslintrc & .jshintrc)
* Adds a .gitignore file

# What this Yeoman generator is already capable of, but unit tests are still missing

* It uses require.js to load these basic JS libraries:

  * text/JSON require.js loader
  * domReady
  * Handlebars
* Build a basic Gulp toolchain feat.:

  * Connect server
  * File watcher
  * HTML: (usemin's) minifier
  * CSS: CSSLint, Autoprefixer, (usemin's) concat & minifier
  * JS: JSHint, (usemin's) uglifier, concat, rev.
* Adds an index.html / playground page to link all this together.

# What this Yeoman generator will (most likely) do

* Add a basic reset CSS file (there is a YUI reset in there, but it'd be nice to load it using bower, I hate /vendor folders)
* Add a dummy CSS file (there is one already, but it acts most likely as a placeholder; usemin loves to complain about empty blocks)
* _create an empty git repo?_
* Install dependencies
* Add a second page, if it's not a Single Page Application
* Add cucumber.js/functional testing
* Prepare some coffee and roll a cigarette :)

---

# Questions
Just some random thoughts about the questions to prompt to the user. I think it's better to add those here instead of using a planning tool. I wouldn't update that anyway. Public is better (and there's for sure somebody out there who has better ideas than mines).

## Browser support
There are some browser (version)-dependant dependencies or rules, like HTML5 shim for IE8-, and the CSS vendor prefixes (handled by autoprefixer). Having this information would help generating less shitty code (eg.: why the hell should I include html5shim if I just need to support IE10+?)

## CSS reset?
Provide a shortlist of different CSS resets, like:

* No reset css, let the browser use its own stylesheets by default
* Remove inconsistent cross-browser styling (aka: yui reset, normalize.css)
* Get rid of all browser stylesheets in a well mannered way (reset CSS)

## JS framework?
I'd like to avoid including the whole jQuery thingy by default. And customizing it thru this generator is not really an option, imho. Providing the choice between:

* zepto
* underscore/lodash

Would be better (note for the future: it could be worth adding some other helpful microjs framework too). In any case, AMD modules will be used. CommonJS FTW!

## Templating system
Defaults to handlebars. Maybe: it could be worth checking which are the other ones already available with AMD support.

## "Compiled" files folder
There two different "compiled" folders right now:

* **css/dist** for the autoprefixed CSS files
* **build** for the final html/js/css files

Providing a question to change this would be highly appreciated, I suppose.

## SPA or multipage?
This is not really an expensive task: it's just about adding an almost-exact-copy of the index.html file, with a different name and a different js endpoint. But it could be worth adding it.

# License
I love licenses!! That's why I'm using the **WTFPL – Do What the Fuck You Want to Public License**.
```
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.

```

# Unit testing && code coverage
Just run:


```
# If istanbul is not globally installed yet, please also execute: npm i -g istanbul 
npm test && istanbul cover node_modules/mocha/bin/_mocha
```
