var yeoman = require('yeoman-generator');

var packageDefaults = require('./defaults/package.json');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    'use strict';
    yeoman.generators.Base.apply(this, arguments);

    this.log('\nFooNF!\nHTML5/Gulp/AMD yeoman generator.\n');
  },

  prompting: function() {
    'use strict';

    var done = this.async();

    var questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What\'s your project name?',
        default: packageDefaults.name
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description',
        default: packageDefaults.description
      },
      {
        type: 'input',
        name: 'version',
        message: 'Starting version number',
        default: packageDefaults.version
      },
      {
        type: 'input',
        name: 'keywords',
        message: 'Project keywords',
        default: packageDefaults.keywords
      },
      {
        type: 'input',
        name: 'maintainerName',
        message: '...And what\'s your name?',
        default: packageDefaults.maintainerName
      },
      {
        type: 'input',
        name: 'licenseType',
        message: 'License type for this project.',
        default: packageDefaults.licenseType
      },
      {
        type: 'input',
        name: 'licenseUrl',
        message: 'License URL',
        default: packageDefaults.licenseUrl,
        when: function(answers){
          return answers.licenseType !== packageDefaults.licenseType;
        }
      },
      {
        type: 'input',
        name: 'repositoryType',
        message: 'Repository type',
        default: packageDefaults.repositoryType
      },
      {
        type: 'input',
        name: 'repositoryUrl',
        message: 'Starting version number',
        default: packageDefaults.repositoryUrl
      },
      {
        type: 'list',
        name: 'testRunner',
        message: 'Which testing framework will you use?',
        default: packageDefaults.testRunner,
        choices: [
          {
            name: 'No tests at all. I\'m Chuck Norris. A looser version of him.',
            value: packageDefaults.testRunner
          },
          {
            name: 'Mocha',
            value: 'mocha'
          },
          {
            name: 'Cucumber.js',
            value: 'cucumber.js'
          },
          {
            name: 'Jasmine',
            value: 'jasmine-node spec/'
          },
          {
            name: 'Buster.js',
            value: 'buster-test'
          }

        ]
      }
    ];

    this.prompt(questions, function (answers) {
      this.project = {
        name: answers.name,
        description: answers.description,
        version: answers.version,
        keywords: answers.keywords,
        maintainerName: answers.maintainerName,
        licenseType: answers.licenseType,
        licenseUrl: answers.licenseUrl,
        repositoryType: answers.repositoryType,
        repositoryUrl: answers.repositoryUrl,
        testRunner: answers.testRunner
      };
      done();
    }.bind(this));
  },

  writing: function(){
    'use strict';

    this.src.copy('_.csslintrc', '.csslintrc');
    this.src.copy('_.editorconfig', '.editorconfig');
    this.src.copy('_.gitignore', '.gitignore');
    this.src.copy('_.jshintrc', '.jshintrc');

    this.template('_bower.json', 'bower.json');
    this.template('_package.json', 'package.json');
    this.template('_Gulpfile.js', 'Gulpfile.js');

    this.template('_config.js', 'js/config.js');
    this.template('_index.js', 'js/index.js');
    this.template('_index.html', 'index.html');
  }
});
