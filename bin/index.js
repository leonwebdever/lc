#!/usr/local/bin/node
const program = require('commander');
const pkg = require('../package');

program
	.usage('[options] [dir]')
	.version(pkg.version)
	.option('-h, --help', '打印帮助信息')
	.option('-d, --direction', '输出目录下文件夹的数量')
	.parse(process.argv);

console.log(program);
