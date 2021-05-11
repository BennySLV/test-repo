/**
 * NPM (Node Package Manager)
 *
 * NPM provides a large range of packages that can be imported and used
 * within any given JavaScript application.  This includes applications built
 * using a specific library or framework.  Such as React, Vue and Angular.
 *
 * Packages can be imported as used globally (i.e. for all projects)
 * or locally (i.e for use in an existing project).
 *
 * Packages can be installed from NPM using the following terminal command:
 *
 * npm install -g (global) <package-name> --> for use in any project
 *
 * Locally, the above terminal command would instead be:
 *
 * npm i ("i" stands for "install") <package-name>
 *
 * For access and simplicity, it is best to install all npm packages
 * locally.  This is so that these packages are only used in specific projects.
 * As it is very likely that not all projects will contain the same set of packages.
 *
 * Along with all npm modules, a package.json file is required. Simply put,
 * the latter is a manifest file that contains important project information.  The package.json
 * file is automatically installed when the following commands are run in the terminal:
 *
 * npm init --> walk through all of the various properties within the file
 * npm init -y ("y" stands for "yes") --> all properties added by default.  These can be changed later.
 *
 * The package.json file can also be created manually in the project root folder.
 * Then hard-coding all packages manually within the file itself.
 * Although unsurprisingly, this approach is rarely used due to it being
 * highly time-consuming as well as error-prone.
 */

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
