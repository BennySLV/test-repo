/**
 * NODE JS INTRO
 *
 * Node JS is a back-end engine for JavaScript applications.
 *
 * Vanilla JavaScript and its accompanying libraries/frameworks are based on the front-end and therefore
 * do not have the capability of running applications on the back-end.
 *
 * Therefore technologies such as Node JS and more recently its successor, Deno
 * provide functionality for JavaScript to interact with back-end for applications.  Node JS
 * is often used alongside the above front-end technologies to create a full-stack application.
 *
 * Tasks that Node JS is capable of include:
 *
 *  - Server-side programming
 * 	- File system (writing and deleting files to/from the server)
 * 	- Provide information on the computer's Operating System
 * 	- Defining file paths for local files, which are then connected to the server
 *
 * 	And so much more!
 *
 * 	All the above tasks are defined through various modules, which are imported
 *  by Node JS to be used in the application.
 */

const amount = 12;

if (amount < 10) {
	console.log("Number is small");
} else {
	console.log("Number is large");
}

console.log("This is my first node app!");
