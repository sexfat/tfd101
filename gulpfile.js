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

function move() {
    return src('dev/*.html').pipe(dest('dist'));
} 

//執行任務
exports.mv = move;



