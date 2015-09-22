minColor
=========

A little library to handle web colors

## Installation

  npm install mincolor --save

## Usage

```javascript
// Require the main script in this thir, you should use require('mincolor')
var mincolor = require('mincolor');


// Simple object creation:
var color = mincolor('ffffff');

// Creation using hash:
var color = mincolor('#FFFFFF');

// Creation from shorthand:
var color = mincolor('#FFF');

// Creation from RGB array:
var color = mincolor([255,255,255]);

// Creation from decimal:
var color = mincolor(16777215);

// Creation from other color object:
var color2 = mincolor(color);

// Returns a hex color string, a hex() alias #000000-#FFFFFF:
console.log(color.toString());

// Object cloning:
var other_color = color.clone();

// Clone and create a new color with a web safe color:
var web_safe = color.webSafe();

// Blend two colors:
var background = mincolor('#ffffff');
console.log(background.blend('#000000',.5).toString());

// Returns a RGB array [255,255,255]:
console.log(color.rgbArray());

// Returns a RGB object {r:255,g:255,b:255}:
console.log(color.rgb());

// Return a short hand hex #000-#FFF:
var color = mincolor('f0f0f0');
console.log(color.shortHand());
```

## License

(The MIT License)

Copyright (c) by Rodrigo Polo http://RodrigoPolo.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.