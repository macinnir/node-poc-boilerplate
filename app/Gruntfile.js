'use strict';

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	var config = require('./config');

	grunt.initConfig({
		wiredep: {
			src: [config.htmlDir + '/index.html'],
			ignorePath:  /\.\.\//
		}
	});


	grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {

	    // if (target === 'dist') {
	    //   return grunt.task.run(['build', 'connect:dist:keepalive']);
	    // }

	    grunt.task.run([
	      // 'clean:server',
	      'wiredep'
	      // 'concurrent:server',
	      // 'autoprefixer:server',
	      // 'connect:livereload',
	      // 'watch'
	    ]);
	  });
};