jQuery(document).ready(function($) {
	$.fn.slugger = function(options) {
		var $target = this;
		var $source = ((options.source) ? $(options.source) : false);
		var $prefix = ((options.prefix) ? options.prefix + "-" : "");
		var $suffix = ((options.suffix) ? "-" + options.suffix : "");
		var $readonly = options.readonly || false;

		if ($source && $readonly === true) {
			$target.attr('readonly', true);
		}

		var createSlug = function(str) {
			str = str.toLowerCase();

			var map = {
				" ": "-",
				"æ": "ae",
				"á": "a",
				"ð": "d",
				"é": "e",
				"í": "i",
				"ó": "o",
				"ú": "u",
				"ö": "o",
				"þ": "th",
				"ø": "o",
				"å": "a",
				"/": "-",
				"_": "-"
			};

			for (var k in map) {
				if (typeof map[k] !== 'function') str = str.replace(new RegExp(k, 'g'), map[k]);
			}

			// return and remove invalid chars and colapse dashes
			return str.replace(/[^a-z0-9 -]/g, '').replace(/-+/g, '-');
		};
		if ($source) {
			$source.on('keyup change', function() {
				var slug = createSlug($prefix + $(this).val() + $suffix);
				$target.val(slug);
			});
		}
		$target.on('keyup change', function() {
			var slug = createSlug($(this).val());
			$target.val(slug);
		});
	};
});
