/**
* jQuery Scrolled Into View
*
* @version: 1.0.0
* @author Edir Pedro
* @website http://edirpedro.com.br/
* @git https://github.com/edirpedro/jquery-scrolledintoview
* @copyright 2015
* @license MIT - http://opensource.org/licenses/MIT
* @preserve
*/

;(function($){
	'use strict';
	
	var defaults = {
		offset: 0, 							// Aditional offset size, in pixels
		partial: true, 						// If actions starts when the element is totally or partial visible on screen
		onEnter: function(element) {},		// Function to execute when enter screen
		onLeave: function(element) {},		// Function to execute when leave screen
		onVisible: function(element) {}		// Function to execute while element is visible
	}

	$.fn.scrolledIntoView = function(options){

		if(this.length == 0) return this;

		// Support mutltiple elements
		if(this.length > 1){
			this.each(function(){ $(this).scrolledIntoView(options) });
			return this;
		}
		
		var element = this;
		var plugin = {};
		
		// Initialize
		var init = function() {
			plugin.settings = $.extend(true, {}, defaults, options);
			$(window).scroll(scrolling);
			scrolling();
		}
		
		// Scroll handle
		var scrolling = function() {
			var $elem = $(element);
			if(isVisible()) {
				if(!$elem.hasClass('visible'))
					plugin.settings.onEnter(element);
				$elem.addClass('visible');
				plugin.settings.onVisible(element);
			} else {
				if($elem.hasClass('visible'))
					plugin.settings.onLeave(element);
				$elem.removeClass('visible');
			}
		}
		
		// Is Visible?
		var isVisible = function() {
			var $elem = $(element);
			var $window = $(window);
			
			var viewport_top = $window.scrollTop() + plugin.settings.offset;
			var viewport_bottom = viewport_top + $window.height();
			
			var elem_top = $elem.offset().top;
			var elem_bottom = elem_top + $elem.height();
			
			var compare_top = plugin.settings.partial ? elem_bottom : elem_top;
			var compare_bottom = plugin.settings.partial ? elem_top : elem_bottom;
						
			return ((compare_top >= viewport_top) && (compare_bottom <= viewport_bottom));
		}
				
		init();

		return this;
	}

})(jQuery);