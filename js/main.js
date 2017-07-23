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
 *
 *
 *
 * */
$('#reset').click(function () {
    window.location.reload();
});
/**
 *
 *
 *
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
 *
 *
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
 *
 *
 *
 * */
function pause() {
    clearInterval(count);
}
/**
 *
 *
 *
 *
 * */
function animation() {
    /*if(inCourse === 'session'){
     var slide = counter/counterSession;
     }else if (inCourse === 'break'){
     var slide = counter/counterBreak;
     }*/

    $('.hourglass').animate({
        height: '+=1%',
    })
}
