/**
 *
 *variables
 *
 * */
var counterSession = 60;
var counterBreak = 60;
var counter = counterSession;
var count;
var inCourse = 'session';
var course = 'go';
//=======================================================action
/**
 *
 *add & sub session value
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
 *add & sub break value
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
 *run timer
 *
 *
 * */
$('#timer').click(function () {
    if (course === 'stop') {
        if (inCourse === 'session') {
            $('#current').html('SESSION !');
        }
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
//===================================================function
/**
 *
 *function runTime
 *@return counter session & break
 *
 *
 * */
function runTime() {
    $('#reset').css('visibility','visible');
    console.log(counter)
    if (counter % 60 <= 9) {
        $('#timerCount').html(Math.floor(counter / 60) + ':0' + counter % 60);
        if (counter <= 0) {
            $('#hourglass').css('height', '0 !important');
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
        $('#hourglass').css('background', '#99CC00');
        var secs = 2/counterSession;
        var denom =2/ counter;
        var perc = Math.abs((secs / denom) * 100 - 100);
        $('#hourglass').css('height',perc+ '%');
    }else{
        $('#hourglass').css('background', 'red');
        var secs = 2/counterBreak;
        var denom =2/ counter;
        var perc = Math.abs((secs / denom) * 100 - 100);
        $('#hourglass').css('height',perc+ '%');
    }
}
