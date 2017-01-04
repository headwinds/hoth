/* eslint-disable */

var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

// Karma configuration
var webpack = require('webpack');
var path = require('path');
var ROOT = path.resolve(__dirname, 'src');
var SRC = path.resolve(ROOT, 'js');
var DEST = path.resolve(__dirname, 'dist');
var testFilesConfig = require('./hoth-test-files.js');

require('babel-register');

let customBrowsers = ['Chrome', 'Safari', 'Firefox', 'PhantomJS']

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',
    
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],

    // list of files / patterns to load in the browser
    files: testFilesConfig.files,

    // list of files to exclude NOT EXCLUDING!!!
    exclude: testFilesConfig.excludes,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: testFilesConfig.preprocessors,

    babelPreprocessor: {
      options: {
        presets: ['es2015','stage-2'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },

    coverageReporter: {
      reporters: [
        {'type': 'text'},
        {'type': 'html', dir: 'coverage'},
        {'type': 'lcov'}
      ]
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha','coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: customBrowsers,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    browserify: {
      debug: true,
      transform: [
        [
          'babelify',
          {
            presets: ["es2015", "react", "stage-2"]
          }
        ], [
          'browserify-istanbul',
          {
            instrumenterConfig: {
              embedSource: true
            }
          }
        ]
      ]
    },
 
    webpackServer: {
      noInfo: true
    }

  })
}
