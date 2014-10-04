/*global describe, beforeEach, it*/

'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('foonf generator', function () {
  var app,
    expected = [
      '.csslintrc',
      '.editorconfig',
      '.gitignore',
      '.jshintrc',
      'bower.json',
      'js/config.js',
      'js/index.js',
      'index.html',
      'package.json'
    ],
    mockPrompts = {

    },
    genOptions = {
      'appPath': 'app',
      'skip-install': true,
      'skip-welcome-message': true,
      'skip-message': true
    };

  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      app = helpers.createGenerator(
        'foonf:app',
        [
          '../../generators/app'
        ],
        false,
        genOptions
      );
      helpers.mockPrompt(app, mockPrompts);

      done();
    });
  });

  it('creates expected files', function (done) {
    /*
    helpers.mockPrompt(this.app, {
      'someOption': 'Y'
    });
     this.app.options['skip-install'] = true;
    */
    app.run({}, function () {
      helpers.assertFile(expected);

      done();
    });
  });
});
