'use strict';
/*
* Dependencias
*/
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');



/*
* Configuración de la tarea para traspilar código a 'es5'
*/
gulp.task('es5', function (done) {
  gulp.src('js/*.js')
  .pipe(babel({
            presets: ['env']
        }))
//  .pipe(concat('union.js'))
//  .pipe(uglify())
  .pipe(gulp.dest('js/build_ES5/'))
  done();
});


//Tarea que se ejecuta cuando los ficheros sufren algún cambio
gulp.task('watch', function(){
	gulp.watch('js/*', ['es5']);
});



//Tarea por defecto que ejecuta las anteriores tareas
gulp.task('default', ['es5', 'watch']);
