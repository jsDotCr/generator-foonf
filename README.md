# What this Yeoman generator is supposed to do
* _(create an empty git repo?)_
* Add a .gitignore file
* Compile a bower.json + package.json with the very same data about the webapp
* Install dependencies
* Create lint rule files (.csslintrc & .jshintrc)
* Build a decent enough Gulp toolchain
* Create an almost-empty index.html (and a second page, if it's not a Single Page Application)
* Add a basic reset CSS file
* Add the very basic Javascript libraries, using require.js
* Whatever will come up to my mind (or better, to my projects)

---

# Questions to be added
Just some random thoughts about the questions to prompt to the user. I think it's better to add those here instead of using a planning tool. I wouldn't have updated it anyway. Public is better (and there's for sure somebody out there who has better ideas than mines).

## Project details
Writing project details in both bower.json and package.json. Using a composer could be a **better** choice, though.

**Status**: partially done.

## Browser support
There are some browser (version)-dependant dependencies or rules, like HTML5 shim for IE8-, and the CSS vendor prefixes (handled by autoprefixer). Having this information would help generating less shitty code (eg.: why the hell should I include html5shim if I just need to support IE10+?)

**Status**:

## CSS reset?
Provide a shortlist of different CSS resets, like:

* No reset css, let the browser use its own stylesheets by default
* Remove inconsistent cross-browser styling (aka: yui reset, normalize.css)
* Get rid of all browser stylesheets in a well mannered way (reset CSS)

**Status**: 

## JS framework?
I'd like to avoid including the whole jQuery thingy by default. And customizing it thru this generator is not really an option, imho. Providing the choice between:

* zepto
* underscore/lodash

Would be better (note for the future: it could be worth adding some other helpful microjs framework too). In any case, AMD modules will be used. CommonJS FTW!

**Status**: 

## Templating system
Defaults to handlebars. Maybe: it could be worth checking if there are some more available templating systems with AMD support.

**Status**: 

## "Compiled" files folder
There two different "compiled" folders right now:

* **css/dist** for the autoprefixed CSS files
* **build** for the final html/js/css files

Providing a question to change this would be highly appreciated, I suppose.

**Status**: partially done

## SPA or multipage?
This is not really an expensive task: it's just about adding an almost-exact-copy of the index.html file, with a different name and a different js endpoint. But it could be worth adding it.

**Status**: 

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