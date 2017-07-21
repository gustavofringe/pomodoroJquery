/**
 *
 *
 *
 * */
var counterBreak = $('#input-break').val();
var counterSession = $('#input-session').val();
/**
 *
 *
 *
 *
 *
 * */

$('.button-session').click(function () {
    if ($(this).val() == '+') {
        counterSession++;
        $("#input-session").val(counterSession);
    }
    if ($(this).val() == '-') {
        if (counterSession > 1) {
            counterSession--;
            $("#input-session").val(counterSession);
        }
    }
});

$('.button-break').click(function () {
    if ($(this).val() == '+') {
        counterBreak++;
        $("#input-break").val(counterBreak);
    }
    if ($(this).val() == '-') {
        if (counterSession > 1) {
            counterBreak--;
            $("#input-break").val(counterBreak);
        }
    }
});
/**
 *
 *
 *
 *
 * */
$('#timer').click(function () {
    //counterSession *=60;
    //counterBreak*=60;
    var x = setInterval(sessionTimer, 1000);

    function sessionTimer() {

        console.log(counterBreak)
        // var percent = counterSession/counterSession*100;
        counterSession--;
        if (counterSession === 0) {
            counterSession = $('#input-session').val();
            console.log(counterSession)
            //counterSession *= 60;
            if (counterBreak === 0) {
                counterBreak = $('#input-break').val();
                counterSession++
                //counterBreak *= 60;
            }
            clearInterval(x);
            var y = setInterval(breakTimer, 1000);
        }

        $('#timerCount').html("s: " + counterSession)
        /*if(counterSession%60>=10){
         $('#timerCount').html("session time"+Math.floor(counterSession/60)+":"+counterSession%60)
         }else{
         $('#timerCount').html("session time"+Math.floor(counterSession/60)+":"+"0"+counterSession%60)
         }*/
        function breakTimer() {
            console.log(counterSession)
            counterBreak--;
            if (counterBreak === 0) {
                counterBreak = $('#input-break').val();
                console.log(counterBreak)
                //counterBreak *= 60;
                if (counterSession === 0) {
                counterSession = $('#input-session').val();
                counterBreak++
                //counterSession *= 60;
            }


                clearInterval(y);
                setInterval(sessionTimer, 1000);
            }
            $('#timerCount').html("b:" + counterBreak)
            /*if(counterBreak%60>=10){
             $('#timerCount').html("break time"+Math.floor(counterBreak/60)+":"+counterBreak%60)
             }else{
             $('#timerCount').html("br
             console.log(counterSession)eak time"+Math.floor(counterBreak/60)+":"+"0"+counterBreak%60)
             }*/
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
