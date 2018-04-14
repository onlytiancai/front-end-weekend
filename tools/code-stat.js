var fs = require('fs');
var exec = require('child_process').exec;
var path = require('path');

var source = 'tools/students/';
var files = fs.readdirSync(source);
files.map(function (student) {
    if (fs.lstatSync(path.join(source, student)).isDirectory()) {

        console.log(student);
        exec(`sloc --exclude jquery* -f json tools/students/${student}/`, (err, stdout, stderr) => {
            if (err) return;

            var line = JSON.parse(stdout).summary.source || 0;            
            console.log(`${student}\t${line}`);
        });

    }
});


