const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
const { promisify } = require('util');

const readdirAsync = promisify(fs.readdir);
const lstatAsync = promisify(fs.lstat);
const execAsync = promisify(exec);

const studentsDir = path.resolve(__dirname, 'students');

async function main() {
    const students = await readdirAsync(studentsDir);

    for (const student of students) {
        const studentDir = path.resolve(studentsDir, student);
        const statInfo = await lstatAsync(studentDir);

        if (statInfo.isDirectory()) {            

            let cmd = `cd ${studentDir}/`;
            console.log(cmd);
            let ret = await execAsync(cmd);
            if (ret.err) continue;

            cmd = `git pull`;
            console.log(cmd);
            ret = await execAsync(cmd);
            if (ret.err) continue;

            cmd = `sloc --exclude jquery* -f json ${studentDir}/`;
            console.log(cmd);
            ret = await execAsync(cmd);
            if (ret.err) continue;

            const line = JSON.parse(ret.stdout).summary.source || 0;
            console.log(`${student}\t${line}`);
        }
    }
}

main();



