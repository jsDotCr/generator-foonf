var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.log('\nFooNF!\nHTML5/Gulp/AMD yeoman generator.\n');
    this.log(this.sourceRoot());
  },
  prompting: function() {
    var done = this.async();

    var questions = [
      {
        type    : 'input',
        name    : 'appName',
        message : 'What\'s your project name?',
        default : this.appname
      },
      {
        type    : 'input',
        name    : 'appDescription',
        message : 'Any description?',
        default : this.description
      }
    ];

    this.prompt(questions, function (answers) {
      this.appName = answers.appName;
      this.appDescription = answers.appDescription;

      done();
    }.bind(this));
  },

  writing: function(){
    this.src.copy('_.csslintrc', '.csslintrc'); // template maybe?
    this.src.copy('_.jshintrc', '.jshintrc');
    this.src.copy('_.gitignore', '.gitignore');

    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');

    this.template('_config.js', 'js/config.js');
    this.template('_index.js', 'js/index.js');
    this.template('_index.html', 'index.html');
  }
});
