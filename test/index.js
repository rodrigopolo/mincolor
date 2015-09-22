var 
	should		= require('chai').should(),
	assert		= require('chai').assert,
	mincolor	= require('../index');


it('minColor() parse', function() {
	assert.equal(mincolor("ffffff")._c, 16777215);
});

it('minColor() hex', function() {
	assert.equal(mincolor("ff0000").hex(), '#ff0000');
});

it('minColor() toString', function() {
	assert.equal(mincolor("ff0000").toString(), '#ff0000');
});

it('minColor() rgbArray', function() {
	assert.deepEqual(mincolor("ffffff").rgbArray(), [255,255,255]);
});

it('minColor() rgb', function() {
	assert.deepEqual(mincolor("ffffff").rgb(), {r:255,g:255,b:255});
});

it('minColor() blend', function() {
	assert.equal(mincolor('#ffffff').blend('#000000',.5).toString(), '#7f7f7f');
});

it('minColor() webSafe', function() {
	assert.equal(mincolor("abcdef").webSafe().toString(), '#99ccff');
});

it('minColor() shortHand', function() {
	assert.equal(mincolor("f0f0f0").shortHand(), '#777');
});






