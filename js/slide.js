/**
 * Created by kgc on 2017/8/10.
 */
//�ֲ�����
$(function(){
    //�����ֲ�ͼƬ���±�
    var page = -1;
    var stop = true; //�����ֲ��Ƿ�Ҫֹͣ�����

    //�����ֲ�����
    function slide(){
        if(stop){
            page++;
            //�������һ�ţ��ٴӵ�һ�����¿�ʼ�ֲ�
            if(page == 5){
                page  = 0;
            }

            //���Ȱ�����ͼƬ�����أ�ͬʱ���а�ť���ǻ�ɫδѡ��״̬
            $("#focus img").fadeOut(200);
            $("#page-con li").css({"background":"#3e3e3e"});

            //�������±�Ϊpage������ͼƬ��ʾ������ͬʱ��page��ťѡ��״̬
            $("#focus img").eq(page).fadeIn();
            $("#page-con li").eq(page).css({"background":"#b61b1f"});
        }
        setTimeout(slide,1000);
    }

    slide();

    //�����ͣ���뿪Ч��
    $("#focus").mouseover(function(){
        //ֹͣ�ֲ�
        stop = false;
    }).mouseout(function(){
        //�����ֲ�
        stop = true;
    });

});