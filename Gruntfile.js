module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("ipsum-everything.jquery.json"),

		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title %>\n" +
				" *  Made by <%= pkg.author.name %>, licensed under <%= pkg.licenses[0].type %> \n" +
				" */\n"
		},

		jshint: {
			files: ["ipsum-everything.js", "Gruntfile.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		uglify: {
			my_target: {
				src: ["ipsum-everything.js"],
				dest: "ipsum-everything.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},
		
		watch: {
		    files: ["ipsum-everything.js", "demo/index.html"],
			tasks: ["jshint", "uglify"]
		}

	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["jshint", "uglify", "watch"]);
};