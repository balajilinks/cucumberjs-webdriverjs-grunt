'use strict';

var path = require('path');

module.exports = function(grunt) {


  grunt.initConfig({

    env: {
      chrome: {
        PLATFORM: 'CHROME'
      },
      firefox: {
        PLATFORM: 'FIREFOX'
      },
      android: {
        PLATFORM: 'ANDROID'
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'features\\step_definitions\\*.js', 'features\\support\\*.js'],
      options: {
        node: true,
        strict: "global",
        esversion: 6
      }
    },

    exec: {
      run_cucumber_tests: {
        command: path.join('node_modules', '.bin', 'cucumberjs')
      }
    },

    cucumberjs: {
      options: {
        format: 'html',
        output: './htmlreports/report.html',
        name: 'bootstrap'
     },
     my_features: []
     }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-cucumberjs');

  grunt.registerTask('default', ['jshint', 'cucumberjs']);
  grunt.registerTask('chrome', ['env:chrome', 'jshint', 'cucumberjs']);
  grunt.registerTask('firefox', ['env:firefox', 'jshint', 'cucumberjs']);
  grunt.registerTask('android', ['env:android', 'jshint', 'cucumberjs']);


};
