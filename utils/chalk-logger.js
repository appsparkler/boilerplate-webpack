module.exports = (msg, bgColor = 'bgGreenBright', color = 'black', beforeEmptyLines = 0, afterEmptyLines = 0)=> {
  const chalk = require('chalk');
  // 
  for (var i = 0; i < afterEmptyLines; i++) {
    console.log();
  }
  //
  console.log(chalk[bgColor][color](msg));
  //
  for (var i = 0; i < afterEmptyLines; i++) {
    console.log();
  }
}
