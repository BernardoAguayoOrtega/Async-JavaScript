// fix callback hell with promises

const { resolve } = require('path');

// callbacks --> promises

// results :
// pending
// fulfilled
// rejected

const promise = new Promise((resolve, reject) =>
	true ? resolve('hey') : reject('not'),
);

promise
	.then((result) => console.log(result))
	.catch((error) => console.log(error));
