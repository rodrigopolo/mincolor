// Require the main script in this thir, you should use require('mincolor')
var mincolor = require('./');


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
