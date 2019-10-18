module.exports = function setBrandOnResult() {
  try {
    const inquirer = require('inquirer');
    const glob = require('glob');
    const paths = require(`${process.env.INIT_CWD}/config/paths`);
    const {resolve} = require('path');
    const brands = glob.sync('*', {
      cwd: resolve(paths.srcDir, 'brands'),
    });
    const prompts = [{
      type: 'rawlist',
      name: 'brand',
      message: 'Select brand:',
      choices: brands || [],
    }];
    return inquirer
        .prompt(prompts)
        .then((answers) => {
          process.env.BRAND = answers.brand || 'DEFAULT';
        });
  } catch (e) {
    console.log(e);
  }
};
