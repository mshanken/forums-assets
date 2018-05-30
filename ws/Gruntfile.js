module.exports = function(grunt) {
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2,
					sourceMap: true
				},
				files: {
					"css/wso.forum.min.css": "assets/css/wso.less"
				}
			}
		}
	});
	grunt.registerTask('default', ['less']);
};
