module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      js: {
        // A single entry point for our app
        src: 'app/js/app.js',
        // Compile to a single file to add a script tag for in your HTML
        dest: 'dist/js/app.js',
        options: {
          shim:{
            angular: {
              path: "./bower_components/angular/angular.js",
              exports: "angular"
            },
            "angular-route": {
              path: "./bower_components/angular-route/angular-route.js",
              exports: "ngRouteModule"
            }
          }
        }
      },
    },
    copy: {
      all: {
        // This copies all the html and css into the dist/ folder
        expand: true,
        cwd: 'app/',
        src: ['**/*.html', '**/*.css'],
        dest: 'dist/',
      },
      bower_components : {
        // This copies all the html and css into the dist/ folder
        expand: true,
        cwd: 'bower_components/',
        src: [ '**/*.js'],
        dest: 'dist/bower_components',
      }
    },
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['browserify', 'copy']);
};