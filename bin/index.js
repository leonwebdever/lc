#!/usr/local/bin/node

const program = require('commander');
const pkg = require('../package');
const exec = require('child_process').exec;

program
	.version(pkg.version)
	.usage('[options] [dir]')
	.description(pkg.description)
	.option('-d, --directory', 'output directory folder count')
	.option('-f, --file', 'output directory file count')
	.parse(process.argv);

main();

/**
 * main promarm
 */
function main() {
	let destinationPath = program.args.shift() || '.';

	if (program.file) {
		exec('ls -l | grep "^-" | wc -l ', { cwd: destinationPath }, (err, stdout) => {
			console.log(stdout);
		});
	} else if (program.directory) {
		exec('ls -l | grep "^d" | wc -l ', { cwd: destinationPath }, (err, stdout) => {
			console.log(stdout);
		});
	} else {
		exec('ls -l | grep -e "^[d-]" | wc -l ', { cwd: destinationPath }, (err, stdout) => {
			console.log(stdout);
		});
	}
}
