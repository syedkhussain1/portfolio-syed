const PORT = process.env.PORT || 3000;

server.use(handle).listen(PORT, err => {
	if (err) throw err;
	console.log('> Ready on http://localhost:3000');
});