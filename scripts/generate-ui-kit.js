
const { join } = require('path');
const fse = require('fs-extra');
const util = require('util');
const pexec = util.promisify(require('child_process').exec);
const colors = require('colors');

function uiKitTask() {
  const currentPath = process.cwd();
  const templatePath = join(__dirname, '../templates/ui-kit');

  return pexec('npm install bootstrap@4.1.3 font-awesome@4.7.0 --save').then(() => {
      return fse.copy(templatePath, `${currentPath}/projects/ui-kit/src`).then(() => {
        console.info(`${colors.green('APPLY TEMPLATE')} template of ui-kit applied`);
      });
  });

}

module.exports = uiKitTask;
