;(function($, window, document, undefined) {
	$.fn.ipsum = function(options) {
		var defaults = {paras: 1, type: "hipster-latin"},
			self = this, 
			url = "";

		options = $.extend({}, defaults, options);

		switch(options.type.toLowerCase()) {
			case "hipster":
				url = "http://hipsterjesus.com/api/?paras=";
				break;
			case "hipster-centric":
				url = "http://hipsterjesus.com/api/?type=hipster-centric&paras=";
				break;
			case "bacon":
				url = "https://baconipsum.com/api/?type=meat-and-filler&paras=";
				break;
			case "bacon-all-meat":
				url = "https://baconipsum.com/api/?type=all-meat&paras=";
				break;
			case "skate":
				url = "https://jsonp.nodejitsu.com/?callback=?&url=http://skateipsum.com/get/";
				break;
			case "baseball":
				url = "https://jsonp.nodejitsu.com/?callback=?&url=http://baseballipsum.apphb.com/api/?paras=";
				break;
			case "pony":
				url = "http://ponyipsum.com/api/?type=pony-and-filler&paras=";
				break;
			case "all-pony":
				url = "http://ponyipsum.com/api/?type=all-pony&paras=";
				break;
			case "science":
				url = "https://jsonp.nodejitsu.com/?callback=?&url=http://scienceipsum.com/api/paragraphs/";
		}

		url += options.paras;
		if (options.type.toLowerCase() === "skate") {
			url += "/0/JSON";
		}

		$.getJSON(url, function(data) {
			var output = "";
			switch (options.type.toLowerCase()) {
				case "hipster":
				case "hipster-centric":
					output = data.text;
					break;
				case "science":
					for (var i = 0; i < data.paragraphs.length; i++) {
						output += "<p>" + data.paragraphs[i] + "</p>";
					}
					break;
				default:
					for (var j = 0; j < data.length; j++) {
						output += "<p>" + data[j] + "</p>";
					}
			}

			self.html(output);
		});

	};
})(jQuery, window, document);