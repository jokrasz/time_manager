var time = require("./sysTime").haveSYStime();


function changeTime(time) {
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor((time % 3600) / 60);
    var seconds = (time % 60);
    console.log(hours + ' hours : ' + minutes + ' minutes :' + seconds +' seconds');
    }

exports.convertTime = changeTime;