const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Add 'indexStart' and 'limit' query parameters to the '/users' route
server.get('/users', (req, res) => {
	const { limit, indexStart } = req.query;
	const users = router.db.get('users').value();

	if (!users) {
		return res.status(404).json({ message: 'Users data not found' });
	}

	let startIndex = 0;
	if (indexStart) {
		const parsedStartIndex = parseInt(indexStart, 10);
		if (!isNaN(parsedStartIndex)) {
			startIndex = Math.max(0, parsedStartIndex);
		}
	}

	if (limit) {
		const parsedLimit = parseInt(limit, 10);
		const limitedUsers = users.slice(startIndex, startIndex + parsedLimit);
		return res.json(limitedUsers);
	}

	return res.json(users);
});

server.use(router);
const port = 8000;
server.listen(port, () => {
	console.log(`JSON Server is running on http://localhost:${port}`);
});
