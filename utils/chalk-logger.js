module.exports = ({msg, bgColor = 'bgGreenBright', color = 'black', beforeEmptyLines = 0, afterEmptyLines = 0}) => {
  const chalk = require('chalk');
  //
  logEmptyLines(beforeEmptyLines);
  console.log(chalk[bgColor][color](msg));
  logEmptyLines(afterEmptyLines);
}

function logEmptyLines(numberOfLines = 0) {
  for (var i = 0; i < numberOfLines; i++) {
    console.log();
  }
}
