/**
 * Created by feifei on 2016/3/6.
 */
$(function(){
    $(".J_da_ren").on("click",function(){
        $(".zhezhao").show();
        $(".leave_message").show();
    })
    $(".J_close").on("click",function(){
        $("#zhezhao").hide();
        $(this).parent().hide();
    })
})