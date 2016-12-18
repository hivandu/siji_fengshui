// Created by Hivan Du 2015(Siso brand interactive team).

"use strict";

var app = {
    create: function (){
        //  limit browser drag move
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        },true);
        app.mySwiper = new Swiper ('.swiper-container', {
            direction: 'vertical',
            parallax : true,
            noSwiping: false,
            // init
            onInit: function () {
                $('.swiper-container').css('opacity','1');
            },
            onTransitionStart: function (swiper) {
            },
            onTransitionEnd: function (swiper) {
                $('.scene').removeClass('active');
                switch (swiper.activeIndex){
                    case 1:
                        $('.scene02').addClass('active');
                        break;
                    case 2:
                        $('.scene03').addClass('active');
                        break;
                    case 3:
                        $('.scene04').addClass('active');
                        break;
                }
                if( swiper.activeIndex == $('.swiper-slide').length -1 ){
                    $('#iSlider-arrow').hide();
                }else{
                    $('#iSlider-arrow').show();
                }
            }
        });

        function ViewScale(){
            var ViewWidth = $('body').width();
            if(ViewWidth > 540){
                ViewWidth == 540
            }
            console.log(ViewWidth)
            var ViewScale = ViewWidth / 320;
            var style = '-webkit-transform:scale3d(' + ViewScale + ',' + ViewScale + ',' + ViewScale + '); -webkit-transform-origin : 0% 0%;'+'transform:scale3d(' + ViewScale + ',' + ViewScale + ',' + ViewScale + '); transform-origin : 0% 0%;';
            //var dom = document.getElementById('view-box')
            document.body.setAttribute('style',style);
        }
        ViewScale();


        //  first time play BGM
        var initSound = function () {
            //  delay play
            $('#music')[0].play();
            document.removeEventListener('touchstart', initSound, false);
        };
        document.addEventListener('touchstart', initSound, false);
    },

    start: function (){
        this.create();
    }
};

$(function (){
    // init app
    app.start();
    console.log('app started success...');
});