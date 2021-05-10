// FILE SYSTEM (ASYNCHRONOUS) - "NON-BLOCKING" APPROACH

const { readFile, writeFile } = require("fs");
console.log("start");

readFile("./content/first.txt", "utf8", (error, result) => {
	// Insert above encoding (e.g "utf8") to replace buffer text with file content
	if (error) {
		console.log(error);
		return;
	}
	const first = result;
	readFile("./content/second.txt", "utf8", (error, result) => {
		if (error) {
			console.log(error);
			return;
		}
		const second = result;
		writeFile(
			"./content/result-async.txt",
			`Here is the result: ${first}, ${second}`,
			(error, result) => {
				if (error) {
					console.log(error);
					return;
				}
				console.log("Done with this task");
			}
		);
	});
});
