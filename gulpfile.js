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

//watch
exports.watchfile = function(){
    watch('dev/*.html' , move)
    // watch('dev/sass/*.scss')
    // watch('dev/sass/*.scss' , move)
}


