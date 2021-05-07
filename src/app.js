console.log('webpack start');
//套件引入
import $ from "jquery";
import {TweenMax} from "gsap";




// jquery
$('body').css('background-color' , '#f20' );

//tweenmax
TweenMax.to('.box' , 1 , {
    x : 100,
    rotation : 180
})

