var fs = require("fs");

// 把全部文本按换行符分割成行
// 参数：纯文本文件
// 返回：[string, string]
function splitlines(txt) {
    return txt.split('\r\n');
}

// 把一行文本按逗号分割成列
// 参数：逗号分割的一行字符串
// 返回：{name: string, subject: string, score: float}
function parseLine(line) {
    var arr = line.split(',');
    return {
        name: arr[0],
        subject: arr[1],
        score: parseFloat(arr[2])
    };
}

// 把纯文本解析成内存表格
// 参数：纯文本文件
// 返回：[{name: string, subject: string, score: float}]
function parseAll(txt) {
    var result = [];
    var lines = splitlines(txt);
    var line;    
    var student;

    // 跳过第一行的表头
    for (var i = 1; i < lines.length; i++) {
        line = lines[i];
        student = parseLine(line);
        result.push(student);
    }

    return result;
}

// 班级人数
// 参数：[{name: string, subject: string, score: float}]
// 返回：int
function studentCount(students) {
    var dict = {}; // 辅助计数的字典，判断某学生是否已经计数
    var count = 0;
    var student;

    for (var i = 0; i < students.length; i++) {
        student = students[i];
        if (!dict.hasOwnProperty(student.name)) {
            dict[student.name] = student;
            count++;
        }
    }

    return count;
}

// 计算平均值
// 参数：[float, float]
// 返回：flaot
function calcAvg(arr) {
    var total = 0;

    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total / arr.length;
}

// 求平均分最高的学生
// 参数：[{name: xxx, avg: xxx}]
// 返回：{name: xxx, avg: xxx}
function findMaxAvg(arr) {
    var result = arr[0]; // 假设第 1 个学生平均分最高
    var item;

    // 从第 2 个学生开始对比
    for (var i = 1; i < arr.length; i++) {
        item = arr[i];
        if (item.avg > result.avg) {
            result = item;
        }
    }

    return result;
}

// 按平均分排序
// 参数：[{name: xxx, avg: xxx}]
// 返回值：[{name: xxx, avg: xxx}]
function sortByAvg(arr) {
    var t;

    // 冒泡排序实现
    for (var i = 0; i < arr.length - 1; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].avg > arr[j + 1].avg) {
                t = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = t;
            }
        }
    }
}

// 按姓名分组
// 参数：[{name: string, subject: string, score: float}]
// 返回：{name: {name: string, subject: string, score: flaot}}
function groupByName(students) {
    var result = {};    
    var student;

    for (var i = 0; i < students.length; i++) {
        student = students[i];
        if (!result.hasOwnProperty(student.name)) {
            // 不存在，则赋值一个数组，里面是第一个学生
            result[student.name] = [student];
        } else {
            //已存在时，肯定是个数组，直接 push 第二个学生
            result[student.name].push(student);
        }
    }

    return result;
}

// 获取分数列表
// 参数：[{name: string, subject: string, score: float}]
// 返回：[float, float]
function getScores(students) {
    var result = [];

    for (var i = 0; i < students.length; i++) {
        result.push(students[i].score);
    }

    return result;
}

// 修改为分数列表
// 参数：{name: {name: string, subject: string, score: flaot}}
// 返回：{name: [float, float]}
function mapScores(groupedStudents) {
    var result = {};

    for (var name in groupedStudents) {
        result[name] = getScores(groupedStudents[name]);
    }

    return result;
}

// 根据平均分过滤学生
// 参数 students: [{name: string, avg: number}]
// 参数 op：string, <, <=, >, >=
// 参数 score: number
// 返回值：[{name: string, avg: number}]
function filterByAvg(students, op, score) {
    var result = [];
    var student;

    for (var i = 0; i < students.length; i++) {
        student = students[i];

        if (op == '<' && student.avg < score) {
            result.push(student);
        } else if (op == '>' && student.avg > score) {
            result.push(student);
        } else if (op == '<=' && student.avg <= score) {
            result.push(student);
        } else if (op == '>=' && student.avg >= score) {
            result.push(student);
        } else {
            // do nothing
        }        
    }

    return result;
}

// 求每个学生的平均分数
// 参数：{name1: [number, number], name2: [number, number]}
// 返回：[{name: xxx, avg: xxx}]
function mapAvgScore(dict) {
    var result = [];
    var scores;

    for (var key in dict) {
        scores = dict[key];
        result.push({ name: key, avg: calcAvg(scores) });
    }

    return result;
}

function printValue(value, title) {    
    if (title) console.log(title);    
    console.log(value);  
    if (title) console.log('---');
}

function printRow(data, title) {
    if (title) console.log(title);
    
    var s = '';
    for (var key in data) {
        s += data[key] + ' ';
    }
    console.log(s);

    if (title) console.log('---');
}

function printTable(data, title) {    
    if (title) console.log(title);
    
    for (var i = 0; i < data.length; i++) {         
        printRow(data[i]);
    }
    
    if (title) console.log('---');    
}

function printGroup(group, title) {
    if (title) console.log(title);
    
    for (var key in group) {
        console.log('###', key);
        printTable(group[key]);
    }

    if (title) console.log('---');    
}

function printScores(dict, title) {
    if (title) console.log(title);

    var s = '';
    var scores;
    for (var name in dict) {
        scores = dict[name];
        console.log(name, ':', scores.join(','));
    }
    console.log(s);

    if (title) console.log('---');    
}

function process(txt) {

    var allStudents;      // 所有学生
    var groupedStudents;  // 按姓名分组的学生
    var filteredStudents; // 平均分符合某条件的学生

    var studentScores;    // 每个学生的分数列表
    var studentAvgScores; // 每个学生的平均分

    var student;          // 临时变量

    allStudents = parseAll(txt);
    printTable(allStudents, '全部学生');
    
    printValue(studentCount(allStudents), '全部人数');

    groupedStudents = groupByName(allStudents);
    printGroup(groupedStudents, '按姓名分组');

    studentScores = mapScores(groupedStudents);
    printScores(studentScores, '每个人的分数列表');
    
    studentAvgScores = mapAvgScore(studentScores);
    printTable(studentAvgScores, '每人平均分数');

    sortByAvg(studentAvgScores);
    printTable(studentAvgScores, '排序后每人平均分数');

    student = findMaxAvg(studentAvgScores);
    printRow(student, '平均分最高的学生');
    
    filteredStudents = filterByAvg(studentAvgScores, '>=', 90);
    printTable(filteredStudents, '平均分大于 90 分的学生');    
    
    filteredStudents = filterByAvg(studentAvgScores, '<', 60);
    printTable(filteredStudents, '平均分不及格的学生');
    
}

var data = fs.readFileSync(__dirname + '/students.csv');
process(data.toString());