/**
 *
 *
 *
 * */
var counterSession = 60;
var counterBreak = 60;
var counter = counterSession;
var count;
var inCourse = 'session';
var course = 'go';
/**
 *
 *
 *
 *
 * */
$('.button-session').click(function () {
    if ($(this).val() === '+') {
        if (inCourse === 'session') {
            counter += 60;
        }
        counterSession += 60;
        $('#session-length').val(counterSession / 60);
        runTime();
    }
    if ($(this).val() === '-') {
        if (counterSession / 60 > 1) {
            if (inCourse === 'session') {
                counter -= 60;
            }
            counterSession -= 60;
            $('#session-length').val(counterSession / 60);
            runTime();
        }
    }
});
/**
 *
 *
 *
 *
 * */
$('.button-break').click(function () {
    if ($(this).val() === '+') {
        if (inCourse === 'break') {
            counter += 60;
        }
        counterBreak += 60;
        $('#break-length').val(counterBreak / 60);
        runTime();
    }
    if ($(this).val() === '-') {
        if (counterBreak / 60 > 1) {
            if (inCourse === 'break') {
                counter -= 60;
            }
            counterBreak -= 60;
            $('#break-length').val(counterBreak / 60);
            runTime();
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
    if (course === 'stop') {
        if (inCourse === 'session') {
            $('#current').html('SESSION !');
        }
        $('#reset').css('visibility', 'visible');
        run();
        course = 'go';
    } else {
        pause();
        course = 'stop';
    }
});
/**
 *
 *reset button
 *
 *
 * */
$('#reset').click(function () {
    window.location.reload();
});
/**
 *
 *function runTime
 *@return counter session & break
 *
 *
 * */
function runTime() {
    if (counter % 60 <= 9) {
        $('#timerCount').html(Math.floor(counter / 60) + ':0' + counter % 60);
        if (counter <= 0) {
            clearInterval(count);
            if (inCourse === 'session') {
                $('#current').html('BREAK !');
                $('#timer').css('border', '2px solid red');
                counter = counterBreak;
                inCourse = 'break';
                run();
            } else {
                $('#current').html('SESSION !');
                $('#timer').css('border', '2px solid #99CC00');
                counter = counterSession;
                inCourse = 'session';
                run();
            }
        }
    } else {
        $('#timerCount').html(Math.floor(counter / 60) + ':' + counter % 60);
    }
    animation();
}
/**
 *
 *function run
 *@return function runTime
 *
 * */
function run() {
    count = setInterval(function () {
        counter--;
        runTime();
    }, 1000);
}
/**
 *
 *function pause
 *@return pause timer when click
 *
 * */
function pause() {
    clearInterval(count);
}
/**
 *
 *
 *animation function
 *
 * */
function animation() {
    if(inCourse === 'session'){
     var slide = counter/counterSession*0.6;
     $('#timer').css('background', '#99CC00','height', slide+'%');

     }else if (inCourse === 'break'){
     var slide = counter/counterBreak;
        $('#timer').css('background', 'red');
     }
}
