var count = 1
var counterBreak =$('.input-break').val();
$('.button-session').click(function(){
    var counterSession =$('.input-session').val();
    if($(this).val() == '+'){
            count++;
            $(".input-session").val(count);
    }
    if($(this).val() == '-'){
        if(counterSession > 1){
            count--;
            $(".input-session").val(count);
        }
    }
});
$("#timer").click(function(){
   $('.hourglass').animate({
        height:"+=10px",
       width:"+=10px"
    });
});