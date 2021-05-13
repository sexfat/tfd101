console.log('webpack start');
//套件引入
import $ from "jquery";
import { TweenMax } from "gsap";

// css 引入
import './sass/main.scss';





// jquery
// $('body').css('background-color' , '#eee' );

//tweenmax
TweenMax.to('.box' , 1 , {
    x : 300,
    y: 100,
    rotation : 180
})

