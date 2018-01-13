var os = require('os');

function getSYStime() {
	var uptime = os.uptime();
	return uptime;
}

exports.haveSYStime = getSYStime;