/**
 *
 *
 *
 * */
var counterBreak =parseInt($('#input-break').val());
var counterSession =parseInt($('#input-session').val());
/**
 *
 *
 *
 *
 * */
$('#timer').click(function(){
    counterSession *=60;
    counterBreak *=60;
    var x =setInterval(sessionTimer,1000);
    function sessionTimer(){
        counterSession -=1
        if(counterSession === 0){
            clearInterval(x);
            counterBreak =parseInt($('#input-session').val());
            counterBreak*=60;
            var y =setInterval(breakTimer,1000);
        }
        if(counterSession%60>=10){
            $('#timerCount').html("session time"+Math.floor(counterSession/60)+":"+counterSession%60)
        }else{
            $('#timerCount').html("session time"+Math.floor(counterSession/60)+":"+"0"+counterSession%60)
        }
        function breakTimer(){
            console.log(counterSession)
            counterBreak -=1;
            if(counterBreak === 0){
                clearInterval(y);
                counterSession =parseInt($('#input-session').val());
                counterSession*=60;
                setInterval(sessionTimer,1000);
            }
            if(counterBreak%60>=10){
                $('#timerCount').html("break time"+Math.floor(counterBreak/60)+":"+counterBreak%60)
            }else{
                $('#timerCount').html("break time"+Math.floor(counterBreak/60)+":"+"0"+counterBreak%60)
            }
        }
    }
});
/**
 *
 *
 *
 *
 *
 * */

$('.button-session').click(function(){
    if($(this).val() == '+'){
            counterSession+=1;
            $("#input-session").val(counterSession);
    }
    if($(this).val() == '-'){
        if(counterSession > 1){
            counterSession-=1;
            $("#input-session").val(counterSession);
        }
    }
});

$('.button-break').click(function(){
    if($(this).val() == '+'){
            counterBreak+=1;
            $("#input-break").val(counterBreak);
    }
    if($(this).val() == '-'){
        if(counterSession > 1){
            counterBreak-=1;
            $("#input-break").val(counterBreak);
        }
    }
});
/*
$("#timer").click(function(){
   $('.hourglass').animate({
        height:"+=10px",
       width:"+=10px"
    });
});*/
