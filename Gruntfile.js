module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            css: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true,
                }
            }
        },
        uglify: {
    build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
    }
},
imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
    }
},
concat: {
    dist: {
        src: [
            'js/*.js', // Все JS в папке libs
            'js/global.js'  // Конкретный файл
        ],
        dest: 'js/build/production.js',
    }
},

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/main.css': 'sass/style.scss'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', [
        'concat',
        'uglify',
        'imagemin',
        'sass',
        'watch'
     ]);

};