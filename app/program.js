

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/sysTime':
            	console.log("czasu działania systemu")
            	var convTime = require("../modules/OSinfo").convertTime();
                process.stdout.write(convTime);
                process.exit();
                break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
            	process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});

