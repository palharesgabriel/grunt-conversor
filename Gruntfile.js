module.exports = function(grunt) {
  
  // Adiciona as tarefas do plugin
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-circleci');

  grunt.initConfig({
    
    //Hook no Gitlab
    circleci: {
      token:    'oMv5x2ffk4yzyE16Ucsy',
      username: 'palharesgabriel',
      project:  'grunt-conversor',
      commit:   'Mensagem aleatória'
  },
    
    //Minificação do código
    uglify: {
      options: {
        banner: '/projeto minificado na data <%= grunt.template.today("yyyy-mm-dd") %>/\n'
  },
      build: {
        src: 'app/conversor.js',
        dest: 'app/conversor.min.js'
  }
},
    
    //Configura a análise do código 
    jshint: {
      files: ['Gruntfile.js', 'app/conversor.js', 'test/testConversor.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
    }
  }
},
    
    // Configura uma tarefa de teste unitário Mocha
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'resultado.txt', // Salva a saída em um arquivo
          quiet: false, 
          clearRequireCache: false, 
          noFail: false  
        },
        src: ['test/testConversor.js']
      }
    }
  });
 
  grunt.registerTask('default', ['mochaTest', 'jshint', 'uglify', 'circleci']);
 
};
