# jQuery Slugger
Created by Daxi

## About this plugin
This is a simple jQuery plugin to slugify an input field as you type with the option to connect it to a fx. title input then the slug will be automatically generated as you type in a title.

Currently it will remove all special characters but replace Icelandic and Danish specific characters with alphanumeric characters.

### Example

Let's say you have a form like this

	<form>
		<label for="myTitle">Title</label>
	    <input type="text" name="myTitle" id="myTitle">

	    <label for="mySlug">Slug</label>
	    <input type="text" name="mySlug" id="mySlug">
	</form>

Then you can can use the slugger like this to sync the slug input with the title:

	$('#mySlug').slugger({
		source: '#myTitle'
	});

	// input: My Awesome Title
	// output: my-awesome-title

You can also add prefixes and suffixes like this:

	$('#mySlug').slugger({
		source: '#myTitle',
		prefix: 'Hey I'm a prefix',
		suffix: 'SuFFix'
	});

	// input: My Awesome Title
	// output: hey-im-a-prefix-my-awesome-title-suffix

To activate only the slug input without chaining it with anything the you can run this:

	$("#mySlug").slugger();

You can set the Slug input to readonly if you have a source specified

	$("#mySlug").slugger({
		source: "#myTitle",
		readonly: true
	})
	