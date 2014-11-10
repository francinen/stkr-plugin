module.exports = function(grunt) {

         // Project configuration.
         grunt.initConfig({
             pkg: grunt.file.readJSON('package.json'),
             sass: {                              // Task
               dist: {                            // Target
                 options: {                       // Target options
                   style: 'compressed'
                 },
                 files: {                         // Dictionary of files
                   'css/demo.css': 'css/demo.scss' // 'destination': 'source'
                 }
               }
             },
             watch: {
               css: {
                 files: '**/*.scss',
                 tasks: ['sass'],
                 options: {
                   livereload: true,
                 },
               },
             },
            uglify: {
               my_target: {
                 files: {
                   'js/stkr.js': ['js/stkr.js']
                 }
               }
             }
         });

         // Default task(s).
         grunt.loadNpmTasks('grunt-contrib-sass');
         grunt.loadNpmTasks('grunt-contrib-watch');
         grunt.loadNpmTasks('grunt-contrib-uglify');
         grunt.registerTask('default', ['sass','watch', 'uglify']);
 };