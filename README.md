# jQuery Scolled Into View

This script checks if the element is visible on screen and attach on it, actions to let you build some effect like parallax, animation when enter on screen, whatever.

## Options

- `offset` Aditional offset size to the header, in pixels.
- `partial` Set if actions starts when the element is totally or partial visible on screen.

## How to use?

```javascript
$('.element').scrolledIntoView({
	onEnter: function(element) {
		// Start the animation when element enter screen
	},
	onLeave: function(element) {
		// Stop the animation when element leave screen
	},
	onVisible: function(element) {
		// Do some action while scrolling the page and visible on screen
	}
});
```