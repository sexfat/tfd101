const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');


// 宣告任務
function defaulTask(cb){
    console.log('gulp 安裝成功');
    cb();
} 

//執行任務
exports.do = defaulTask;


//搬家任務 dev -> dist

function move() {
    return src('dev/*.html').pipe(dest('dist'));
} 

//執行任務
exports.mv = move;


// 宣告A任務
function A(cb){
    console.log('A 任務');
    cb();
} 

// 宣告B任務
function B(cb){
    console.log('B 任務');
    cb();
} 

// 宣告C任務
function C(cb){
    console.log('C 任務');
    cb();
} 

// 宣告D任務
function D(cb){
    console.log('D 任務');
    cb();
} 


exports.m1 = parallel(A , B );//  同時執行任務 
exports.m2 = series(A , B);//  依序執行任務 
exports.m3 = series(A , parallel(B , C ) ,D);//  依序A執行任務完 -> 同時執行 B, C 





const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// function uglifyjs(){
//     //
// }

// exports.ugjs = uglifyjs();

// js 壓縮
exports.ugjs = function(){
  // uglify js 任務輸出
  return src('dev/js/*.js')
  .pipe(uglify())
  .pipe(rename({
           extname: '.min.js'
         })) // rename js
  .pipe(dest('dist/js'));
}



//css 壓縮
const cleanCSS = require('gulp-clean-css');

exports.minicss =  function() {
    return src('dev/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie10'})) //
    .pipe(rename({
        extname: '.min.css'
      })) //rename css
    .pipe(dest('dist/css/'))
}


// sass 編譯

const sass = require('gulp-sass');


function sassStyle() {
    return src('dev/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie10'})) //
        .pipe(rename({
            extname: '.min.css'
          })) //rename css
        .pipe(dest('dist/css'));
};
exports.style = sassStyle;



// html template

const fileinclude = require('gulp-file-include');

exports.html =  function includeHTML() {
    return src('dev/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('dist'));
}




//watch
exports.watchfile = function(){
    watch('dev/*.html' , includeHTML)
    watch('dev/sass/*.scss' , sassStyle)
    // watch('dev/sass/*.scss' , move)
}


const browserSync = require('browser-sync');
const reload = browserSync.reload;


function browser(done) {
    browserSync.init({
        server: {
            baseDir: "./dist",
            index: "index.html"
        },
        port: 3000
    });
    done();
}

exports.b = browser











