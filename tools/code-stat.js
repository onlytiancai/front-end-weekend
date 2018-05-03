const { promisify } = require('util');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const readdirAsync = promisify(fs.readdir);
const lstatAsync = promisify(fs.lstat);
const execAsync = promisify(exec);

const studentsDir = path.resolve(__dirname, 'students');

async function main() {
    const students = await readdirAsync(studentsDir);
    let result = {};

    for (const student of students) {
        const studentDir = path.resolve(studentsDir, student);
        const statInfo = await lstatAsync(studentDir);

        if (statInfo.isDirectory()) {
            console.log(`cd ${studentDir}/`);
            process.chdir(`${studentDir}/`);

            let cmd = `git pull`;
            console.log(cmd);
            let ret = await execAsync(cmd);
            if (ret.err) continue;

            cmd = `sloc --exclude lib -f json ${studentDir}/`;
            console.log(cmd);
            ret = await execAsync(cmd);
            if (ret.err) continue;

            const line = JSON.parse(ret.stdout).summary.source || 0;
            console.log(`${student}\t${line}`);            
            result[student] = line;
        }        
    }
    console.log(result);
}

main();



