/**
 * Created by kgc on 2017/8/10.
 */
//轮播代码
$(function(){
    //设置轮播图片的下标
    var page = -1;
    var stop = true; //设置轮播是否要停止或继续

    //定义轮播函数
    function slide(){
        if(stop){
            page++;
            //到了最后一张，再从第一张重新开始轮播
            if(page == 5){
                page  = 0;
            }

            //首先把所有图片都隐藏，同时所有按钮都是灰色未选中状态
            $("#focus img").fadeOut(200);
            $("#page-con li").css({"background":"#3e3e3e"});

            //单独让下标为page的那张图片显示出来，同时让page按钮选中状态
            $("#focus img").eq(page).fadeIn();
            $("#page-con li").eq(page).css({"background":"#b61b1f"});
        }
        setTimeout(slide,1000);
    }

    slide();

    //鼠标悬停和离开效果
    $("#focus").mouseover(function(){
        //停止轮播
        stop = false;
    }).mouseout(function(){
        //继续轮播
        stop = true;
    });

});