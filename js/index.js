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
        return false;
    })
    $(".J_change_head").on("click",function(){
        $("#zhezhao").show();
        $(".J_upload_face").show();
    })
    $(".J_cancel").on("click",function(){
        $("#zhezhao").hide();
        $(".J_upload_face").hide();
    })
    function checkFace(){
        var index=0;
        var oFaceList=$(".J_face_list li");
        var listLi=oFaceList.length;
        var width=oFaceList.outerWidth();
        checkFace=function(flag){
            if(flag){
                console.log(index);
                if(index <= 0){
                    return false;
                }else{
                    var left=--index*width;
                    $(".J_btn_right").addClass("beable");
                    $(".J_face_list").animate({'left':-left},500,function(){
                        if(index <= 0){
                            $(".J_btn_left").removeClass("beable");
                        }
                    })
                }
            }else{
                console.log(index,listLi);
                if(index >= (listLi-1)){
                    return false;
                }else{
                    var left=++index*width;
                    $(".J_btn_left").addClass("beable");
                    $(".J_face_list").animate({'left':-left},500,function(){
                        if(index >= (listLi-1)){
                            $(".J_btn_right").removeClass("beable");
                        }
                    })
                }
            }
        }
        return checkFace;

    }
    checkFace();
    $(".J_btn_left").on("click",function(){
        checkFace(true);
    })
    $(".J_btn_right").on("click",function(){
        checkFace(false);
    })
    $(".J_face_style").on("click",function(){
        $(this).parents(".J_which_face").hide();
        var id=$(this).data("id");
        $("#"+id).show();
    })
    $(".J_reset_test").on("click",function(){
        $(".J_which_face").hide().filter("#face_style1").show();
    })
})