/**
 * Created by feifei on 2016/2/28.
 */
$(function(){
    $(".J_tab li").each(function(index){
        $(this).on("click",function(){
            $(this).addClass("cur").siblings().removeClass("cur")
            $(".J_tab_con li").eq(index).show().siblings().hide();
            if($(this).data("show")){
                $(".J_face_style").show()
                $("#faceStyle").show()
            }else{
                $(".J_face_style").hide();
                $("#faceStyle").hide()
            }
        })
    })
    $(".J_coat span").each(function(){
        $(this).on("click",function(){
            $(this).addClass("class_cur").parent().find("span").removeClass("class_cur");
            $("#coat").html($(this).html())
        });
    })
    $(".J_face_class li").each(function(index){
        $(this).on("click",function(){
            $(this).addClass("cur").siblings().removeClass("cur");
            $("#faceStyle").html($(this).find("p").html())
        })
    })
    $(".J_occasion span").each(function(){
        $(this).on("click",function(){
            $(this).addClass("class_cur").siblings().removeClass("class_cur")
            $("#occasion").html($(this).html())
        })
    })
    $(".J_close").on("click",function(){
        $("#zhezhao").hide();
        $(this).parent().hide();
    })
    $(".J_face_ts").on("click",function(){
        $("#zhezhao").show();
        $("#face_ts").show();
    })
    $(".J_test_myself").on("click",function(){
        $("#zhezhao").show();
        $("#test_myself").show();
    })
})