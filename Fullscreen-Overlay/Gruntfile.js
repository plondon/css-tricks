module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/main.css': 'css/main.scss'
				}
			},
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/main.css': 'css/main.scss'
				}
			}
		},
		watch: {
			compile: {
				files: ['css/*scss', 'css/partials/*.scss'],
				tasks: ['sass:dev']
			},
			livereload: {
				options: { livereload: true },
				files: ['css/main.css']
			}
		}
	});

grunt.loadNpmTasks('grunt-contrib-requirejs');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['requirejs', 'sass:dist']);
grunt.registerTask('build', ['qunit', 'requirejs', 'sass:dist']);

};

