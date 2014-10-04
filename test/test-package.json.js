/*global describe, beforeEach, before, after, it*/

'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var nodeAssert = require('assert');
var packageJsonDefaults = require('../generators/app/defaults/package.json');
var fs = require('fs');

describe('foonf generator', function () {
  var app,
    genOptions = {
      appPath: 'app',
      'skip-install': true,
      'skip-welcome-message': true,
      'skip-message': true
    };

  function executeGenerator(done, prompts){
    helpers.run(path.join( __dirname, '../generators/app'))
      .inDir(path.join(__dirname, './temp'))
      .withOptions(genOptions)
      .withPrompts(prompts || {})
      .on('end', done);
  }

  describe('application name', function(){
    describe('is empty', function() {
      before(function (done) {
        executeGenerator(done, {});
      });

      it('defaults to ' + packageJsonDefaults.name, function (done) {
        assert.file(['package.json'], 'package.json missing!');
        assert.fileContent(
          'package.json',
          new RegExp('"name": "' + packageJsonDefaults.name + '",')
        );
        done();
      });
    });

    describe('is WhateverApp', function() {
      before(function (done) {
        executeGenerator(done, {
          name: 'WhateverApp'
        });
      });
      it('is written and saved properly', function (done) {
        assert.file(['package.json'], 'package.json missing!');
        assert.fileContent(
          'package.json',
          /"name": "WhateverApp",/
        );
        done();
      });
    });
  });


  describe('description', function(){
    describe('is empty', function() {
      before(function (done) {
        executeGenerator(done, {});
      });
      it('defaults to ' + packageJsonDefaults.description, function (done) {
        assert.file(['package.json'], 'package.json missing!');
        assert.fileContent(
          'package.json',
          new RegExp('"description": "' + packageJsonDefaults.description + '",')
        );
        done();
      });
    });

    describe('has been given', function() {
      before(function (done) {
        executeGenerator(done, {
          description: 'Chasing cars, amazing! Sticks, amazing!!'
        });
      });
      it('is written and saved properly', function (done) {
        assert.file(['package.json'], 'package.json missing!');
        assert.fileContent(
          'package.json',
          /"description": "Chasing cars, amazing! Sticks, amazing!!",/
        );
        done();
      });
    });
  });

  describe('version', function() {
    describe('is empty', function () {
      before(function (done) {
        executeGenerator(done, {});
      });
      it('defaults to ' + packageJsonDefaults.version, function (done) {
        assert.file(['package.json'], 'package.json missing!');
        assert.fileContent(
          'package.json',
          new RegExp('"version": "' + packageJsonDefaults.version + '",')
        );
        done();
      });
    });

    describe('has been given', function () {
      before(function (done) {
        executeGenerator(done, {
          version: '1.0.0'
        });
      });
      it('is written and saved properly', function (done) {
        assert.file(['package.json'], 'package.json missing!');
        assert.fileContent(
          'package.json', /"version": "1.0.0",/
        );
        done();
      });
    });
  });

  describe('keywords', function() {
    describe('is empty', function () {
      before(function (done) {
        executeGenerator(done, {});
      });
      it('defaults to ' + packageJsonDefaults.keywords, function (done) {
        assert.file(['package.json'], 'package.json missing!');
        assert.fileContent(
          'package.json',
          new RegExp('"keywords": "' + packageJsonDefaults.keywords + '",')
        );
        done();
      });
    });

    describe('has been given', function () {
      before(function (done) {
        executeGenerator(done, {
          keywords: 'chasing cars, amazing, sticks, amazing'
        });
      });
      it('is written and saved properly', function (done) {
        assert.file(['package.json'], 'package.json missing!');
        assert.fileContent(
          'package.json',
          /"keywords": "chasing cars, amazing, sticks, amazing",/
        );
        done();
      });
    });
  });

  describe('maintainers && contributors', function() {
    describe('are not provided', function () {
      before(function (done) {
        executeGenerator(done, {});
      });
      it('default to "Me"', function (done) {
        assert.file(['package.json'], 'package.json missing!');
        var pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'temp/package.json')));
        nodeAssert.equal(pkg.maintainers[0].name, packageJsonDefaults.maintainerName, 'Default maintainers differ from the default ones!!');
        nodeAssert.equal(pkg.contributors[0].name, packageJsonDefaults.maintainerName, 'Default contributors differ from the maintainers!');
        done();
      });
    });

    describe('are given', function () {
      var maintainer = {
        name: "Mr. hello Worlder"
      };
      before(function (done) {
        executeGenerator(done, {
          maintainerName: maintainer.name
        });
      });
      it('are written and saved properly', function (done) {
        assert.file(['package.json'], 'package.json missing!');
        var pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'temp/package.json')));
        nodeAssert.deepEqual(pkg.maintainers[0], maintainer, 'Maintainer differs from the provided one!');
        nodeAssert.deepEqual(pkg.contributors[0], maintainer, 'Contributor differs from the provided one!');
        done();
      });
    });
  });

  describe('license', function() {
    describe('is not provided', function () {
      before(function (done) {
        executeGenerator(done, {});
      });
      it('defaults to ' + packageJsonDefaults.licenseType, function (done) {
        assert.file(['package.json'], 'package.json missing!');
        var pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'temp/package.json')));
        nodeAssert.equal(pkg.licenses[0].type, packageJsonDefaults.licenseType, 'License type differs from the default one!');
        nodeAssert.equal(pkg.licenses[0].url, packageJsonDefaults.licenseUrl, 'License URL differs from the default one!');
        done();
      });
    });

    describe('is provided', function () {
      var license = {
        type: 'Hyper-closed source',
        url: 'http://none.of.your.biz'
      };
      before(function (done) {
        executeGenerator(done, {
          licenseType: license.type,
          licenseUrl: license.url
        });
      });
      it('is written and saved properly', function (done) {
        assert.file(['package.json'], 'package.json missing!');
        var pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'temp/package.json')));
        nodeAssert.deepEqual(pkg.licenses[0], license, 'License differs from the provided one!');
        done();
      });
    });
  });

  describe('test runner', function() {
    describe('is not provided', function () {
      before(function (done) {
        executeGenerator(done, {});
      });
      it('defaults to no tests', function (done) {
        assert.file(['package.json'], 'package.json missing!');
        assert.fileContent(
          'package.json',
          /"test": "echo \\"Error: no test specified\\" && exit 1"/
        );
        done();
      });
    });

    describe('is mocha', function () {
      before(function (done) {
        executeGenerator(done, {
          testRunner: 'mocha'
        });
      });
      it('is written and saved properly', function (done) {
        assert.file(['package.json'], 'package.json missing!');
        assert.fileContent(
          'package.json', /"test": "mocha"/
        );
        done();
      });
    });
  });
});
